import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
constructor(private activatedRoute:ActivatedRoute){}

ngOnInit(): void {
  this.activatedRoute.params.subscribe((res) => {
    console.log(res['id']);
  })

  this.activatedRoute.queryParamMap.subscribe((response) => {
    let name = response.get('name');
    console.log(name);
  })
}
}
