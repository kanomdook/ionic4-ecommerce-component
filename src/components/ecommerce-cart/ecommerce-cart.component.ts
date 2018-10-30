import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';
const HTML_TEMPLATE = `
<div *ngIf="datas.length > 0">
  <div *ngFor="let item of datas;let i = index;">
    <ion-grid class="background-grid" *ngIf="!item.shop.products.length == 0" style="padding-top:0;padding-bottom:0;">
      <ion-row no-padding>
        <ion-col size="1.2" style="padding-top:0;padding-right:0;padding-bottom:0;">
          <p class="p-shop-name-style">
            <ion-checkbox name="{{item._id}}" color="danger" [(ngModel)]="item.isChecked" (click)="datas[i].flag = true"
              (ngModelChange)="selectAllProd(item.isChecked,i)"></ion-checkbox>
          </p>
        </ion-col>
        <ion-col size="1.1" no-padding>
          <div class="image-shop-div-style" *ngIf="item && item.shop && item.shop.image && item.shop.image.url">
            <img class="image-shop-style" [src]="item.shop.image.url">
          </div>
          <div class="image-shop-div-style" *ngIf="!item || !item.shop || !item.shop.image || !item.shop.image.url">
            <img class="image-shop-style" src="assets/images/gray-bg.png">
          </div>
        </ion-col>
        <ion-col size="9" no-padding>
          <p class="shop-name-style p-shop-name-style">{{item.shop.name}}</p>
        </ion-col>
      </ion-row>

      <div *ngFor="let itm of item.shop.products;let idx = index;">
        <ion-row class="div-prod-style">
          <ion-col size="1">
            <p>
              <ion-checkbox name="{{itm._id}}" id="{{itm._id}}" color="danger" style="margin-top: 10px;" [(ngModel)]="itm.isChecked"
                (ngModelChange)="selectByItem(i,itm)"></ion-checkbox>
            </p>
          </ion-col>
          <ion-col size="3">
            <div *ngIf="itm && itm.image && itm.image.url">
              <img [src]="itm.image.url" class="image-product-style">
            </div>
            <div *ngIf="!itm || !itm.image || !itm.image.url">
              <img src="assets/images/gray-bg.png" class="image-product-style">
            </div>
          </ion-col>
          <ion-col size="8">
            <ion-grid no-padding>
              <ion-row no-padding>
                <ion-col size="11" no-padding>
                  <p class="product-name-text" style="margin-bottom: 0;margin-top: 0;">
                    <!-- <span>(สีดำ)</span> -->
                    {{itm.name}}
                  </p>
                </ion-col>
                <ion-col size="1" no-padding>
                  <p style="margin-bottom: 0;margin-top: 0;">
                    <ion-icon name="ios-trash" class="icon-del-style" (click)="delProduct(i,idx)"></ion-icon>
                  </p>
                </ion-col>
              </ion-row>
            </ion-grid>
            <ion-grid style="text-align: center;margin-top: 5px;" no-padding>
              <ion-row style="height: 25px;" no-padding>
                <ion-col size="2" style="border:solid 1px lightgray;" no-padding>
                  <ion-button color="light" fill="clear" (click)="deleteQty(itm)" [disabled]="itm.qty == 1">
                    <span class="qty-button-style">-</span>
                  </ion-button>
                </ion-col>
                <ion-col size="2" style="border-top:solid 1px lightgray;border-bottom:solid 1px lightgray;" no-padding>
                  <ion-input class="input-qty" type="number" [(ngModel)]="itm.qty"></ion-input>
                </ion-col>
                <ion-col size="2" style="border:solid 1px lightgray;" no-padding>
                  <ion-button color="light" fill="clear" (click)="addQty(itm)">
                    <span class="qty-button-style1">+</span>
                  </ion-button>
                </ion-col>
                <ion-col text-left>
                  <span style="color:gray;font-size: 13px;">
                    {{itm.price.name}}
                  </span>
                </ion-col>
              </ion-row>
            </ion-grid>
            <ion-grid no-padding>
              <ion-row no-padding style="width: 150px;" *ngIf="!itm.price.newpricetext && itm.price.pricetext">
                <ion-col no-padding>
                  <p class="new-price-text-style">{{itm.price.pricetext}}</p>
                </ion-col>
                <ion-col no-padding style="margin-left: -42px;">
                  <p class="new-price-text-style">{{itm.price.newpricetext}}</p>
                </ion-col>
              </ion-row>
              <ion-row no-padding style="width: 150px;" *ngIf="itm.price.newpricetext && itm.price.pricetext">
                <ion-col no-padding>
                  <p class="price-text-style">{{itm.price.pricetext}}</p>
                </ion-col>
                <ion-col no-padding style="margin-left: -42px;">
                  <p class="new-price-text-style">{{itm.price.newpricetext}}</p>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-col>
        </ion-row>
      </div>
    </ion-grid>
    <br>
  </div>
</div>
<div *ngIf="datas.length <= 0">
  <ion-grid>
    <ion-row>
      <ion-col size="12" text-center align-self-center style="margin-top: 50px;">
        <img style="width: 80px;" src="https://res.cloudinary.com/dyiuidzsc/image/upload/v1540788716/furnover/png/productLogo.png">
        <p>รถเข็นสินค้าของคุณว่าง</p>
        <ion-button class="color-button-shop" (click)="toHomePage()">ช็อปตอนนี้</ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
</div>
`;

const CSS_STYLE = `
.background-grid {
  background-color:white !important ;
  }
  
  .image-shop-div-style{
      width: 25px;
      position: absolute;
      top: 0%;
      left: 0%;
      right: 0%;
      bottom: 0%;
      padding-top: 8px;
  
  }
  
  .image-shop-style{
      border-radius: 50% !important ;
  }
  
  .shop-name-style {
      font-size: 14px;
      padding-top: 2px;
  }
  
  .p-shop-name-style{
      margin-top: 10px;
      margin-bottom: 10px;
  }
  
  .border-header {
      border-bottom: solid 1px lightgray;
  }
  
  .product-name-text {
      text-overflow: ellipsis !important;
      overflow: hidden;
      white-space: nowrap;
      font-size: 14px;
  }
  
  .input-qty {
      text-align: center;
      margin-top: -8px;
      font-size: 13px;
  }
  
  .item-size-qty{
      width: 75% !important;
  }
  
  .new-price-text-style {
      color:  rgb(255, 38, 0) !important ;
      margin-top: 10px;
      margin-bottom: 0 !important ;
      font-size: 14px;
  }
  
  .image-product-style {
      margin-top: 0;
      width: 100px;
  }
  
  .qty-button-style {
      color: gray;
      font-size: 25px;
      margin-top: -25px;
      margin-left: -3px;
  }
  
  .qty-button-style1 {
      color: gray;
      font-size: 25px;
      margin-top: -22px;
      margin-left: -6px;
  }
  
  .boder-button-qty {
      border: 0 !important;
  }
  
  .price-text-style {
      color: lightgray;
      text-decoration-line: line-through;
      margin-top: 10px;
      margin-bottom: 0 !important ;
      font-size: 14px;
  }
  
  .icon-del-style {
      font-size: 20px;
      color: gray;
  }
  
  .div-prod-style {
      border-top: solid 1px rgb(241, 241, 241);
      padding-top: 10px;padding-bottom: 10px;
  }
  
  .color-button-shop {
      --background: #ff5722 !important;
  }
  
`;
@Component({
  selector: 'app-ecommerce-cart',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})
export class EcommerceCartComponent implements OnInit {

  @Input() datas: any;
  @Output() cartDatas = new EventEmitter();

  selectAll: Boolean = true;
  selectItem: Boolean = true;

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  addQty(i) {
    i.qty++;
    this.cartDatas.emit(this.datas);
  }

  deleteQty(i) {
    if (i.qty > 1) {
      i.qty--;
      this.cartDatas.emit(this.datas);
    }
  }

  selectAllProd(e, i) {
    if (this.datas[i].flag) {
      if (e) {
        this.datas[i].shop.products.forEach(product => {
          product.isChecked = true;
          this.cartDatas.emit(this.datas);
        });
      } else {
        this.datas[i].shop.products.forEach(product => {
          product.isChecked = false;
          this.cartDatas.emit(this.datas);
        });
      }
      this.checkAllCheckbox(i);
    }
  }

  checkAllCheckbox(i) {
    this.datas[i].isChecked = true;
    this.datas[i].shop.products.forEach(product => {
      if (!product.isChecked) {
        this.datas[i].isChecked = false;
      }
    });
  }

  selectByItem(i, itm) {
    this.datas[i].flag = false;
    this.cartDatas.emit(this.datas);
    this.checkAllCheckbox(i);
  }

  delProduct(i, idx) {
    const confirm = window.confirm('ยืนยันการลบสินค้า');
    if (confirm) {
      this.datas[i].shop.products.splice(idx, 1);
      this.cartDatas.emit(this.datas);
    }
  }

  toHomePage() {
    this.navCtrl.navigateForward('home');
  }

}
