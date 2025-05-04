import { Component } from '@angular/core';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-to-do',
  standalone: false,
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {

constructor(public commonService:CommonService){}

}
