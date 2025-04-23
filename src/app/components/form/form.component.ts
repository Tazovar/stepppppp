import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() userObjectEmitter:EventEmitter<any> = new EventEmitter();
  username:string =  ''
  userAge:string = ''


  onFormSubmit(){
    let userObject = {
      name:this.username,
      age:this.userAge
    }

    this.userObjectEmitter.emit(userObject);
    this.resetValues()
  }

  resetValues(){
    this.username = ''
    this.userAge  = ''
  }
}
