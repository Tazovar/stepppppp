import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  standalone: false,
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent implements OnInit {
  constructor(private matDialogRef:MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public matDialogData:any
  ){}


  ngOnInit(): void {
    console.log(this.matDialogData);
    
  }

  onMatDialogCloseBtnClick(){
this.matDialogRef.close();
  }
}
