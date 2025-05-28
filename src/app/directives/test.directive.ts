import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTest]',
  standalone: false
})
export class TestDirective {
  @Input() appTest!:boolean

  constructor(private el:ElementRef){}
  
generateRgbColor(){
  let r = Math.floor(Math.random() * 255)
  let g = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)
   return `rgb(${r}, ${g}, ${b})`
}
@HostBinding('style.backgroundColor') bg:string  = 'red'
@HostBinding('innerHTML') inner:string  = 'saf'
@HostBinding('style.width') w:string = '1020px'

  @HostListener('click')
  test(){
    if(this.appTest){
      this.inner = 'hello'
    }else{
      this.bg = this.generateRgbColor()
      this.inner = 'test'
      console.log(this.el.nativeElement);
      
    }
  }

}
