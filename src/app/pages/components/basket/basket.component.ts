import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-basket',
  standalone: false,
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent implements OnInit {
  basketArray:Array<any> = [];
constructor(private basketService:BasketService) {}
ngOnInit(): void {
  this.getAllProductsFromBasket()
}


getAllProductsFromBasket(){
  this.basketService.getAllProducts()
  .subscribe({
    next:(response:any) => {
      this.basketArray = response;
    },
    error:(err) => {
      console.error(err);
      
    }
  })
}

updateCardEmitterSub(event:any){
  this.basketService.updateProduct(event)
  .subscribe({
    next:() => {
      console.log('განახლდა');
      this.getAllProductsFromBasket()
    },
    error:(err) => {
      console.error(err)
      console.log('ოპერაციის შესრულება დროებით შეუძლებელია');
      
    }
  })
}

deleteCardEmitterSub(event:number){
  this.basketService.deleteProduct(event)
  .subscribe({
    next:() => {
      this.getAllProductsFromBasket();
    },
    error:(err) => {
      console.error(err)
      alert('ოპერაციის შესრულება დროებით შეუძლებელია');
      
    }
  })
}
}
