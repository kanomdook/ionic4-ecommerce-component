import { Component, OnInit } from '@angular/core';
const HTML_TEMPLATE = `
<div class="shop-page-header" [ngStyle]="{'background-image': 'url('+ 'https://ichef.bbci.co.uk/news/660/cpsprodpb/8812/production/_102043843_dbc82227-5da2-4095-be51-a0d4bbbd9b88.jpg' + ')','top': '-163px'}">
  <div class="shop-page-header-mask">
    <ion-item lines="none">
      <ion-avatar slot="start">
        <img src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-1/p160x160/42572703_1824157904328502_7987998786641199104_n.jpg?_nc_cat=107&_nc_ht=scontent.fbkk12-1.fna&oh=21de29abc8da3d3795a0b4b45e854863&oe=5C4C1B6F">
      </ion-avatar>
      <ion-label>
        <h2 class="color-text">Intro Master</h2>
        <p class="color-text">Active เมื่อ 15 ชั่วโมง ที่ผ่านมา</p>
        <h3 class="color-text">ผู้ติดตาม 31 | กำลังติดตาม 74</h3>
      </ion-label>
      <ion-grid>
        <ion-row>
          <ion-button shape="round" fill="outline" color="light" size="small"><ion-icon name="add"></ion-icon> ติดตาม</ion-button>
        </ion-row>
        <ion-row>
          <ion-button shape="round" fill="outline" color="light" size="small"><ion-icon name="chatboxes"></ion-icon>พูดคุย</ion-button>
        </ion-row>
      </ion-grid>
    </ion-item>
  </div>
</div>
`;

const CSS_STYLE = `
.shop-page-header {
  position: relative;
  position: -webkit-sticky;
  position: sticky;
  width: 100%;
  padding-top: 50%;
  background-color: #fff;
  background-size: cover;
  top: 0;
  z-index: 89;
}
.shop-page-header-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(75,63,90,.7);
}
ion-avatar{
  width: 17%;
  height: 17%;
}
ion-item{
  margin: 7px;
  padding-top: 61px;
}
.color-text{
  color: white !important;
}

// ion-toolbar{
//     --background: none;
// }
// .header-ios ion-toolbar:last-child {
//     --border-width: 0 0 0.30px;
// }
`;
@Component({
  selector: 'app-ecommerce-shopdetail-scrollheader',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})
export class EcommerceShopdetailScrollheaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
