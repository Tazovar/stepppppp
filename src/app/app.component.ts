import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:false
})
export class AppComponent {
  testType:string = 'text'
  testPlaceholder:string = 'text...'
  testValue:string | number = 'giorgi gelashvili'
  testValue2:string | number = this.testValue
  showHideText:string = 'hide';
  counter:number = 0;
  // name:string = 'tazo gelashvili';

  // number1:number = 50;
  // number2:number = 23;


  // getUserName(){
  //   return this.name
  // }


  // getNumber1PlusNumber2(){
  //   return this.number1 + this.number2;
  // }


  onTestBtnClick(){
    this.showHideText = this.showHideText == 'hide' ? 'show' : 'hide'
   this.testType = this.testType == 'text' ? 'password' : 'text'
  }

  onTestBtncMouseMove(){
    if(this.counter == 0){
      this.testValue2 = this.testValue
    }
    console.log(this.testValue2);
    
    this.counter++
    this.testValue = Math.floor(Math.random() * 100)
  }


  onTestBtnMouseLeave(){
    this.counter = 0;
    this.testValue = this.testValue2
  }

  // onTestInpInput(e:any){
  //   this.testValue = e.target.value
  // }
}
