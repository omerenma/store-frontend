import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { CartService } from 'src/app/service/cart.service';
import {ProductsService} from '../../service/products.service'
import {Products} from '../../models/Models'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  title:string =  'Products Page'
  products:Products[] = []
 addItemInfo = ''

  constructor(private productsData:ProductsService,  private route: ActivatedRoute, private cartService:CartService){
    const id: Observable<string> = route.params.pipe(map(p => p['id']))  }

      removeEl():void{
        this.addItemInfo = ''

      }

  addToCart(item:any):void{
    this.cartService.addToCart(item)
    console.log(item, 'added items')

    this.addItemInfo = this.cartService.addItemMessage
    console.log(this.addItemInfo, 'infoo')
  }


  ngOnInit():void{

    this.productsData.getProducts().subscribe(res => {
      this.products = res;
       this.products.forEach((a:any) => {
        Object.assign(a, {quantity:1, total:a.price} )
       })

      })
  }

}
