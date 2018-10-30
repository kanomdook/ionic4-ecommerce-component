import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

const HTML_TEMPLATE = `
<ion-grid class="background-color-grid">
  <ion-row>
    <ion-col>
      <b class="font-text-title">{{items.title}}</b>
    </ion-col>
  </ion-row>
  <div class="slide-overflow">
    <ion-row class="flex-warp-list">
      <ion-col size="4" *ngFor="let item of items.items" (click)="sendData(item)">
        <ion-row>
          <ion-col>
            <ion-img [src]="item.image.url"></ion-img>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col no-padding>
            <div no-padding style="text-align:left;">
              <p class="font-text-name">{{item.name}}</p>
            </div>
          </ion-col>
        </ion-row>
      </ion-col>
      <ion-col size="4">
        <div class="position-div">
          <img src="assets/images/play-symbol.png">
          <p class="more-button-text">ดูทั้งหมด</p>
        </div>
      </ion-col>
    </ion-row>
  </div>
</ion-grid>
`;

const CSS_STYLE = `
.background-color-grid {
  background-color: white !important;
}

.image-discount {
  width: 40px !important;
  height: 0% !important;
  position: absolute !important;
  right: 0% !important;
}

.text-discount {
  position: absolute !important;
}

.progress {
  height: .985rem;
  margin-bottom: 20px;
  overflow: hidden; // background-color: rgb(255, 189, 166);
  background: rgba(255, 87, 34, .16);
  border-radius: 20px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
}

.progress-bar {
  float: left;
  width: 0;
  height: 100%;
  font-size: 12px;
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
  margin-left: 5px;
  margin-top: -10px;
}

.slide-overflow {
  display: -webkit-box;
  overflow-x: scroll;
}

.flex-warp-list {
  flex-wrap: nowrap;
}

.more-button {
  font-size: 50px;
  color: orange;
}

.more-button-text {
  color: orange;
}

.position-div {
  position: absolute;
  top: 25%;
  left: 25%;
  text-align: center !important;
}

.font-diccount {
  font-weight: bold;
  font-size: 16px !important;
  color: rgb(255, 38, 0) !important;
  margin: 0;
  padding: 0;
  margin-top: 10px !important;
}

.font-text-discount {
  font-weight: bold;
  margin-top: -5px;
  font-size: 16px !important;
  color: rgb(255, 255, 255) !important;
}

.container {
  text-align: center;
  color: white;
}

.centered {
  margin-top: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.font-text-name {
  margin: 0;
  padding: 0;
}

.font-text-title {
  font-weight: bold;
  color: rgb(255, 38, 0) !important;
}

.background-color-product {
  background-color: lightgrey !important;
}
`;

@Component({
  selector: 'app-ecommerce-bestseller-scrollx',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})
export class EcommerceBestsellerScrollxComponent implements OnInit {

  @Input() items: any;
  @Output() bestsellerScrollxData = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendData(item) {
    this.bestsellerScrollxData.emit(item);
  }

}
