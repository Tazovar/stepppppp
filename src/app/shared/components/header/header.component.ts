import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
id:number = 12

constructor(private router:Router){}

onContactBtnClick():void{
  this.router.navigate(['/contact',this.id],{queryParams:{
    name:'tazo',
    lastName:'gelashvili',
    age:100
  }})
}
}
