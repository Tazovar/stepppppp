import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
colorInputText:string = '';
userFirstName:string = ''
userLastName:string = ''
usersArray:any[] = [];

onFromSubmit():void{
if(this.userFirstName && this.userLastName && this.colorInputText){
  let temp = Math.floor(Math.random() * 1000000);
  for(let item of this.usersArray){
    while(item.l == temp){
      temp = Math.floor(Math.random() * 1000000);
    }
  }
    let userObject = {
      name:this.userFirstName,
      lastName:this.userLastName,
      color:this.colorInputText,
      l:temp
    }
    this.usersArray.push(userObject)
    this.resetValues();
}else{
  alert('გთხოვთ შეავსოთ ველები')
}
}



resetValues(){
  this.userFirstName  = ''
  this.userLastName = ''
  this.colorInputText = '';
}


}
