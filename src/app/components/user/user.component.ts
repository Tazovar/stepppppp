import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input() myUser:any
isOpenEditor:boolean = false;
userObject:any


onEditBtnClick():void{
this.isOpenEditor = !this.isOpenEditor
this.userObject = {...this.myUser}
}


onEditFinishBtnClick(){
  this.myUser = {...this.userObject};
  this.isOpenEditor = false
}
}
