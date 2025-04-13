import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: false,
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
@Input() usersArray:Array<any> = [];



deleteEventEmitterSub(i:number){
  this.usersArray.splice(i, 1)
}
}
