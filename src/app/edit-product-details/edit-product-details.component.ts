import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product-details',
  templateUrl: './edit-product-details.component.html',
  styleUrls: ['./edit-product-details.component.scss']
})

export class EditProductDetailsComponent implements OnInit {
  public retrivedProductObject: any;
  public editProductForm;
  public budgetPrices = [ '4k - 6k',  '6k - 9k',  '9k - 11k' ];
  public premierPrices = [ '11k - 20k',  '20k - 30k',  '30k+' ];

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe((params: any) => {
      this.retrivedProductObject = JSON.parse(params.details);
      
      this.editProductForm = this.fb.group({
        id: [this.retrivedProductObject.id],
        name: [this.retrivedProductObject.name],
        weight: [this.retrivedProductObject.weight],
        availability: [this.retrivedProductObject.availability],
        productURL: [this.retrivedProductObject.productUrl], 
        priceTier: [this.retrivedProductObject.pricingTier, Validators.required],
        priceRange: ['', Validators.required],
        canBeEdited: ['', Validators.required]
      });
    });
  }

  ngOnInit() {
  }

  // To get the price tire
  get priceTire(): AbstractControl {
    return this.editProductForm.get('priceTier')
  }

  onCheckChange(event: any) {
    this.editProductForm.controls['canBeEdited'].setValue(event.source.value);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.editProductForm.value);
    this.router.navigate(['/'], {queryParams: {editedProductDetails: JSON.stringify(this.editProductForm.value)}})
  }

}
