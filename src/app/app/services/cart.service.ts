import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  
  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

  updateItem(product:any){
    const indexToUpdate = this.cartItemList.findIndex((x: any) => x.id == product.id);
    this.cartItemList[indexToUpdate].quantity+=product.quantity;
    this.cartItemList[indexToUpdate].total+=product.total;
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  substractQuantity(product:any){
    const indexToUpdate = this.cartItemList.findIndex((x: any) => x.id == product.id);
    this.cartItemList[indexToUpdate].quantity-=product.quantity;
    this.cartItemList[indexToUpdate].total-=product.total
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    const checkCart = this.cartItemList.find((obj: { [x: string]: any; }) => obj['id'] === product.id);
    if(checkCart){
      if(checkCart.quantity==0){
        this.removeCartItem(product);
      }
    }
  }
  
}
