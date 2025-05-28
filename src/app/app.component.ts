import {Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent } from './modals/dialog/dialog.component';
import { User } from './models/test.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent  {
  num1:number = 10
  num2:number = 25
  array:Array<User> = [
    {
    name:'afsasf',
    lastName:'asfasf',
    age:10,
    },
    {
    name:'afsasf',
    lastName:'asfasf',
    age:10,
    }
  ]

  constructor(private _snackBar:MatSnackBar,private matDialog:MatDialog){}
testText:string = ''

asd:any
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onOpenMatDialogBtnClick(){
    this.matDialog.open(DialogComponent,{
      data:{
        testText:this.testText
      }
    })
  }
}
