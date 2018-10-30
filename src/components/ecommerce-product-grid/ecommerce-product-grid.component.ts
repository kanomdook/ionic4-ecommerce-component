import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
const HTML_TEMPLATE = `
<!-- สินค้าแนะนำประจำวัน
<ion-card>
  <ion-card-content>
    <p>The content for this card</p>
  </ion-card-content>
</ion-card> -->


<ion-grid no-padding>
  <ion-row *ngIf="title">
    <ion-col class="font-text-title">
      {{title}}
    </ion-col>
  </ion-row>
  <ion-row no-padding *ngIf="items && items.length > 0">
    <ion-col size="6" size-sm="6" size-md="4" size-lg="3" *ngFor="let item of items" (click)="clickItem(item)">
      <ion-card no-padding mode="md" class="bg-color no-box-shadow">
        <ion-card-header no-padding>
          <ion-row>
            <ion-col no-padding size="12">
              <div class="container">
                <div no-padding text-left class="img-car" *ngIf="item.shippingfeetag == true">
                  <img src="https://res.cloudinary.com/dyiuidzsc/image/upload/v1540789212/furnover/png/delivery2.png" />

                </div>
                <div class=" position-pomo img-pomo">

                  <span>

                    <img src="https://res.cloudinary.com/dyiuidzsc/image/upload/v1540789242/furnover/png/tagOutOfStock.png"
                      *ngIf="item.stock == 0" />
                    <img src="https://res.cloudinary.com/dyiuidzsc/image/upload/v1540789236/furnover/png/tagIcon.png"
                      *ngIf="item.percentage > 0" />
                  </span>

                  <div class="centered" *ngIf="item.percentage > 0">
                    <p class="font-diccount">{{item.percentage}}%</p>
                    <p class="font-text-discount">
                      ลด
                    </p>
                  </div>
                  <div class="out-of-stock" *ngIf="item.stock == 0">
                    <p class="font-out-of-stock ">
                      สินค้า
                      หมด
                    </p>
                  </div>

                </div>
              </div>


              <!-- <img [src]="item.image.url"> -->
              <div *ngIf="item && item.image && item.image.url" class="img-size-div">
                <ion-img class="img-size" [src]="item.image.url"></ion-img>
              </div>
              <div *ngIf="!item || !item.image || !item.image.url" class="img-size-div">
                <p class="img-gray no-margin"></p>
              </div>
            </ion-col>
          </ion-row>
        </ion-card-header>
        <ion-card-content class="padding-in">
          <ion-row>

            <ion-col no-padding size="12">
              <div *ngIf="item.name" no-padding class="text-2line font-text padding-botton">
                {{item.name}}
              </div>
            </ion-col>
            <ion-col no-padding size="12" class="font-text-price" *ngIf="!item.newpricetext && item.pricetext">
              <div no-padding>
                <p> <span class="font-price">{{item.pricetext}}</span> <span padding>{{item.newpricetext}}</span>
                </p>

              </div>
            </ion-col>
            <ion-col no-padding size="12" class="font-text-price" *ngIf="item.newpricetext && item.pricetext">
              <div no-padding>
                <p> <span class="color-font in-line">{{item.pricetext}}</span> <span class="font-price padding-price">{{item.newpricetext}}</span>
                </p>

              </div>
            </ion-col>
            <!-- <ion-col no-padding size="2">
              <div no-padding text-right class="img-car" *ngIf="item.shippingfeetag == true">
                <ion-img src="/assets/images/delivery2.png"></ion-img>

              </div> -->
            <!-- </ion-col> -->
            <ion-col no-padding size="4">
              <span class="aa">
                <ion-icon class="color-likes" name="heart-empty"></ion-icon>
              </span>
              <span class=" margin-left2 color-font font-text-price">{{item.likes}}</span>
              <span *ngIf="!item.likes" class="font-text-price color-font margin-left2">0</span>
            </ion-col>
            <ion-col size="8" text-right no-padding class="font-text-price">
              <app-ion-rating [ratings]="item.ratings"></app-ion-rating>
              <span *ngIf="item && item.reviews" class="color-font margin-left">({{item.reviews}})</span>
              <span class="color-font" *ngIf="!item.reviews">ยังไม่มีคะแนน</span>
            </ion-col>
            <!-- <ion-col size="3" text-left no-padding> -->
            <!-- </ion-col> -->
          </ion-row>
        </ion-card-content>
      </ion-card>
    </ion-col>

  </ion-row>
</ion-grid>
<div text-center *ngIf="(items && items.length === 0)||!items">
  <p>ไม่มีสินค้าแนะนำ</p>
</div>
`;

const CSS_STYLE = `
.card-height {
  width: 100% !important;
  height: 250px !important;
}

.img-size {
  width: 100% !important;
  object-fit: cover !important;
  height: 162px !important;
}

.img-gray {
  background: rgb(233, 228, 228) !important;
  width: 100% !important;
  height: 162px !important;
  object-fit: cover !important;
}

.img-size-div {
  width: 100% !important;
  height: 162px !important;
}

.text-2line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.position-per {
  top: 3px !important;
  right: 7px !important;
  position: absolute;
}

.font-text {
  font-size: 14px !important;
}

.font-text-price {
  font-size: 12px !important;
}

// .card-content-md {
//     padding: 0px !important;
// }
.sc-ion-card-md-h {
  margin: 0px !important;
}

.padding-botton {
  padding-bottom: 5px !important
}

.padding-in {
  padding: 4px !important;
}

.color-font {
  font-size: 12px !important;
  color: rgb(197, 195, 195);
}

.border-line {
  font-size: 15px;
  text-align: center;
  border-bottom: 1px solid red;
  position: relative;
}

.position-pomo {
  position: absolute;
  right: 0% !important;
}

.img-pomo {
  // width: 50px !important;
  height: 0% !important;
}

.in-line {
  -webkit-text-decoration-line: line-through;
  text-decoration-line: line-through;
}

.img-car {
  position: absolute !important;
  width: 30px !important;
  height: 0% !important;
  left: 0% !important;
  margin-left: 5px !important;
  margin-top: 8px !important;
}

.font-diccount {
  font-weight: bold;
  margin-top: 5px !important;
  font-size: 11px !important;
  color: rgb(255, 38, 0) !important;
}

.font-text-discount {
  font-weight: bold;
  margin-top: -8px;
  font-size: 11px !important;
  color: rgb(255, 255, 255) !important;
}

.centered {
  position: absolute;
  width: 35px; // margin-top: 25px;
  top: 0; // left: 50%;
  right: 0; // transform: translate(-50%, -50%);
}

.out-of-stock {
  position: absolute;
  width: 35px;
  margin-top: 5px !important; // margin-top: 25px;
  top: 0; // left: 50%;
  // transform: translate(-50%, -50%);
}

.container {
  // position: relative;
  text-align: center;
  color: white;
}

.font-price {
  font-size: 12px !important;
  color: rgb(255, 38, 0) !important;
  font-weight: bold;
}

.padding-price {
  padding: 8px !important;
}

.position-pomo2 {
  position: relative;
  right: 0% !important;
}

.img-pomo2 {
  width: 50px !important;
  height: 0% !important;
}

.sc-ion-card-ios-s img {
  display: unset !important;
}

.sc-ion-card-md-s img {
  display: unset !important;
}

img {
  display: unset !important;
  width: 35px;
}

.font-out-of-stock {
  font-weight: bold; // margin-top: -8px;
  font-size: 11px !important;
  color: rgb(255, 255, 255) !important;
}

.padding-left {
  padding-left: 4px !important;
}

.font-text-title {
  font-weight: bold;
  color: rgb(255, 38, 0) !important;
}

.bg-color {
  background-color: rgb(255, 255, 255) !important;
}

.no-box-shadow {
  box-shadow: unset;
}

.position-ab {
  position: absolute !important;
}

.margin-left {
  margin-left: 2px !important;
}

.font-likes {
  font-size: 12px !important
}

.color-likes {
  font-size: 13px !important;
  color: rgb(197, 195, 195);
}

.aa {
  position: absolute !important;
  margin-top: 2px !important;
}

.margin-left2 {
  margin-left: 8px !important;
}

.padding-like-left {
  padding-left: 5% !important;
}

.no-margin {
  margin: 0% !important;
}
`;
@Component({
  selector: 'app-ecommerce-product-grid',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})
export class EcommerceProductGridComponent implements OnInit {
  @Input() items: Array<any> = [];
  @Input() title: any = '';
  @Output() outPutData = new EventEmitter();
  getProduct: any;
  constructor() {
  }

  ngOnInit() {

  }

  clickItem(item) {
    this.outPutData.emit(item);
  }
}
