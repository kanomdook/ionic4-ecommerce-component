import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
const HTML_TEMPLATE = `
<ion-grid style="background: white;">
  <ion-row>
    <ion-col size="6" text-left>
      <p>คะเเนนสินค้า</p>
      <p>
        <span>
          <app-ion-rating [ratings]="overview.rating"></app-ion-rating>
        </span>
        <span>{{overview.reviews}}</span>
      </p>

      <span class="color-font margin-left"></span>
    </ion-col>
    <ion-col size="6" text-right align-self-center>
      <p class="see-more-text-style" (click)="toCommentAllPage()">ดูทั้งหมด</p>
    </ion-col>
  </ion-row>

  <ion-row class="list-comment-style">
    <ion-col size="2" text-center>
      <ion-avatar class="img-user-style ">
        <img src="assets/images/avatar.png">
      </ion-avatar>
    </ion-col>
    <ion-col>
      <p style="margin: 0;">name</p>
      <p style="margin: 0;padding-top: 5px;">4/5</p>
      <p style="margin: 0;padding-top: 3px;">อาหารอร่อย ห้องน้ำสะอาด พนักงานบริการดี</p>
      <p style="margin: 0;padding-top: 5px;" class="date-comment-style">26-10-2018 17.40 | ตัวเลือกสินค้า : black</p>
    </ion-col>
  </ion-row>
  <!-- <ion-row class="list-comment-style">
    <ion-col size="2" text-center>
      <ion-avatar class="img-user-style ">
        <img src="assets/images/avatar.png">
      </ion-avatar>
    </ion-col>
    <ion-col>
      <p style="margin: 0;">เพียวเองงงงง</p>
      <p style="margin: 0;padding-top: 5px;">4/5</p>
      <p style="margin: 0;padding-top: 3px;">อาหารอร่อย ห้องน้ำสะอาด พนักงานบริการดี</p>
      <p style="margin: 0;padding-top: 5px;" class="date-comment-style">26-10-2018 17.40 | ตัวเลือกสินค้า : black</p>
    </ion-col>
  </ion-row> -->
</ion-grid>
`;

const CSS_STYLE = `
.img-user-style {
  width:100% !important;  
height : 100% !important;  
max-width: 50px !important;  //any size
max-height: 50px !important; //any size 
}

.date-comment-style {
  font-size: 13px;
  color: gray;
}

.list-comment-style {
  border-top: solid 1px rgb(241, 241, 241);
  padding-top: 5px;
  padding-bottom: 5px;
}

.see-more-text-style {
  color:  #ff5722 ;
}
`;
@Component({
  selector: 'app-ecommerce-comment-overview',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})
export class EcommerceCommentOverviewComponent implements OnInit {

  @Input() overview: any;

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    console.log(this.overview);
  }
  toCommentAllPage() {
    this.navCtrl.navigateForward('comment-all');
  }

}
