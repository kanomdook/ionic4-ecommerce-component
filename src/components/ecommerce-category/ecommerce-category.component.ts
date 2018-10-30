import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
const HTML_TEMPLATE = `
<div class="box">
  <div>
    <b class="title">{{title}}</b>
  </div>
  <div class="slide-container">
    <ion-grid>
      <ion-row class="horizontal">
        <ion-col size="3" class="center" *ngFor="let item of items1" (click)="selectItem(item)">
          <img [src]="item.image.url" alt="imag" class="img-width">
          <div class="name">
            {{item.name}}
          </div>
        </ion-col>
      </ion-row>

      <ion-row class="horizontal">
        <ion-col size="3" class="center" *ngFor="let item of items2" (click)="selectItem(item)">
          <img [src]="item.image.url" alt="imag" class="img-width">
          <div class="name">
            {{item.name}}
          </div>
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>
</div>
`;

const CSS_STYLE = `
.box {
  background-color: #ffffff;
}

.title {
  font-weight: bold;
  color: rgb(255, 38, 0) !important;
  padding: 1rem 1rem 1rem 0.4rem;
}

.name {
  font-size: 0.75rem;
}

.slide-container {
  display: -webkit-box;
  overflow-x: scroll;
}

::-webkit-scrollbar {
  display: none;
}

.center {
  text-align: center;
  width: 22vw !important;
}

.horizontal {
  flex-wrap: nowrap !important;
}

.img-width {
  width: 74px;
}
`;

@Component({
  selector: 'app-ecommerce-category',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})
export class EcommerceCategoryComponent implements OnInit {
  @Input() title = 'title';
  @Input() items: Array<any> = [];
  items1: Array<any> = [];
  items2: Array<any> = [];
  @Output() itemSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
    const itemSlice = (this.items.length / 2) + 0.5;
    this.items1 = this.items.slice(0, itemSlice);
    this.items2 = this.items.slice(itemSlice, this.items.length);
  }

  selectItem(item) {
    this.itemSelected.emit(item);
  }

}
