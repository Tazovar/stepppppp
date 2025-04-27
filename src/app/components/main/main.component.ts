import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
usersArray:any[] = [];


userObjectEmitterSubscriber(userObject:any):void{
this.usersArray.push(userObject);
console.log(this.usersArray,'from main.component.ts');


}
}
