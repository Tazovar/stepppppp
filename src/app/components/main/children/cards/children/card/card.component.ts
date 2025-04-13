import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() myUser:any
@Input() index!:number
@Output() deleteEventEmitter:EventEmitter<number> = new EventEmitter();

onDeleteBtnClick(){
this.deleteEventEmitter.emit(this.index)
}
}
