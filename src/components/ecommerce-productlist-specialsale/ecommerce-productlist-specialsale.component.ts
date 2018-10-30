import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
const HTML_TEMPLATE = `
<ion-list lines="none">
  <ion-item *ngFor="let item of product.products" (click)="selectItemSpecialsale(item)">
    <ion-thumbnail slot="start">
      <div class="relative">
        <img src="{{item.image.url}}">
        <div *ngIf="item.sale === item.stock" class="pocentage-sale">
          <img src="../assets/icon/tagOutOfStock.png">
          <p class="pocentage-text">สินค้าหมด</p>
        </div>
        <div *ngIf="item.sale !== item.stock" class="pocentage-sale">
          <img src="../assets/icon/tagIcon.png">
          <div class="percentage">
            <p class="pocentage-font">{{item.percentage}}% </p>
            <p class="pocentage-font-sub">ลด</p>
          </div>
          <!-- <p class="pocentage-text-color">{{item.percentage}}% </p> -->
          <!-- <p class="pocentage-text-color-po">ลด</p> -->
        </div>
      </div>
    </ion-thumbnail>
    <ion-label style="height: 100%">
      <div padding-top>
        <h2>{{item.name}}</h2>
        <p class="original-price">{{item.pricetext}}</p>
        <p class="current-price">{{item.newprice}}</p>
        <div *ngIf="item.sale !== item.stock">
          <ion-row>
            <ion-col size="10" class="col-center">
              <div class="progress">
                <div class="progress-bar progress-bar-striped" [style.width]="calculatePercentBar(item) + '%'">
                  <p class="text-center">ขายแล้ว {{item.sale}}</p>
                </div>
                <div class="flash-sale"></div>
              </div>
            </ion-col>
            <ion-col size="2" class="button-size">
              <ion-button color="danger" expand="block">ซื้อ</ion-button>
            </ion-col>
          </ion-row>
        </div>
        <div *ngIf="item.sale === item.stock">
          <ion-row>
            <ion-col size="7" class="col-center">
              <p class="textno">{{item.stock}} ชิ้น หมดใน 10 นาที</p>
            </ion-col>
            <img class="positionsaled" src="../assets//icon//outofstock.png">
          </ion-row>
        </div>
      </div>
    </ion-label>
  </ion-item>
</ion-list>
`;

const CSS_STYLE = `
ion-item {
  width: 100%;
  padding: 10px;
  background-color: #FFFFFF;
  ion-thumbnail {
      width: 30%;
      height: 25%;
      .pocentage-sale {
          position: absolute; // height: 35%;
          width: 18%;
          min-width: 40px; // left: 82px;
          top: 16px;
          right: 0;
          .pocentage-text {
              top: -13px;
              position: absolute;
              right: -1px;
              font-size: 14px;
              font-weight: 300;
              text-align: center;
              color: #fff;
          }
          .pocentage-text-color {
              top: -13px;
              position: absolute; // right: -1px;
              font-size: 14px;
              font-weight: bold; // text-align: center;
              color: rgb(255, 38, 0);
              .pocentage-text-color-po {
                  color: #fff;
                  font-weight: bold;
                  font-size: 14px !important;
              }
          }
      }
  }
  .original-price {
      text-decoration-line: line-through;
      color: rgba(0, 0, 0, .26)
  }
  .current-price {
      font-size: 1.125rem; // color: #ff5722;
      color: rgb(255, 38, 0);
      font-weight: 500;
  }
  .col-center {
      align-items: center !important;
  }
  h2 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
      width: 100%;
      min-width: 1px;
      // font-size: 4.5vw;
      font-size: .995rem;
      font-family: -apple-system, Helvetica Neue, Helvetica, Roboto, Droid Sans, Arial, sans-serif;
      font-weight: 400;
      height: 2.25rem;
  }
  .positionsaled {
      position: absolute;
      z-index: 9999;
      width: 44%;
      top: 34px;
      right: 12px;
  }
  .textno {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
      width: 100%;
      min-width: 1px;
      color: #999;
      font-size: 2.5vw;
  }
  .progress {
      // height: 20px;
      height: .985rem;
      margin-top: 8px;
      overflow: hidden; // background-color: rgb(255, 189, 166);
      background: rgba(255, 87, 34, .16);
      border-radius: 20px;
      -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
      .progress-bar {
          float: left;
          width: 0;
          height: 100%;
          font-size: 12px;
          // line-height: 20px;
          color: #fff;
          text-align: center; // background-color: #f25454;
          background-image: -webkit-linear-gradient(left, rgb(236, 31, 22), rgb(255, 172, 0)); // -webkit-box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);
          -webkit-transition: width .6s ease;
          -o-transition: width .6s ease;
          transition: width .6s ease;
      }
      .text-center {
          position: absolute;
          margin: auto;
          left: 0;
          right: 0;
          color: #fff;
          font-size: .785rem;
      }
      .flash-sale {
          background: url(https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-th/assets/d224da21491f6660be6e020e12aff419.png) 0 no-repeat;
          width: 18px;
          height: 21px;
          background-size: contain;
          position: absolute;
          margin-top: -10px;
          margin-left: 5px
      }
  }
  .button-size {
      padding-left: 0px !important;
      padding-right: 0px !important;
  }
}

.relative {
  position: relative;
}

.percentage {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 0;
  line-height: 0;
}

.pocentage-font {
  font-size: 14px;
  font-weight: bold;
  color: rgb(255, 38, 0);
}

.pocentage-font-sub {
  color: #fff;
  font-weight: bold;
  font-size: 14px;
}
`;
@Component({
  selector: 'app-ecommerce-productlist-specialsale',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})
export class EcommerceProductlistSpecialsaleComponent implements OnInit {

  masterBar = 0;
  procentBar = 0;
  @Input() product: any = {
    products: []
  };
  @Output() outSpecialsale = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectItemSpecialsale(item) {
    this.outSpecialsale.emit(item);
  }

  calculatePercentBar(item) {
    return (item.sale / item.stock) * 100;
  }

}
