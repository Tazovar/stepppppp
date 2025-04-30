import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
carsArray:Array<any> = []

  carObjectEmitterSubscriber(event:any):void{
    this.carsArray.push(event)
    console.log(this.carsArray);
    
  }
}
