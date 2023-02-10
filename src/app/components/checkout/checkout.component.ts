import { Component, Input, Output, EventEmitter } from '@angular/core';
import {  ActivatedRoute, ParamMap } from '@angular/router';

interface OnInit {
  ngOnInit(): void
}
interface Product {
  image:string;
  price:number;
  title:string;
  amount?:number;
}
@Component({
  selector: 'app-cart',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})


export class CheckoutComponent implements OnInit {


  @Input() item = '';
  @Input() product = {}

  title:string = 'Cart'
  productOrder:Product[] = []

  id:string = ''
  fullname:string = ''
  address:string = ''
  cardNumber:string = ''

constructor(private route:ActivatedRoute){}
@Output() addForm: EventEmitter<any> = new EventEmitter()
ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
}
formSubmit():void{
  const formData = {
    fullname:this.fullname,
    address: this.address,
    carNumber:this.cardNumber
  }
  if(formData.fullname === ''){
    alert("Please enter your fullname")
  }  if(formData.address === ''){
    alert("Please enter your address")
  }
  if(formData.carNumber === ''){
    alert("Please enter your card number")
  }
  this.addForm.emit(formData)
  this.fullname = ''
  this.address = ''
  this.cardNumber = ''
}
}
