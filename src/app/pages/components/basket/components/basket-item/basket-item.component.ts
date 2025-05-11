import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-basket-item',
  standalone: false,
  templateUrl: './basket-item.component.html',
  styleUrl: './basket-item.component.css'
})
export class BasketItemComponent {
@Input() card:any
@Output() updateCardEmitter:EventEmitter<any> = new EventEmitter()
@Output() deleteCardEmitter:EventEmitter<any> = new EventEmitter()

onUpdateBtnClick(e:string){
  let reqBody;
  let copy = {...this.card}
  if(e == 'plus'){
    reqBody = {
      quantity:copy.quantity+=1,
      price:copy.product.price * this.card.quantity,
      productId: copy.product.id
    }
  }else if(e == 'minus'){
    reqBody = {
      quantity:copy.quantity-=1,
      price:copy.product.price * this.card.quantity,
      productId: copy.product.id
    }
    
  }



  if(reqBody?.quantity > 0){
    this.updateCardEmitter.emit(reqBody)
  }

  
}


onDeleteBtnClick(){
this.deleteCardEmitter.emit(this.card.product.id)
}
}
