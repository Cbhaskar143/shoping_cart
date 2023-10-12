import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit{

constructor(public router:Router, public product_services:ProductService){}
ngOnInit(): void {
  
}
gobacktohome(){
this.product_services.clearproducts()
this.router.navigate(['/'])
}
}
