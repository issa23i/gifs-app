import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResult } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

  private gifs : Gif[] = []

  private _tagHistory: string[] = [];
  private apiKey: string = environment.apiKey;
  private baseUrl:string = environment.baseUrl;
  private limit:number = 10;


  constructor(private http:HttpClient) { }


  public get tagHistory(): string[] {
    // retorna una copia del arreglo para que no se modifique desde afuera
    return [...this._tagHistory];
  }

  private organizeHistory(tag:string) {
    tag = tag.toLowerCase()
    if(this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter(oldTag => oldTag!== tag);
    }
    this._tagHistory.unshift(tag)
    this._tagHistory = this._tagHistory.splice(0,10)
  }

  searchTag(tag: string) : void{
    if(tag.length === 0)return;

    this._tagHistory.unshift(tag);
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', String(this.limit));

    this.http.get<SearchResult>(`${this.baseUrl}/search?`,{params})
      .subscribe((res )=> {
        this.gifs=res.data;
        console.log(res.data[0].title);
      })

}



/*
    fetch()
        .then(response => response.json())
        .then(data => {
           console.log(data);

        })
 */



}
