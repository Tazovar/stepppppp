import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() userObjectEmitter:EventEmitter<any> = new EventEmitter();
  userObject:any = this.createUserObject();


  createUserObject():any{
    return {
      userName:'',
      userLastName:'',
      userAge:'',
      userGander:'',
      userHobby:''
    }
  }


  resetValues():void{
    for(let key in this.userObject){
      this.userObject[key] = '';
    }
  }

  onFormSubmit():void{
    let userObjectCopy = {...this.userObject}
    this.userObjectEmitter.emit(userObjectCopy);
      this.resetValues()
  }
}
