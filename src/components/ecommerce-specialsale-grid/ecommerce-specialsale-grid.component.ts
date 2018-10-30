import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
const HTML_TEMPLATE = `
<ion-grid class="background-color-grid">
  <ion-row *ngIf="datas && datas.title">
    <ion-col>
      <b class="font-text-title">{{datas.title}}</b>
    </ion-col>
  </ion-row>
  <div class="slide-overflow">
    <ion-row class="flex-warp-list" *ngIf="datas && datas.items">
      <ion-col size="4" *ngFor="let item of datas.items" (click)="sendData(item)">
        <ion-row>
          <ion-col>
            <div class=" image-discount container">
              <!-- <ion-img src="assets/images/ribbon-discount.png"></ion-img> -->
              <ion-img src="assets/icon/tagIcon.png"></ion-img>
              <div class="centered">
                <p class="font-diccount">{{item.percentage}}%</p>
                <p class="font-text-discount"> ลด</p>
              </div>
            </div>
            <ion-img [src]="item.image.url"></ion-img>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col no-padding>
            <div no-padding style="text-align:center;"> 
              <p class="font-text-price">{{item.newprice}}</p>
            </div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <div class="progress">
              <div class="progress-bar progress-bar-striped" [style.width]="calculatePercentBar(item) + '%'">
                <p class="text-center"> ขายเเล้ว {{item.sale}}</p>
              </div>
              <div class="flash-sale"></div>
            </div>
          </ion-col>
        </ion-row>
      </ion-col>
      <ion-col size="4" *ngIf="!datas && !datas.items">
        <div class="position-div">
          <img src="assets/images/play-symbol.png">
          <p class="more-button-text">ดูทั้งหมด</p>
        </div>
      </ion-col>
    </ion-row>
  </div>
</ion-grid>
<div text-center *ngIf="(datas && datas.items && datas.items.length === 0)||!datas || !datas.items">
  <p>ไม่มีสินค้า</p>
</div>
`;

const CSS_STYLE = `
.image-discount {
  width: 40px !important;
  height: 0% !important;
  position: absolute !important;
  right: 0% !important;
}

.text-discount {
  position: absolute !important ;
}

.progress {
  // height: 20px;
  height: .985rem;
  margin-bottom: 20px;
  overflow: hidden;
  // background-color: rgb(255, 189, 166);
  background: rgba(255,87,34,.16);
  border-radius: 20px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
}

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
  margin-left: 5px;
  margin-top: -10px;
}

.slide-overflow {
   display:-webkit-box;
   overflow-x: scroll ;
}
.flex-warp-list{
  flex-wrap: nowrap;
}
.more-button{
  font-size: 50px;
  color: orange;
}
.more-button-text {
  color: orange ;
}
.position-div{
  position: absolute;
  top: 25%;
  left: 25%;
  text-align: center !important;
}
.font-diccount {
  font-weight: bold;
  font-size: 14px !important;
  color: #ff2600 !important;
  margin: 0;
  padding: 0;
  margin-top: 10px !important ;
}

.font-text-discount {
  font-weight: bold;
  margin-top: -5px;
  font-size: 14px !important;
  color: #ffffff !important;
}
.container {
  // position: relative;
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
.font-text-price{
  font-weight: 500;
  font-size: .875rem !important;
  color: #ff5722 !important;
  // font-weight: bold;
  // color: rgb(255, 38, 0) !important ;
  margin: 0;
  padding: 0;
}

.font-text-title {
  font-weight: bold ;
  color: rgb(255, 38, 0) !important ;
}

.background-color-grid {
  background-color: white !important;
}


`;
@Component({
  selector: 'app-ecommerce-specialsale-grid',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})
export class EcommerceSpecialsaleGridComponent implements OnInit {

  @Input() datas: any;
  @Output() specialsaleGridData = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

  sendData(item) {
    this.specialsaleGridData.emit(item);
  }

  calculatePercentBar(item) {
    return (item.sale / item.stock) * 100;
  }
}
