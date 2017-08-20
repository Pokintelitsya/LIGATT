import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../products/product';
import { ProductService } from '../products/product.service';
@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class ProductCreateComponent implements OnInit {
  constructor(private _router: Router, private _productService: ProductService) {
  }
  filteredProducts: IProduct[];
  products: IProduct[] = [];
  errorMessage: string;
  public pageTitle: string = 'Create a new product';
    product: {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
  } = { productId: 0,
        productName: '',
        productCode: '',
        releaseDate: '',
        price: 0,
        description: '',
        starRating: 0,
        imageUrl: ''
      };
  onSave(): void {
    const items = JSON.parse(localStorage.getItem('products'));
    if (!items) {
      this.product.productId = this.products.length + 1;
      this.products.push(this.product);
      localStorage.setItem('products', JSON.stringify(this.products));
    } else {
      this.product.productId = items.length + 1;
      items.push(this.product);
      localStorage.setItem('products', JSON.stringify(items));
    }
    this._router.navigate(['/products']);
  }
  ngOnInit(): void {
    this._productService.getProducts()
      .subscribe(products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        error => this.errorMessage = <any>error);
  }
}
