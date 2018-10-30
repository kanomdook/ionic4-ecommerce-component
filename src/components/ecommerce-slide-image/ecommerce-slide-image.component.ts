import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
const HTML_TEMPLATE = `
<ion-slides #mySlider (ionSlidesDidLoad)="slidesDidLoad(mySlider)" pager >
  <ion-slide size="12" *ngFor="let item of data.campaign" (click)="selectItem(item)">
    <img [src]="item.image.url" />
  </ion-slide>
</ion-slides>
`;

const CSS_STYLE = `
.slide-overflow {
  display: -webkit-box;
  overflow-x: scroll;
}

.flex-warp-list {
  flex-wrap: nowrap;
}

.background-color-grid {
  background-color: white !important;
}

img {
  width: 100vw !important;
}

.size-img {
  width: 50px !important;
}

.custom-swiper-pagination {
  visibility: hidden;
}
`;
@Component({
  selector: 'app-ecommerce-slide-image',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})
export class EcommerceSlideImageComponent implements OnInit {
  @Input() data: any;
  @Output() itemSelected = new EventEmitter();
  slideOpts = {
    effect: 'slide',
    speed: 200,
    loop: true,
    pagination: '.custom-swiper-pagination',
  };
  constructor() { }

  ngOnInit() {
  }

  slidesDidLoad(slides) {
    slides.startAutoplay();
  }

  selectItem(item) {
    this.itemSelected.emit(item);
  }
}
