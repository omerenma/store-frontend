import { Component, Input, Output, EventEmitter, Directive } from '@angular/core';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import {CheckoutProduct} from '../../models/Models'
import {AbstractControl,
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators
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

  dataFormForm = new FormGroup({
    fullname: new FormControl("", [Validators.required, Validators.min(6)]),
    address: new FormControl("", [Validators.required]),
    cardnumber: new FormControl("", [Validators.required, Validators.min(12)])
  })

  name = new FormControl('')
  address = new FormControl('')
  cardnumber = new FormControl("")
  title:string = 'Reactive Forms'
  productOrder:CheckoutComponent[] = []

  id:string = ''
  // fullname:string = ''
  // address:string = ''
  // cardNumber:string = ''
  // submitted = false
  // model = new FormValidation(this.fullname, this.address, this.cardNumber)

  // registerForm!:FormGroup;
  // submited = false
constructor(
  private route:ActivatedRoute,
   private formBuilder:FormBuilder,

   ){

}
@Output() addForm: EventEmitter<any> = new EventEmitter()
ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.dataFormForm.get("fullname")?.valueChanges.subscribe(selectedValue => {
    console.log(selectedValue, 'value')
  })

  this.dataFormForm.get("address")?.valueChanges.subscribe(selectedValue => {
    console.log('address changed')
    console.log(selectedValue)
  })

  this.dataFormForm.get("cardnumber")?.valueChanges.subscribe(selectedValue => {
    console.log('card value', selectedValue)
  })
  this.dataFormForm.valueChanges.subscribe(selectedValue => {
    console.log('form value changed')
    console.log('changed value', selectedValue)
  })
}


formSubmit():void{
  console.warn(this.dataFormForm.value, 'form value')

}
}
