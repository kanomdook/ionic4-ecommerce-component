import { Component, OnInit, Input } from '@angular/core';
const HTML_TEMPLATE = `
<ion-grid no-padding>
  <ion-row no-padding>
    <ion-col size="12" no-padding>
      <ion-card class="margin-left-right margin-top no-box-shadow bg-color " no-padding>
        <ion-card-content no-padding>
          <ion-row no-padding>
            <ion-col size="12" no-padding>
              <ion-slides pager>
                <ion-slide size="12" *ngFor="let item of datas.product.image">
                  <img [src]="item.url" />
                </ion-slide>
              </ion-slides>
            </ion-col>

            <!-- เว้น  -->
            <ion-col size="12">
              <ion-row>
                <ion-col size="10">
                  <p>{{datas.product.name}}</p>
                  <ion-col no-padding size="12" class="font-text-price" *ngIf="!datas.product.newpricetext && datas.product.pricetext">
                    <div no-padding>
                      <p>
                        <span class="font-price">{{datas.product.pricetext}}</span>
                        <span padding>{{datas.product.newpricetext}}</span>
                      </p>
                    </div>
                  </ion-col>
                  <ion-col no-padding size="12" class="font-text-price" *ngIf="datas.product.newpricetext && datas.product.pricetext">
                    <div no-padding>
                      <p>
                        <span class="color-font in-line">{{datas.product.pricetext}}</span>
                        <span class="font-price padding-price">{{datas.product.newpricetext}}</span>
                      </p>
                    </div>
                  </ion-col>
                </ion-col>
                <ion-col size="2">
                  <div class=" image-discount container">
                    <ion-img src="https://res.cloudinary.com/dyiuidzsc/image/upload/v1540789236/furnover/png/tagIcon.png"></ion-img>
                    <div class="centered">
                      <p class="font-discount">5%</p>
                      <p class="font-text-discount"> ลด</p>
                    </div>
                  </div>
                </ion-col>
              </ion-row>
            </ion-col>


            <!-- เว้น -->
            <ion-col size="12">
              <ion-row>
                <ion-col size="6">
                  <app-ion-rating [ratings]="datas.product.ratings"></app-ion-rating>
                  <span class="color-text-ratings">{{datas.product.ratings}}/5</span>
                  <span class="color-text-gray font-text-reviews">({{datas.product.reviews}})</span>
                </ion-col>
                <ion-col size="6">
                  <p class="color-text-gray">ยอดขายต่อเดือน: {{datas.product.sales}}</p>
                </ion-col>
              </ion-row>
            </ion-col>
          </ion-row>
        </ion-card-content>
      </ion-card>
    </ion-col>



    <ion-col size="12" no-padding>
      <ion-card class="margin-left-right margin-top no-box-shadow bg-color " no-padding>
        <ion-card-content no-padding>
          <ion-row no-padding>
            <ion-col size="12">
              <p class="font-Orange">เตรียมส่งนานกว่าปกติ</p>
            </ion-col>
            <ion-col size="12">
              <p><span class="color-text-gray">ค่าจัดส่ง</span><span> ฿39</span></p>
            </ion-col>
            <ion-col size="12">
              <ion-row>
                <ion-col size="5">
                  <ion-button color="danger" shape="block" fill="outline">
                    <span></span>
                    <ion-icon name="heart-empty"></ion-icon> <span class="color-text-gray">ถูกใจ</span> <span class="color-text-gray">{{datas.product.likes}}</span>
                  </ion-button>
                </ion-col>
                <ion-col size="5">
                  <ion-button color="danger" shape="block" fill="outline">
                    <ion-icon name="star-outline"></ion-icon> <span class="color-text-gray">คะแนน</span> <span class="color-text-gray">{{datas.product.reviews}}</span>
                  </ion-button>
                </ion-col>
                <ion-col size="2">
                  <ion-button color="danger" shape="block" fill="outline">
                    <ion-icon name="share"></ion-icon>
                  </ion-button>
                </ion-col>
              </ion-row>

            </ion-col>

          </ion-row>

        </ion-card-content>
      </ion-card>
    </ion-col>

    <ion-col size="12" no-padding>
      <ion-card class="margin-left-right margin-top no-box-shadow bg-color " no-padding>
        <ion-card-content>
          <p>เลือกตัวอย่างสินค้า <span class="color-text-gray">(ตัวอย่างเช่น สี,เบอร์)</span> </p>
        </ion-card-content>
      </ion-card>
    </ion-col>

    <ion-col size="12" no-padding>
      <ion-card class="margin-left-right margin-top no-box-shadow bg-color " no-padding>
        <ion-card-content no-padding>
          <ion-col no-padding>
            <ion-row>
              <ion-col size="2" class="img-center">
                <img class="size-logo-img" [src]="datas.shop.image.url">
              </ion-col>
              <ion-col size="6">
                <p>{{datas.shop.name}}</p>
              </ion-col>
              <ion-col size="4">
                <ion-button class="border-radius-button" color="danger" expand="block" shape="round" size="small" fill="outline">
                  ดูร้านค้า
                </ion-button>
              </ion-col>
              <ion-col text-center size="6">
                <p class="font-Orange-like">{{datas.shop.productsqty}}</p>
                <p class="color-text-gray">รายการสินค้า</p>
              </ion-col>
              <ion-col class="border-left" text-center size="6">
                <p class="font-Orange-like">{{datas.shop.rating}}</p>
                <p class="color-text-gray">ให้คะแนน</p>
              </ion-col>

            </ion-row>
          </ion-col>
        </ion-card-content>
      </ion-card>
    </ion-col>

    <ion-col size="12" no-padding>
      <ion-card class="margin-left-right margin-top no-box-shadow bg-color " no-padding>
        <ion-card-content no-padding>
          <ion-col>
            <ion-row>
              <ion-col size="6" class="border-bottom">
                <p>รายละเอียดสินค้า</p>
              </ion-col>
              <ion-col text-right size="6" class="border-bottom">
                <ion-icon name="time"></ion-icon> <span>4 เดือน</span>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="12">
                <p class="padding-text-detail">{{datas.product.detail}}</p>
              </ion-col>
            </ion-row>
          </ion-col>
        </ion-card-content>
      </ion-card>
    </ion-col>

  </ion-row>
</ion-grid>
`;

const CSS_STYLE = `
.margin-left-right {
  margin-left: 0px !important;
  margin-right: 0px !important;
}

.size-logo-img {
  width: 80% !important;
  border-radius: 50%;
  height: 100% !important;
}

.border-radius-button {
  border-radius: 15px !important;
}

.border-left {
  border-left: 1px solid rgb(240, 238, 238) !important;
}

.border-right {
  border-right: 1px solid rgb(240, 238, 238) !important;
}

.border-bottom {
  border-bottom: 1px solid rgb(240, 238, 238) !important;
}

.margin-top {
  margin-top: 0% !important;
}

.no-box-shadow {
  box-shadow: unset;
}

.bg-color {
  background-color: white !important;
}

.padding-text-detail {
  padding: 12px;
  padding-top: 7px;
}

.font-Orange {
  margin-top: 5px !important;
  font-size: 11px !important;
  color: rgb(255, 38, 0) !important;
}

.font-Orange-price {
  font-weight: bold;
  margin-top: 5px !important;
  font-size: 15px !important;
  color: rgb(255, 38, 0) !important;
}

.font-Orange-like {
  margin-top: 5px !important;
  font-size: 13px !important;
  color: rgb(255, 38, 0) !important;
}

.in-line {
  text-decoration-line: line-through;
}

.color-font {
  font-size: 12px !important;
  color: lightgray;
  padding-left: 7px;
}

.font-text-price {
  font-size: 12px !important;
}

.padding-price {
  padding-left: 5px;
}

.font-price {
  font-size: 12px !important;
  color: rgb(255, 38, 0) !important;
  font-weight: bold;
}

.color-text-ratings {
  color: rgb(255, 145, 0) !important;
  font-size: 15px;
  padding-left: 3px;
}

.font-text-reviews {
  font-size: 15px;
  padding-left: 3px;
}

.image-discount {
  width: 40px !important;
  height: 0% !important;
  position: absolute !important;
  right: 0% !important;
}

.container {
  // position: relative;
  text-align: center;
  color: white;
}

.centered {
  margin-top: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.font-discount {
  font-weight: bold;
  font-size: 14px !important;
  color: #ff2600 !important;
  margin: 0;
  padding: 0;
  margin-top: 10px !important;
}

.font-text-discount {
  font-weight: bold;
  margin-top: -5px;
  font-size: 14px !important;
  color: #ffffff !important;
}
`;
@Component({
  selector: 'app-ecommerce-product-detail',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})
export class EcommerceProductDetailComponent implements OnInit {

  @Input() datas: any;
  constructor() { }

  ngOnInit() {
  }
}
