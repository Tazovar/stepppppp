import { Component, EventEmitter, Output, output } from '@angular/core';
import { CommonService } from '../../../../../../services/common.service';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  toDoObject:any = this.createToDoListObject();
constructor(private commonService:CommonService){}
  createToDoListObject():any{
    return {
      description:'',
      status:''
    }
  }

  onFormSubmit(){
    if(!this.toDoObject.description || !this.toDoObject.status){
      alert('გთხოვტ შეავსოთ ყველა ველი')
    }else{
      let newObject = {...this.toDoObject}
      this.commonService.pushElementInArray(this.commonService.array,newObject)
      
    }
  }
}
