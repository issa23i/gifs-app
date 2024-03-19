import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit{
  ngOnInit(): void {
    if(!this.url)throw new Error('url is required');
    if(!this.alt)this.alt='No description';
  }

  @Input()
  public url!:string

  @Input()
  public alt!:string


  private _hasLoaded: boolean = false;
  public get hasLoaded(): boolean {
    return this._hasLoaded;
  }

  onLoad():void{
    console.log('Image loaded')
    this._hasLoaded = true
  }
}
