import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() carObject:any
isShowEditWindow:boolean = false;
editObject:any


onEditBtnClick(){
  this.editObject = {...this.carObject}
  this.isShowEditWindow = !this.isShowEditWindow
}

onEditFormSubmit(){
  this.carObject = {...this.editObject}
  this.isShowEditWindow = false
}
}
