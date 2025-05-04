import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
constructor(private commonService:CommonService) { 
}


ngOnInit(): void {
  this.getMyTestVarible()
}

getMyTestVarible(){
  console.log(this.commonService.myTest);
  
}
}
