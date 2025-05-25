import {Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent } from './modals/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent  {
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
