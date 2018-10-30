import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
const HTML_TEMPLATE = `
<div class="background-color">
    <b class="font-text-title">{{title}}</b>
    <div class="slide-container">
        <ion-grid>
            <ion-row class="horizontal">
                <ion-col size="4" class="item-center" *ngFor="let item of data1;let i = index" (click)="itemSelected(item)">
                    <img [src]="item.image.url" alt="imag" class="image-size">
                </ion-col>
            </ion-row>
            <ion-row class="horizontal">
                <ion-col size="4" class="item-center" *ngFor="let item of data2;let i = index" (click)="itemSelected(item)">
                    <img [src]="item.image.url" alt="imag" class="image-size">
                </ion-col>
                <ion-col size="4">
                    <div class="border-more">
                        <!-- <div class="image-size2 transform">
                            <img src="assets/images/play-symbol.png">
                        </div> -->

                        <div class="padding-more">
                            <img class="image-more-size " src="assets/images/play-symbol.png">
                        </div>
                        <div>
                            <p class="text-buttom">ดูเพิ่มเติม</p>
                        </div>
                    </div>
                </ion-col>
            </ion-row>
        </ion-grid>
    </div>
</div>
`;

const CSS_STYLE = `
.background-color {
  background-color: white !important;
}

.slide-container {
  display: -webkit-box;
  overflow-x: scroll;
}

::-webkit-scrollbar {
  display: none;
}

.item-center {
  text-align: center;
}

.horizontal {
  flex-wrap: nowrap !important;
}

.text-buttom {
  font-size: 90%;
  text-align: center;
  margin-bottom: 0px;
  color: orange;
  margin-top: 10%;
  flex-wrap: nowrap !important;
}

.image-size {
  border-style: solid;
  border-width: 1px;
  border-color: #d7d8da;
  width: 100%;
  height: 100%;
}

.font-text-title {
  font-weight: bold ;
  color: rgb(255, 38, 0) !important ;
  padding-left: 10px;
}

.border-more{
  text-align: center;
  border-style: solid;
  border-width: 1px;
  border-color: #d7d8da;
  height: 100%;
}

// .transform{
//     position: relative;
//     top: 50%;
//     transform: translateY(-50%);
// }

.image-more-size {
  flex-wrap: nowrap !important;
  width: 30%;
  color: orange;
}

.padding-more {
  // padding-top: 5px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

`;
@Component({
  selector: 'app-ecommerce-shop-grid',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})

export class EcommerceShopGridComponent implements OnInit {

  @Input() data: Array<any> = [];
  data1: Array<any> = [];
  data2: Array<any> = [];
  @Input() title = '';
  @Output() selected = new EventEmitter();



  constructor() {
  }

  ngOnInit() {
    this.data.forEach((el, i) => {
      if (i % 2) {
        this.data2.push(el);
      } else {
        this.data1.push(el);
      }
    });
    // console.log(this.data1);
    // console.log(this.data2);
  }

  itemSelected(item) {
    this.selected.emit(item);
  }

}
