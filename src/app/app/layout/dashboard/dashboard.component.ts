import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  public productList: any;
  public filterCategory: any
  searchKey: string = "";
  public products: any = [];
  isClicked: boolean = false;

  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getData();
    this.cheackQuantity();
  }

  getData() {
    this.api.getProduct().subscribe(res => {
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a: any) => {
        if (a.category === "women's clothing" || a.category === "men's clothing") {
          a.category = "fashion"
        }
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }

  cheackQuantity() {
    this.getItem();
    if (this.products.length > 0) {
      this.filterCategory.forEach((element: any) => {
        const checkCart = this.products.find((obj: { [x: string]: any; }) => obj['id'] === element.id);
        if (checkCart) {
          element['qty'] = checkCart.quantity;
        }
      });
    }
  }

  getItem() {
    this.cartService.getProducts().subscribe(res => {
      this.products = res;
    })
  }

  addTocart(item: any) {
    this.getItem();
    const checkCart = this.products.find((obj: { [x: string]: any; }) => obj['id'] === item.id);
    this.cartService.addtoCart(item);
    this.cheackQuantity();
  }

  filter(category: string) {
    this.filterCategory = this.productList
      .filter((a: any) => {
        if (a.category == category || category == '') {
          return a;
        }
      })
  }

  subtractFromCart(item: any) {
    this.cartService.substractQuantity(item);
    this.cheackQuantity();
  }

  addFromCart(item: any) {
    const checkCart = this.products.find((obj: { [x: string]: any; }) => obj['id'] === item.id);
    if (checkCart) {
      this.cartService.updateItem(item);
      this.cheackQuantity();
    }
  }

}
