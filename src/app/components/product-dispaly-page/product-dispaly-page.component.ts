import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, ParamMap,  } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { CartService } from 'src/app/service/cart.service';


import { Observable } from 'rxjs';


import {Products as Model} from '../../models/Models'
import {Products, ProductsService} from '../../service/products.service'



@Component({
  selector: 'app-product-dispaly-page',
  templateUrl: './product-dispaly-page.component.html',
  styleUrls: ['./product-dispaly-page.component.css']
})
export class ProductDispalyPageComponent implements OnInit {
  title:string =  'ProductS Detail'
  addItemInfo = ''
  products!:  Model
  id!:any;
  constructor(private productsData:ProductsService, private route: ActivatedRoute,  private cartService:CartService){
    const id : Observable<string> = route.params.pipe(map(p => p['id']))

  }
  addToCart(item:any):void{
    this.cartService.addToCart(item)
    console.log(item, 'added items')

    this.addItemInfo = this.cartService.addItemMessage
    console.log(this.addItemInfo, 'infoo')
  }
  ngOnInit():void{
    this.id = this.route.snapshot.paramMap.get('id')
     console.log("ID :", this.id)

    this.productsData.getSingleProduct(this.id).subscribe(res => {
      this.products = res;

      })
  }


}
