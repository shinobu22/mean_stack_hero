import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductResult } from 'src/app/models/product.model';
import { Location } from "@angular/common";
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {

  mProduct = new Product();
  imageSrc: string | ArrayBuffer;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private location: Location,
    private networkService: NetworkService) {
    this.mProduct.name = "";
    this.mProduct.price = 0;
    this.mProduct.stock = 0;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.feedData(params.id)
    });
  }
  feedData(id: any) {
    this.networkService.getProductById(id).subscribe(
      result => {
          let item = result.result as ProductResult;
          this.imageSrc = this.networkService.getImage(item.image);
          this.mProduct = item;
      },
      error => {
        alert(error.error.message);
      }
    )
  }

  onSubmit() {
    this.networkService.editProduct(this.mProduct.product_id.toString(), this.mProduct).subscribe(
      result => {
          this.location.back();
      },
      error => {
        alert(error.error.message);
      }
    )
  }

  onCancel() {
    this.location.back();
  }

  onUpload(event) {
    const metaImage = event.target.files[0];
    if (metaImage) {
      const reader = new FileReader();
      reader.readAsDataURL(metaImage);
      reader.onload = () => {
        this.imageSrc = reader.result;
        this.mProduct.image = metaImage;
      };
    }
  }

}
