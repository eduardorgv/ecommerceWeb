import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: any;
  public filterCategory: any;
  searchKey: string = "";

  constructor(private api : ApiService, private CartService : CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.products = res;
      this.filterCategory = res;

      this.products.forEach((a:any) => {
        if(a.category === "women's clothing" || a.category === "men's clothing"){
          a.category = "fashion";
        }

        Object.assign(a,{quantity:1,total:a.price});
      });
    });
    this.CartService.search.subscribe(val=>{
      this.searchKey = val;
    });
  }

  addToCart(product: any){
    this.CartService.addToCart(product);
  }

  filter(category: string){
    this.filterCategory = this.products
    .filter((a:any)=>{
      if(a.category == category || category == ''){
        return a;
      }
    });
  }

}
