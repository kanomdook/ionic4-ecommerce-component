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
var HTML_TEMPLATE = "\n<ion-grid class=\"background-color-grid\">\n  <ion-row>\n    <ion-col>\n      <b class=\"font-text-title\">{{items.title}}</b>\n    </ion-col>\n  </ion-row>\n  <div class=\"slide-overflow\">\n    <ion-row class=\"flex-warp-list\">\n      <ion-col size=\"4\" *ngFor=\"let item of items.items\" (click)=\"sendData(item)\">\n        <ion-row>\n          <ion-col>\n            <ion-img *ngIf=\"item && item.image && item.image.url\" [src]=\"item.image.url\"></ion-img>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col no-padding>\n            <div no-padding style=\"text-align:left;\">\n              <p class=\"font-text-name\">{{item.name}}</p>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"4\">\n        <div class=\"position-div\">\n          <img src=\"https://res.cloudinary.com/dyiuidzsc/image/upload/v1540795721/furnover/png/play-symbol.png\">\n          <p class=\"more-button-text\">\u0E14\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14</p>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-grid>\n";
var CSS_STYLE = "\n.background-color-grid {\n  background-color: white !important;\n}\n\n.image-discount {\n  width: 40px !important;\n  height: 0% !important;\n  position: absolute !important;\n  right: 0% !important;\n}\n\n.text-discount {\n  position: absolute !important;\n}\n\n.progress {\n  // height: 20px;\n  height: .985rem;\n  margin-bottom: 20px;\n  overflow: hidden; // background-color: rgb(255, 189, 166);\n  background: rgba(255, 87, 34, .16);\n  border-radius: 20px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n}\n\n.progress-bar {\n  float: left;\n  width: 0;\n  height: 100%;\n  font-size: 12px;\n  // line-height: 20px;\n  color: #fff;\n  text-align: center; // background-color: #f25454;\n  background-image: -webkit-linear-gradient(left, rgb(236, 31, 22), rgb(255, 172, 0)); // -webkit-box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);\n  -webkit-transition: width .6s ease;\n  -o-transition: width .6s ease;\n  transition: width .6s ease;\n}\n\n.text-center {\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  color: #fff;\n  font-size: .785rem;\n}\n\n.flash-sale {\n  background: url(https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-th/assets/d224da21491f6660be6e020e12aff419.png) 0 no-repeat;\n  width: 18px;\n  height: 21px;\n  background-size: contain;\n  position: absolute;\n  margin-left: 5px;\n  margin-top: -10px;\n}\n\n.slide-overflow {\n  display: -webkit-box;\n  overflow-x: scroll;\n}\n\n.flex-warp-list {\n  flex-wrap: nowrap;\n}\n\n.more-button {\n  font-size: 50px;\n  color: orange;\n}\n\n.more-button-text {\n  color: orange;\n}\n\n.position-div {\n  position: absolute;\n  top: 25%;\n  left: 25%;\n  text-align: center !important;\n}\n\n.font-diccount {\n  font-weight: bold;\n  font-size: 16px !important;\n  color: rgb(255, 38, 0) !important;\n  margin: 0;\n  padding: 0;\n  margin-top: 10px !important;\n}\n\n.font-text-discount {\n  font-weight: bold;\n  margin-top: -5px;\n  font-size: 16px !important;\n  color: rgb(255, 255, 255) !important;\n}\n\n.container {\n  // position: relative;\n  text-align: center;\n  color: white;\n}\n\n.centered {\n  margin-top: 25px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.font-text-name {\n  // color: rgb(255, 38, 0) !important ;\n  margin: 0;\n  padding: 0;\n}\n\n.font-text-title {\n  font-weight: bold;\n  color: rgb(255, 38, 0) !important;\n}\n\n.background-color-product {\n  background-color: lightgrey !important;\n}\n";
var EcommerceBestsellerScrollxComponent = /** @class */ (function () {
    function EcommerceBestsellerScrollxComponent() {
        this.bestsellerScrollxData = new EventEmitter();
    }
    EcommerceBestsellerScrollxComponent.prototype.ngOnInit = function () {
    };
    EcommerceBestsellerScrollxComponent.prototype.sendData = function (item) {
        this.bestsellerScrollxData.emit(item);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], EcommerceBestsellerScrollxComponent.prototype, "items", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], EcommerceBestsellerScrollxComponent.prototype, "bestsellerScrollxData", void 0);
    EcommerceBestsellerScrollxComponent = __decorate([
        Component({
            selector: 'app-ecommerce-bestseller-scrollx',
            template: HTML_TEMPLATE,
            styles: [CSS_STYLE]
        }),
        __metadata("design:paramtypes", [])
    ], EcommerceBestsellerScrollxComponent);
    return EcommerceBestsellerScrollxComponent;
}());
export { EcommerceBestsellerScrollxComponent };
//# sourceMappingURL=ecommerce-bestseller-scrollx.component.js.map