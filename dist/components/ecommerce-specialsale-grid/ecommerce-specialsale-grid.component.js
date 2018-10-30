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
var HTML_TEMPLATE = "\n<ion-grid class=\"background-color-grid\">\n  <ion-row *ngIf=\"datas && datas.title\">\n    <ion-col>\n      <b class=\"font-text-title\">{{datas.title}}</b>\n    </ion-col>\n  </ion-row>\n  <div class=\"slide-overflow\">\n    <ion-row class=\"flex-warp-list\" *ngIf=\"datas && datas.items\">\n      <ion-col size=\"4\" *ngFor=\"let item of datas.items\" (click)=\"sendData(item)\">\n        <ion-row>\n          <ion-col>\n            <div class=\" image-discount container\">\n              <!-- <ion-img src=\"assets/images/ribbon-discount.png\"></ion-img> -->\n              <ion-img src=\"assets/icon/tagIcon.png\"></ion-img>\n              <div class=\"centered\">\n                <p class=\"font-diccount\">{{item.percentage}}%</p>\n                <p class=\"font-text-discount\"> \u0E25\u0E14</p>\n              </div>\n            </div>\n            <ion-img [src]=\"item.image.url\"></ion-img>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col no-padding>\n            <div no-padding style=\"text-align:center;\"> \n              <p class=\"font-text-price\">{{item.newprice}}</p>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div class=\"progress\">\n              <div class=\"progress-bar progress-bar-striped\" [style.width]=\"calculatePercentBar(item) + '%'\">\n                <p class=\"text-center\"> \u0E02\u0E32\u0E22\u0E40\u0E40\u0E25\u0E49\u0E27 {{item.sale}}</p>\n              </div>\n              <div class=\"flash-sale\"></div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"4\" *ngIf=\"!datas && !datas.items\">\n        <div class=\"position-div\">\n          <img src=\"assets/images/play-symbol.png\">\n          <p class=\"more-button-text\">\u0E14\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14</p>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-grid>\n<div text-center *ngIf=\"(datas && datas.items && datas.items.length === 0)||!datas || !datas.items\">\n  <p>\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</p>\n</div>\n";
var CSS_STYLE = "\n.image-discount {\n  width: 40px !important;\n  height: 0% !important;\n  position: absolute !important;\n  right: 0% !important;\n}\n\n.text-discount {\n  position: absolute !important ;\n}\n\n.progress {\n  // height: 20px;\n  height: .985rem;\n  margin-bottom: 20px;\n  overflow: hidden;\n  // background-color: rgb(255, 189, 166);\n  background: rgba(255,87,34,.16);\n  border-radius: 20px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n}\n\n.progress-bar {\n  float: left;\n  width: 0;\n  height: 100%;\n  font-size: 12px;\n  // line-height: 20px;\n  color: #fff;\n  text-align: center; // background-color: #f25454;\n  background-image: -webkit-linear-gradient(left, rgb(236, 31, 22), rgb(255, 172, 0)); // -webkit-box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);\n  -webkit-transition: width .6s ease;\n  -o-transition: width .6s ease;\n  transition: width .6s ease;\n}\n\n.text-center {\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  color: #fff;\n  font-size: .785rem;\n}\n\n.flash-sale {\n  background: url(https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-th/assets/d224da21491f6660be6e020e12aff419.png) 0 no-repeat;\n  width: 18px;\n  height: 21px;\n  background-size: contain;\n  position: absolute;\n  margin-left: 5px;\n  margin-top: -10px;\n}\n\n.slide-overflow {\n   display:-webkit-box;\n   overflow-x: scroll ;\n}\n.flex-warp-list{\n  flex-wrap: nowrap;\n}\n.more-button{\n  font-size: 50px;\n  color: orange;\n}\n.more-button-text {\n  color: orange ;\n}\n.position-div{\n  position: absolute;\n  top: 25%;\n  left: 25%;\n  text-align: center !important;\n}\n.font-diccount {\n  font-weight: bold;\n  font-size: 14px !important;\n  color: #ff2600 !important;\n  margin: 0;\n  padding: 0;\n  margin-top: 10px !important ;\n}\n\n.font-text-discount {\n  font-weight: bold;\n  margin-top: -5px;\n  font-size: 14px !important;\n  color: #ffffff !important;\n}\n.container {\n  // position: relative;\n  text-align: center;\n  color: white;\n}\n.centered {\n  margin-top: 25px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.font-text-price{\n  font-weight: 500;\n  font-size: .875rem !important;\n  color: #ff5722 !important;\n  // font-weight: bold;\n  // color: rgb(255, 38, 0) !important ;\n  margin: 0;\n  padding: 0;\n}\n\n.font-text-title {\n  font-weight: bold ;\n  color: rgb(255, 38, 0) !important ;\n}\n\n.background-color-grid {\n  background-color: white !important;\n}\n\n\n";
var EcommerceSpecialsaleGridComponent = /** @class */ (function () {
    function EcommerceSpecialsaleGridComponent() {
        this.specialsaleGridData = new EventEmitter();
    }
    EcommerceSpecialsaleGridComponent.prototype.ngOnInit = function () {
    };
    EcommerceSpecialsaleGridComponent.prototype.sendData = function (item) {
        this.specialsaleGridData.emit(item);
    };
    EcommerceSpecialsaleGridComponent.prototype.calculatePercentBar = function (item) {
        return (item.sale / item.stock) * 100;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], EcommerceSpecialsaleGridComponent.prototype, "datas", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], EcommerceSpecialsaleGridComponent.prototype, "specialsaleGridData", void 0);
    EcommerceSpecialsaleGridComponent = __decorate([
        Component({
            selector: 'app-ecommerce-specialsale-grid',
            template: HTML_TEMPLATE,
            styles: [CSS_STYLE]
        }),
        __metadata("design:paramtypes", [])
    ], EcommerceSpecialsaleGridComponent);
    return EcommerceSpecialsaleGridComponent;
}());
export { EcommerceSpecialsaleGridComponent };
//# sourceMappingURL=ecommerce-specialsale-grid.component.js.map