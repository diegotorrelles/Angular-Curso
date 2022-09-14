import {Component} from "@angular/core"



@Component({
    selector: "app-contador",
    template: `

<h1>{{title}}</h1>
<h3>la base es: <strong></strong></h3>

<button (click)="sumar()">+1</button>

<span> {{num}} </span>

<button (click)="restar()">-1</button>
    `
})
export class ContadorComponent{

    title: string = 'Contador App';
  num: number = 0;


sumar(){
  this.num +=1;
}

restar(){
  this.num -=1;
}

}