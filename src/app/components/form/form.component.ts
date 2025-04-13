import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  username:string = ''
  userLastName:string = ''
  userStatus:boolean | string = ''
  usersArray:Array<any>  = [];


  onFormSubmit():void{
    if(!this.username || !this.userLastName || !this.userStatus){
      alert('გთხოვთ შეავსოთ ყველა ველი')
    }else{
      let userObject = {
        userName:this.username,
        userLastName:this.userLastName,
        userStatus:this.userStatus        
      }
      this.usersArray.push(userObject)
      console.log(this.usersArray)
    }
  }
}
