import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() userObjectEmitter:EventEmitter<any> = new EventEmitter();
  username:string = ''
  userlastname:string = ''
  userstatus:string = ''


  onFormSubmit(){
    let userObject = {
      name:this.username,
      lastname:this.userlastname,
      status:this.userstatus
    }
    this.userObjectEmitter.emit(userObject);
  }
}
