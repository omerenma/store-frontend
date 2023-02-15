import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public products:any = []
public grandTotal!:number
public removeItemMessage = ''
constructor(private cartService:CartService){

}
removeEl():void{
  this.removeItemMessage = ''
}
ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice()
    })
}
removeItem(item: any){
this.cartService.removeCartItem(item)
this.removeItemMessage = this.cartService.removeItemMessage
}
emptyCart(){
  this.cartService.removeAllCart()
}
}
