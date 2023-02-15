import { Component, Input, Output, EventEmitter, Directive } from '@angular/core';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import {CheckoutProduct} from '../../models/Models'
import {AbstractControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms'
import { FormValidation } from './form';
interface OnInit {
  ngOnInit(): void
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
  productOrder:CheckoutComponent[] = []

  id:string = ''
  fullname:string = ''
  address:string = ''
  cardNumber:string = ''
  submitted = false
  model = new FormValidation(this.fullname, this.address, this.cardNumber)

  registerForm!:FormGroup;
  submited = false
constructor(
  private route:ActivatedRoute,
   private formBuilder:FormBuilder,

   ){

}
@Output() addForm: EventEmitter<any> = new EventEmitter()
ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];


}


formSubmit():void{
  this.submitted = true
  const formData = {
    fullname:this.fullname,
    address: this.address,
    carNumber:this.cardNumber
  }
    this.addForm.emit(formData)
}
}
