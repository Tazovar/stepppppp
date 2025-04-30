import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  carObject:any = this.createCarObject();
  @Output() carObjectEmitter:EventEmitter<any> = new EventEmitter();


  createCarObject():any{
    return {
      carName:'',
      carModel:'',
      carYear:''
    }
  }


  onFormSubmit():void{
    if(!this.carObject.carName || !this.carObject.carModel || !this.carObject.carYear){
      alert('please fill inputs')
    }else{
      let copyCarObject = {...this.carObject}
      this.carObjectEmitter.emit(copyCarObject)
    }
  }
}
