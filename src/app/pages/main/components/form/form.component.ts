import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit,AfterViewInit {
@ViewChild('h1') h1!:ElementRef
@Output() formEmitter:EventEmitter<NgForm> = new EventEmitter();

  onFromSubmit(form:NgForm){
    if(form.invalid == true){
      return
    }

    this.formEmitter.emit(form)
    
    
  }

  ngOnInit(): void {
    
  }
  
  ngAfterViewInit(): void {
    this.h1.nativeElement.innerHTML = 'tazo'
  }
}
