import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
array:Array<any> = [];

userObjectEmitterSubscriber(event:any){
  this.array.push(event);
}

deleteEventEmitterSub(index:number){
  this.array.splice(index,1)
}

updateEventEmitterSub(updateData:any){
let object = this.array[updateData.index];

if(object){
  object.age = updateData.updateAge
}

}
}
