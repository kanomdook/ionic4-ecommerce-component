import { Component, OnInit } from '@angular/core';
const HTML_TEMPLATE = `
<ion-grid no-padding>
  <ion-row no-padding>
    <ion-col size="12" no-padding>
      <ion-card class="margin-left-right margin-top no-box-shadow bg-color " no-padding>
        <ion-card-content no-padding>
          <ion-row no-padding>
            <ion-col size="12" no-padding>
              <ion-slides pager>
                <ion-slide size="12">
                  <img src="https://cache.gmo2.sistacafe.com/images/uploads/summary/image/41751/3e9fea8de38ad5631fd691a1e9c54c26.jpg" />
                </ion-slide>
              </ion-slides>
            </ion-col>
            <ion-col size="12">
              <p>12313212312311212131</p>
            </ion-col>
            <ion-col>
              <p class="font-Orange-price">฿201</p>
            </ion-col>
            <ion-col size="12">
              <ion-row>
                <ion-col size="6">
                  <app-ion-rating></app-ion-rating><span class="color-text-gray">(1)</span>
                </ion-col>
                <ion-col size="6">
                  <p class="color-text-gray">ยอดขายต่อเดือน</p>
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
                  <ion-button shape="block" fill="outline">
                    <span></span>
                    <ion-icon name="heart-empty"></ion-icon> <span class="color-text-gray">ถูกใจ</span> <span class="color-text-gray">5</span>
                  </ion-button>
                </ion-col>
                <ion-col size="5">
                  <ion-button shape="block" fill="outline">
                    <ion-icon name="star-outline"></ion-icon> <span class="color-text-gray">คะแนน</span> <span class="color-text-gray">1</span>
                  </ion-button>
                </ion-col>
                <ion-col size="2">
                  <ion-button shape="block" fill="outline">
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
              <ion-col size="2">
                <img class="size-logo-img" src="http://www.บริษัทรับออกแบบโลโก้.com/wp-content/uploads/2017/01/%E0%B9%82%E0%B8%A5%E0%B9%82%E0%B8%81%E0%B9%89%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B9%89%E0%B8%B2.jpg">
              </ion-col>
              <ion-col size="6">
                <p>smartmate</p>
                <p class="color-text-gray">active เมื่อ 24 นาที ที่ผ่านมา</p>
              </ion-col>
              <ion-col size="4">
                <ion-button class="border-radius-button" expand="block" shape="round" size="small" fill="outline">
                  ดูร้านค้า
                </ion-button>
              </ion-col>
              <ion-col text-center size="4">
                <p class="font-Orange-like">378</p>
                <p class="color-text-gray">รายการสินค้า</p>
              </ion-col>
              <ion-col class="border-left" text-center size="4">
                <p class="font-Orange-like">3.9</p>
                <p class="color-text-gray">ให้คะแนน</p>
              </ion-col>
              <ion-col class="border-left" text-center size="4">
                <p class="font-Orange-like">36%</p>
                <p class="color-text-gray">การตอบกลับแชท</p>
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
              <ion-col size="4" class="border-right border-bottom ">
                <p>หมวดหมู่</p>
              </ion-col>
              <ion-col size="8" class="border-bottom">
                <p></p>
              </ion-col>

              <ion-col size="4" class="border-right border-bottom">
                <p>ยี่ห้อ</p>
              </ion-col>
              <ion-col size="8" class="border-bottom">
                <p class="color-text-gray"></p>
              </ion-col>

              <ion-col size="4" class="border-right border-bottom">
                <p>ชนิดสายนาฬิกา</p>
              </ion-col>
              <ion-col size="8" class="border-bottom">
                <p class="color-text-gray"></p>
              </ion-col>

              <ion-col size="4" class="border-right border-bottom">
                <p>วัสดุตัวเรือน</p>
              </ion-col>
              <ion-col size="8" class="border-bottom">
                <p class="color-text-gray"></p>
              </ion-col>

              <ion-col size="4" class="border-right border-bottom">
                <p>เป็นนาฬิกากันน้ำ</p>
              </ion-col>
              <ion-col size="8" class="border-bottom">
                <p class="color-text-gray"></p>
              </ion-col>

              <ion-col size="4" class="border-right border-bottom">
                <p>ส่งจาก</p>
              </ion-col>
              <ion-col size="8" class="border-bottom">
                <p class="color-text-gray"></p>
              </ion-col>
              <ion-col size="12">
                <p class="color-text-gray">2132156468971422</p>
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
  width: 100% !important;
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

.color-text-gray {
  color: rgb(182, 182, 182);
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
`;
@Component({
  selector: 'app-ecommerce-product-detail',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})
export class EcommerceProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
