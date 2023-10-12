import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  productlist!:any[];
  products:any[]=[];
  subTotal:any;
  constructor(public  product_service: ProductService, public router:Router){
    var a = 10;
{
    var a = -10;
}
let b = a;
{
    let b = -20;
}

console.log(b)
  }
  
  ngOnInit() {
    this.product_service.getAllProducts().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.productlist = res
      },
      error:(error)=>{
        alert(error);
      },
      complete:()=>{
        console.log('Request completed');
      },
    });
    this.product_service.loadcart()
    this.products = this.product_service.getproduct()
  }
   //Add To Cart//
   addToCart(product:any){
    console.log(product)
    if(!this.product_service.productincart(product)){
      product.quantity = 1;
      this.product_service.addToCart(product);
     this.products=[...this.product_service.getproduct()];
     this.subTotal=product.price
    }
  }
  /*change the sub total amount
  changesubTotal(product:any,index:any){
    const qty = product.quantity;
    const amt= product.price;
    this.subTotal=amt*qty;
    this.product_service.savecart();
  }*/

  //remove product from cart
  removeFromCart(product:any) {
    this.product_service.removeproduct(product);
    this.products = this.product_service.getproduct()

  }
  //calculate total
  get total(){
    return this.products.reduce(
      (sum,product)=>({
        quantity:1,
        price:sum.price+product.quantity*product.price
      }),
      {quantity:1,price:0}
    ).price
  }

  checkout(){
    localStorage.setItem('cart_total', JSON.stringify(this.total));
    this.router.navigate(['/payment'])
 }

}
