import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as productConfig from '../../../products.json';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit {
  private productDetails: any = productConfig.default.products;
  public displayedColumns: string[] = ['name', 'weight', 'availability', 'isEditable'];
  public dataSource;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params: any) => {
      if (params.editedProductDetails) {
      const recievedProductDetails: any = JSON.parse(params.editedProductDetails);

      this.productDetails.forEach((product: any) => {
        if (product.id === recievedProductDetails.id) {
          product.name = recievedProductDetails.name 
          product.pricingTier = recievedProductDetails.priceTier 
          product.priceRange = recievedProductDetails.priceRange
          product.weight = recievedProductDetails.weight
          product.availability = recievedProductDetails.availability
          product.productUrl = recievedProductDetails.productURL
          product.isEditable = recievedProductDetails.canBeEdited
        }
      });
      this.dataSource = this.productDetails;

      } else {
        this.dataSource = this.productDetails;
      }
    });
  }

  public ngOnInit() {}

  goToNextPage(productObject: any) {
    this.router.navigate(['/editProduct'], {queryParams: {details: JSON.stringify(productObject)}});
  }
}
