var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
var HTML_TEMPLATE = "\n<ion-list lines=\"none\">\n  <ion-item *ngFor=\"let item of product.products\" (click)=\"selectItemSpecialsale(item)\">\n    <ion-thumbnail slot=\"start\">\n      <div class=\"relative\">\n        <img src=\"{{item.image.url}}\">\n        <div *ngIf=\"item.sale === item.stock\" class=\"pocentage-sale\">\n          <img src=\"../assets/icon/tagOutOfStock.png\">\n          <p class=\"pocentage-text\">\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E2B\u0E21\u0E14</p>\n        </div>\n        <div *ngIf=\"item.sale !== item.stock\" class=\"pocentage-sale\">\n          <img src=\"../assets/icon/tagIcon.png\">\n          <div class=\"percentage\">\n            <p class=\"pocentage-font\">{{item.percentage}}% </p>\n            <p class=\"pocentage-font-sub\">\u0E25\u0E14</p>\n          </div>\n          <!-- <p class=\"pocentage-text-color\">{{item.percentage}}% </p> -->\n          <!-- <p class=\"pocentage-text-color-po\">\u0E25\u0E14</p> -->\n        </div>\n      </div>\n    </ion-thumbnail>\n    <ion-label style=\"height: 100%\">\n      <div padding-top>\n        <h2>{{item.name}}</h2>\n        <p class=\"original-price\">{{item.pricetext}}</p>\n        <p class=\"current-price\">{{item.newprice}}</p>\n        <div *ngIf=\"item.sale !== item.stock\">\n          <ion-row>\n            <ion-col size=\"10\" class=\"col-center\">\n              <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-striped\" [style.width]=\"calculatePercentBar(item) + '%'\">\n                  <p class=\"text-center\">\u0E02\u0E32\u0E22\u0E41\u0E25\u0E49\u0E27 {{item.sale}}</p>\n                </div>\n                <div class=\"flash-sale\"></div>\n              </div>\n            </ion-col>\n            <ion-col size=\"2\" class=\"button-size\">\n              <ion-button color=\"danger\" expand=\"block\">\u0E0B\u0E37\u0E49\u0E2D</ion-button>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div *ngIf=\"item.sale === item.stock\">\n          <ion-row>\n            <ion-col size=\"7\" class=\"col-center\">\n              <p class=\"textno\">{{item.stock}} \u0E0A\u0E34\u0E49\u0E19 \u0E2B\u0E21\u0E14\u0E43\u0E19 10 \u0E19\u0E32\u0E17\u0E35</p>\n            </ion-col>\n            <img class=\"positionsaled\" src=\"../assets//icon//outofstock.png\">\n          </ion-row>\n        </div>\n      </div>\n    </ion-label>\n  </ion-item>\n</ion-list>\n";
var CSS_STYLE = "\nion-item {\n  width: 100%;\n  padding: 10px;\n  background-color: #FFFFFF;\n  ion-thumbnail {\n      width: 30%;\n      height: 25%;\n      .pocentage-sale {\n          position: absolute; // height: 35%;\n          width: 18%;\n          min-width: 40px; // left: 82px;\n          top: 16px;\n          right: 0;\n          .pocentage-text {\n              top: -13px;\n              position: absolute;\n              right: -1px;\n              font-size: 14px;\n              font-weight: 300;\n              text-align: center;\n              color: #fff;\n          }\n          .pocentage-text-color {\n              top: -13px;\n              position: absolute; // right: -1px;\n              font-size: 14px;\n              font-weight: bold; // text-align: center;\n              color: rgb(255, 38, 0);\n              .pocentage-text-color-po {\n                  color: #fff;\n                  font-weight: bold;\n                  font-size: 14px !important;\n              }\n          }\n      }\n  }\n  .original-price {\n      text-decoration-line: line-through;\n      color: rgba(0, 0, 0, .26)\n  }\n  .current-price {\n      font-size: 1.125rem; // color: #ff5722;\n      color: rgb(255, 38, 0);\n      font-weight: 500;\n  }\n  .col-center {\n      align-items: center !important;\n  }\n  h2 {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      display: block;\n      width: 100%;\n      min-width: 1px;\n      // font-size: 4.5vw;\n      font-size: .995rem;\n      font-family: -apple-system, Helvetica Neue, Helvetica, Roboto, Droid Sans, Arial, sans-serif;\n      font-weight: 400;\n      height: 2.25rem;\n  }\n  .positionsaled {\n      position: absolute;\n      z-index: 9999;\n      width: 44%;\n      top: 34px;\n      right: 12px;\n  }\n  .textno {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      display: block;\n      width: 100%;\n      min-width: 1px;\n      color: #999;\n      font-size: 2.5vw;\n  }\n  .progress {\n      // height: 20px;\n      height: .985rem;\n      margin-top: 8px;\n      overflow: hidden; // background-color: rgb(255, 189, 166);\n      background: rgba(255, 87, 34, .16);\n      border-radius: 20px;\n      -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n      box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n      .progress-bar {\n          float: left;\n          width: 0;\n          height: 100%;\n          font-size: 12px;\n          // line-height: 20px;\n          color: #fff;\n          text-align: center; // background-color: #f25454;\n          background-image: -webkit-linear-gradient(left, rgb(236, 31, 22), rgb(255, 172, 0)); // -webkit-box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);\n          -webkit-transition: width .6s ease;\n          -o-transition: width .6s ease;\n          transition: width .6s ease;\n      }\n      .text-center {\n          position: absolute;\n          margin: auto;\n          left: 0;\n          right: 0;\n          color: #fff;\n          font-size: .785rem;\n      }\n      .flash-sale {\n          background: url(https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-th/assets/d224da21491f6660be6e020e12aff419.png) 0 no-repeat;\n          width: 18px;\n          height: 21px;\n          background-size: contain;\n          position: absolute;\n          margin-top: -10px;\n          margin-left: 5px\n      }\n  }\n  .button-size {\n      padding-left: 0px !important;\n      padding-right: 0px !important;\n  }\n}\n\n.relative {\n  position: relative;\n}\n\n.percentage {\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  top: 0;\n  line-height: 0;\n}\n\n.pocentage-font {\n  font-size: 14px;\n  font-weight: bold;\n  color: rgb(255, 38, 0);\n}\n\n.pocentage-font-sub {\n  color: #fff;\n  font-weight: bold;\n  font-size: 14px;\n}\n";
var EcommerceProductlistSpecialsaleComponent = /** @class */ (function () {
    function EcommerceProductlistSpecialsaleComponent() {
        this.masterBar = 0;
        this.procentBar = 0;
        this.product = {
            products: []
        };
        this.outSpecialsale = new EventEmitter();
    }
    EcommerceProductlistSpecialsaleComponent.prototype.ngOnInit = function () {
    };
    EcommerceProductlistSpecialsaleComponent.prototype.selectItemSpecialsale = function (item) {
        this.outSpecialsale.emit(item);
    };
    EcommerceProductlistSpecialsaleComponent.prototype.calculatePercentBar = function (item) {
        return (item.sale / item.stock) * 100;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], EcommerceProductlistSpecialsaleComponent.prototype, "product", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], EcommerceProductlistSpecialsaleComponent.prototype, "outSpecialsale", void 0);
    EcommerceProductlistSpecialsaleComponent = __decorate([
        Component({
            selector: 'app-ecommerce-productlist-specialsale',
            template: HTML_TEMPLATE,
            styles: [CSS_STYLE]
        }),
        __metadata("design:paramtypes", [])
    ], EcommerceProductlistSpecialsaleComponent);
    return EcommerceProductlistSpecialsaleComponent;
}());
export { EcommerceProductlistSpecialsaleComponent };
//# sourceMappingURL=ecommerce-productlist-specialsale.component.js.map