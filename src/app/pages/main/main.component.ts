import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProxyService } from '../../services/proxy.service';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit,OnDestroy {
array:Array<any> = ['giorgi','tasasf','asf'];
test:any = {
  name:'tazo',
  lastName:'gelashvili',
  asfkaf:'asfafasf'
}
data$!:Observable<any>
// unsubscribeSubject:Subject<void> = new Subject()
constructor(private proxyService:ProxyService){}



ngOnDestroy(): void {
  // this.unsubscribeSubject.next();
  // this.unsubscribeSubject.complete();
}
ngOnInit(): void {
  this.getAllProducts()
    // this.proxyService.getAllProducts()
    // .pipe(
    //   takeUntil(this.unsubscribeSubject)
    // )
    // .subscribe((res) => {

    // })
}
getAllProducts(){
this.data$ = this.proxyService.getAllProducts()
}

  formEmitterSub(event:NgForm){
    this.array.push(event.value)
    event.resetForm();
  }
}
