import { Component } from '@angular/core';
import { UserStatus } from '../../enums/test.enum';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
array:string[] = [];
array2:Array<string | boolean> = [];
test!:number
userStatus = UserStatus


constructor(){
  this.getStatus({status:'ACTIVE'});
  // this.array2 = ['tazo','12',false,true]
}
getStatus(data:any){
  
  if(data.status == UserStatus.ACTIVE){
    alert('user is active')
  }else if (data.status == UserStatus.INACTIVE){
    alert('user is not active')
  }
}
}
