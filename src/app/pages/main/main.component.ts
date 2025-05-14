import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
array:Array<any> = [];


  formEmitterSub(event:NgForm){
    this.array.push(event.value)
    event.resetForm();
  }
}
