import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

import 'hammerjs/hammer';
 
@Component({
  selector: 'lista-imagen',
  templateUrl: './lista-imagen.component.html',
  styleUrls: ['./lista-imagen.component.css']
})
export class ListaImagenComponent implements OnInit {

  images: any[];
  imagesFound: boolean = false;
  searching:boolean=false;


  constructor( private _imageService: ImageService) { }

  handleSuccess(data){
    this.imagesFound = true;
    this.images=data.hits;
    console.log(data.hits);
  }

  handleError(error){
    console.log(error);
  }

  buscarImagenes(query:string){
      this.searching = true;
      return this._imageService.getImage(query).subscribe(
        data => this.handleSuccess(data),
        error => this.handleError(error),
        ()=> this.searching = false,
      )
  }

  ngOnInit() {
    console.log("acabas de utilizar el componente lista de imagenes")
  }

}
