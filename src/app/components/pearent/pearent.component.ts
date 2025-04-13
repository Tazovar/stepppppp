import { Component } from '@angular/core';

@Component({
  selector: 'app-pearent',
  standalone: false,
  templateUrl: './pearent.component.html',
  styleUrl: './pearent.component.css'
})
export class PearentComponent {
  text:string = ''


  myTextFromPearentEmitterSubscriber(myText:string){
    console.log(myText)
  }
}
