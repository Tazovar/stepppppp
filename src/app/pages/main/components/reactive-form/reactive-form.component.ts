import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: false,
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit {
  constructor(private fb:FormBuilder){}
  jobForm!:FormGroup
  pattern = /[0-9]/

  ngOnInit(): void {
    this.jobForm = this.fb.group({
      jobs:this.fb.array([this.createJob()])
    })
  }


  getJobsArray():FormArray{
    let jobsArray = this.jobForm.get('jobs')
    return jobsArray as FormArray
  }

  createJob(){
    return this.fb.group({
      jobEmail:['',
        [Validators.required,Validators.minLength(4),Validators.maxLength(25),Validators.pattern(this.pattern),Validators.email]
      ],
      positions:this.fb.array([this.createPosition()])
    })
  }

  onAddNewJobBtnClick(){
    this.getJobsArray().push(this.createJob())
  }

  onDeleteJobBtnClick(jobIndex:number){
    if(this.getJobsArray().length > 1){
      this.getJobsArray().removeAt(jobIndex)
    }else{
      alert('დარჩენილია 1 სამსახური შესაბამისად ვერ მოხერხდება მისი წაშლა')
    }
  }

  getPositions(jobIndex:number):FormArray{
    let positions = this.getJobsArray().at(jobIndex).get('positions')
    return positions as FormArray
  }


  createPosition(){
    return this.fb.group({
      positionName:''
    })
  }

  onAddPositionBtnClick(jobIndex:number){
    this.getPositions(jobIndex).push(this.createPosition())
  }

  onDeletePositionBtnClick(jobIndex:number,positionIndex:number){
   if(this.getPositions(jobIndex).length > 1){
     this.getPositions(jobIndex).removeAt(positionIndex)
   }else{
    alert('დარჩენილია 1 პოზიცია შესაბამისად ვერ მოხერხდება მისი წაშლა')
   }
  }


  onFormSubmit(){
    console.log(this.getJobsArray().at(0));
    
    console.log(this.jobForm.value);
    
  }
}



