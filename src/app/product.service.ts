import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:any[]=[];

  constructor( public http:HttpClient) { }
  getAllProducts(){
    return this.http.get("assets/data.json");
  }
  getproduct(){
    return this.products
  }
  savecart(){
    localStorage.setItem('cart_items',JSON.stringify(this.products))
  }
addToCart(addedproduct:any){
  this.products.push(addedproduct);
  this.savecart();
}
loadcart(){
  this.products=JSON.parse(localStorage.getItem('cart_items') as any)||[];
}
productincart(product:any){
  return this.products.findIndex((x:any) => x.id === product.id) > -1;
}
removeproduct(product:any){
  const index = this.products.findIndex((x: any) => x.id === product.id);
  if(index > -1){
    this.products.splice(index, 1);
    this.savecart()
  }
}
clearproducts(){
  localStorage.clear();
}
}
