import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
const HTML_TEMPLATE = `
<ion-list lines="none">
  <ion-item *ngFor="let item of databestseller.datas" (click)="selectItemBestseller(item)">
    <ion-thumbnail slot="start">
      <img src="{{item.image.url}}">
    </ion-thumbnail>
    <ion-label style="height:100%">
      <div padding-top>
        <h2>{{item.name}}</h2>
      </div>
      <div padding-top>
        <p class="weeklysales">ยอดขายต่อสัปดาห์: {{item.weeklysales}}</p>
        <div *ngIf="item.newpricetext === ''">
          <span class="colornewprice">{{item.pricetext}}</span>
        </div>

        <div *ngIf="item.newpricetext !== ''">
          <span class="decoration-line">{{item.pricetext}} </span><span class="colornewprice">{{item.newpricetext}}</span>
        </div>
      </div>

    </ion-label>
  </ion-item>
</ion-list>
`;

const CSS_STYLE = `
ion-item {
  ion-thumbnail {
      width: 30%;
      height: 30%;
  }
  padding:6px;
  margin: 10px;
  border-radius: 10px;
  background-color: #FFFFFF;
  .decoration-line {
      text-decoration-line: line-through; // color: #999;
      color: rgba(0, 0, 0, .26); // font-size: 3.8vw;
      font-size: 1.125rem;
  }
  h2 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
      width: 100%;
      min-width: 1px; // font-size: 4.5vw
      font-size: .995rem;
      font-family: -apple-system, Helvetica Neue, Helvetica, Roboto, Droid Sans, Arial, sans-serif;
      font-weight: 400;
      height: 2.25rem;
  }
  .colornewprice {
      // color: red; // font-size: 4vw;
      font-size: 1.125rem;
      color: #ff2600;
      font-weight: 500;
     
  }
  .weeklysales {
      // font-size: 3.5vw;
      font-size: .875rem;
  }
}
`;
@Component({
  selector: 'app-ecommerce-productlist-bestseller',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})
export class EcommerceProductlistBestsellerComponent implements OnInit {

  @Input() databestseller: any;
  @Output() outBestseller = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectItemBestseller(item) {
    this.outBestseller.emit(item);
  }

}
