import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() userObject:any
  @Input() index:any
  @Output() deleteEventEmitter:EventEmitter<number> = new EventEmitter();
  @Output() updateEventEmitter:EventEmitter<any> = new EventEmitter();
  isShowEditForm:boolean = false
  updateAge:string =''
onDeleteBtnClick(){
this.deleteEventEmitter.emit(this.index)
}

onEditBtnClick(){
this.isShowEditForm = !this.isShowEditForm
this.updateAge = this.userObject.age
}


onEditFormSubmit(){
  let updateData = {
    index:this.index,
    updateAge:this.updateAge
  }
  
  this.updateEventEmitter.emit(updateData)
  this.isShowEditForm = false;
  
}
}

