import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes: string[] = ["Spiderman","IronaMan","thor"];
  heroeborrado:string = "";
 
 
  borrarHeroe():void{
      const heroeBor = this.heroes.pop() || "";

      this.heroeborrado = heroeBor;
      console.log("borrando " + this.heroeborrado);
  }


}
