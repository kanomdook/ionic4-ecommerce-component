import { Component, OnInit } from '@angular/core';
const HTML_TEMPLATE = `
<div class="background-color">
  <b class="font-text-title">ร้านแนะนำ</b>
  <div class="slide-overflow">
    <ion-row class="horizontal">
      <ion-col size="5" size-md="4" size-lg="3" no-padding class="col-size">
        <ion-card class="card-margin" mode="md">
          <img class="image-card-size" src="assets/images/shop.jpg" />
          <ion-card-content class="card-padding">
            <ion-card-title>
              <ion-row>
                <ion-col size="4" no-padding>
                  <img class="image-circle" src="assets/images/shop-icon.jpg" />
                </ion-col>
                <ion-col size="8" class="name-shop-padding">
                  <p class="name-shop-card">My Shop Name again</p>
                </ion-col>
              </ion-row>
            </ion-card-title>
            <ion-row>
              <ion-col>
                <div class="button-center">
                  <ion-button class="height-btn" expand="block" size="small" color="danger" fill="outline">ดูร้านค้า</ion-button>
                </div>
              </ion-col>
            </ion-row>
          </ion-card-content>
        </ion-card>
      </ion-col>



      
      <ion-col size="5" size-md="4" size-lg="3" no-padding class="col-size">
        <ion-card class="card-margin" mode="md">
          <img class="image-card-size" src="assets/images/shop.jpg" />
          <ion-card-content class="card-padding">
            <ion-card-title>
              <ion-row>
                <ion-col size="4" no-padding>
                  <img class="image-circle" src="assets/images/shop-icon.jpg" />
                </ion-col>
                <ion-col size="8" class="name-shop-padding">
                  <p class="name-shop-card">My Shop Name again</p>
                </ion-col>
              </ion-row>
            </ion-card-title>
            <ion-row>
              <ion-col>
                <div class="button-center">
                  <ion-button class="height-btn" expand="block" size="small" color="danger" fill="outline">ดูร้านค้า</ion-button>
                </div>
              </ion-col>
            </ion-row>
          </ion-card-content>
        </ion-card>
      </ion-col>
      <ion-col size="5" size-md="4" size-lg="3" no-padding class="col-size">
        <ion-card class="card-margin" mode="md">
          <img class="image-card-size" src="assets/images/shop.jpg" />
          <ion-card-content class="card-padding">
            <ion-card-title>
              <ion-row>
                <ion-col size="4" no-padding>
                  <img class="image-circle" src="assets/images/shop-icon.jpg" />
                </ion-col>
                <ion-col size="8" class="name-shop-padding">
                  <p class="name-shop-card">My Shop Name again</p>
                </ion-col>
              </ion-row>
            </ion-card-title>
            <ion-row>
              <ion-col>
                <div class="button-center">
                  <ion-button class="height-btn" expand="block" size="small" color="danger" fill="outline">ดูร้านค้า</ion-button>
                </div>
              </ion-col>
            </ion-row>
          </ion-card-content>
        </ion-card>
      </ion-col>
      <ion-col size="5" size-md="4" size-lg="3" no-padding class="col-size">
        <ion-card class="card-margin" mode="md">
          <img class="image-card-size" src="assets/images/shop.jpg" />
          <ion-card-content class="card-padding">
            <ion-card-title>
              <ion-row>
                <ion-col size="4" no-padding>
                  <img class="image-circle" src="assets/images/shop-icon.jpg" />
                </ion-col>
                <ion-col size="8" class="name-shop-padding">
                  <p class="name-shop-card">My Shop Name again</p>
                </ion-col>
              </ion-row>
            </ion-card-title>
            <ion-row>
              <ion-col>
                <div class="button-center">
                  <ion-button class="height-btn" expand="block" size="small" color="danger" fill="outline">ดูร้านค้า</ion-button>
                </div>
              </ion-col>
            </ion-row>
          </ion-card-content>
        </ion-card>
      </ion-col>
      <ion-col size="5" size-md="4" size-lg="3" no-padding class="col-size">
        <ion-card class="card-margin" mode="md">
          <img class="image-card-size" src="assets/images/shop.jpg" />
          <ion-card-content class="card-padding">
            <ion-card-title>
              <ion-row>
                <ion-col size="4" no-padding>
                  <img class="image-circle" src="assets/images/shop-icon.jpg" />
                </ion-col>
                <ion-col size="8" class="name-shop-padding">
                  <p class="name-shop-card">My Shop Name again</p>
                </ion-col>
              </ion-row>
            </ion-card-title>
            <ion-row>
              <ion-col>
                <div class="button-center">
                  <ion-button class="height-btn" expand="block" size="small" color="danger" fill="outline">ดูร้านค้า</ion-button>
                </div>
              </ion-col>
            </ion-row>
          </ion-card-content>
        </ion-card>
      </ion-col>
      <ion-col size="5" size-md="4" size-lg="3" no-padding class="col-size">
        <ion-card class="card-margin" mode="md">
          <img class="image-card-size" src="assets/images/shop.jpg" />
          <ion-card-content class="card-padding">
            <ion-card-title>
              <ion-row>
                <ion-col size="4" no-padding>
                  <img class="image-circle" src="assets/images/shop-icon.jpg" />
                </ion-col>
                <ion-col size="8" class="name-shop-padding">
                  <p class="name-shop-card">My Shop Name again</p>
                </ion-col>
              </ion-row>
            </ion-card-title>
            <ion-row>
              <ion-col>
                <div class="button-center">
                  <ion-button class="height-btn" expand="block" size="small" color="danger" fill="outline">ดูร้านค้า</ion-button>
                </div>
              </ion-col>
            </ion-row>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </div>
</div>
`;

const CSS_STYLE = `
.slide-overflow {
  // display: -webkit-box;
  overflow-x: scroll;
  // display: -moz-box;
  // display: -ms-flexbox;
  // display: -webkit-flex;
  // display: flex;
}

::-webkit-scrollbar {
  display: none;
}

.horizontal {
  flex-wrap: nowrap !important;
}

.image-circle {
  border-radius: 50%;
  height: 30px;
  width: 30px;
}

.card-padding {
  padding-right: 7px;
  padding-left: 7px;
  padding-top: 8px;
  padding-bottom: 0px;
}

.image-card-size {
  width: 100% !important;
}

.name-shop-card {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 13px;
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

.btn-size {
  width: 80px !important;
}

.card-margin {
  margin-top: 10px;
  margin-right: 0px;
  margin-left: 10px;
  margin-bottom: 10px;
}

.height-btn {
  height: 25% !important;
}

.background-color{
  background-color: white;
}

.font-text-title {
  font-weight: bold ;
  color: rgb(255, 38, 0) !important ;
  padding-left: 10px;
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
