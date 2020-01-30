import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from "rxjs/operators";
import { NetworkService } from 'src/app/services/network.service';
import { ProductResult } from 'src/app/models/product.model';

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css']
})
export class StockHomeComponent implements OnInit {

  mDataArray: ProductResult[] = [];
  mTextSearch = new Subject<string>();

  constructor(private router: Router, private networkService: NetworkService) { }

  ngOnInit() {
    this.mTextSearch.pipe(
      debounceTime(2000)
    ).subscribe(keyword => this.search(keyword));

    this.feedData();
  }

  feedData() {
     this.networkService.getProductAll().subscribe(
      result => {
        var items = result.result as ProductResult[];
        this.mDataArray = items;
      },
      error => {
        alert(error.error.message);
      }
    )
  }



  search(keyword: string): void {
    console.log(keyword);
  }

  outofStock() {
    return 1150;
  }

  onClickDelete(id: string) {
    // modal confirm
  }

  onClickEdit(id: string) {
    this.router.navigate([`/stock/edit/${id}`])
  }

}
