import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:false
})
export class AppComponent {
  title:string = '10';
  number1:number = 123
  testBool:boolean = false
  arr:string[] = ['ashfjas','asfkmlasf'];
  arr2:Array<string | number> = ['asgasmgaklsg',12,'saf',12421];
  arr3:Array<any> = ['asgasmgaklsg',12,'saf',12421,'asfasf',false,12,null,undefined];
  number2:number | null = null;
  test:any = false;

  f1():void{
  console.log('asfasf');
  }

  f1Test():any{
    console.log('asfas');
    return 'asf'
    
  }

  f2():boolean{
    return true
  }


}
