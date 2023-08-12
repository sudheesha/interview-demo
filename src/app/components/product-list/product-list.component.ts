import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  products: Product[] = [];
  name = new FormControl('James');

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.sub = this.productService.getProductList().subscribe({
      next: (products: any) => {
        this.products = products;
        console.log(this.products);
      },
      error: (err: any) => console.log(err),
    });
  }

  onApply = () => {
    this.name.setValue('Nancy');
  };

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
