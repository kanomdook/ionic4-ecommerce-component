import { Component, OnInit } from '@angular/core';
const HTML_TEMPLATE = `
<div class="background">
  ร้านแนะนำ
  <div class="slide-overflow">
    <ion-row class="flex-warp-list">
      <ion-col size="5" size-lg="3" no-padding class="col-size">
        <ion-card>
          <img class="image-card-size" src="assets/images/shop.jpg" />
          <ion-card-content class="card-padding">
            <ion-card-title>
              <ion-row>
                <ion-col size="4">
                  <img class="image-circle" src="assets/images/shop-icon.jpg" />
                </ion-col>
                <ion-col size="8" class="name-shop-padding">
                  <p class="name-shop-card">My Shop Name again</p>
                </ion-col>
              </ion-row>
            </ion-card-title>
            <div class="button-center">
              <!-- <ion-button color="danger" fill="outline">
                ดูร้านค้า
              </ion-button> -->
              <ion-button block color="danger" fill="outline">ดูร้านค้า</ion-button>
            </div>

          </ion-card-content>
        </ion-card>
      </ion-col>
      <ion-col size="5" no-padding class="col-size">
          <ion-card>
            <img class="image-card-size" src="assets/images/shop.jpg" />
            <ion-card-content class="card-padding">
              <ion-card-title>
                <ion-row>
                  <ion-col size="4">
                    <img class="image-circle" src="assets/images/shop-icon.jpg" />
                  </ion-col>
                  <ion-col size="8" class="name-shop-padding">
                    <p class="name-shop-card">My Shop Name again</p>
                  </ion-col>
                </ion-row>
              </ion-card-title>
              <div class="button-center">
                <!-- <ion-button color="danger" fill="outline">
                  ดูร้านค้า
                </ion-button> -->
                <ion-button block color="danger" fill="outline">ดูร้านค้า</ion-button>
              </div>
  
            </ion-card-content>
          </ion-card>
        </ion-col>
  

    </ion-row>
  </div>
</div>
`;

const CSS_STYLE = `
.slide-overflow {
  display: -webkit-box;
  overflow-x: scroll;
  // display: -moz-box;
  // display: -ms-flexbox;
  // display: -webkit-flex;
  // display: flex;
}

.flex-warp-list {
  flex-wrap: nowrap;
}

.image-circle {
  border-radius: 50%;
  height: 30px;
  width: 30px;
}

.card-padding {
  padding: 4px 4px 4px 4px;
}

.image-card-size {
  height: 110px;
}

.name-shop-card {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 13px;
  font-weight: bold;
  padding-top: 7px;
}

.name-shop-padding {
  padding: 0px 0px 0px 0px;
}

.col-size {
  width: 170px;
}

.button-center {
  text-align: center;
}

.btn-size{
  width: 130px;
  height: 35px;
}
`;
@Component({
  selector: 'app-ecommerce-shop-recommend-scrollx',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})
export class EcommerceShopRecommendScrollxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
