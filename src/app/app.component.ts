import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent implements OnInit  {

constructor(private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((res:any) => {
      console.log(res);    
      this.scroll(res) 
    })
  }


  scroll(elementName:string){
    document.getElementById(elementName)?.scrollIntoView({behavior:'smooth'})
  }
}
