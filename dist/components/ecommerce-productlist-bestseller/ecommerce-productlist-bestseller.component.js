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
var HTML_TEMPLATE = "\n<ion-list lines=\"none\">\n  <ion-item *ngFor=\"let item of databestseller.datas\" (click)=\"selectItemBestseller(item)\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"{{item.image.url}}\">\n    </ion-thumbnail>\n    <ion-label style=\"height:100%\">\n      <div padding-top>\n        <h2>{{item.name}}</h2>\n      </div>\n      <div padding-top>\n        <p class=\"weeklysales\">\u0E22\u0E2D\u0E14\u0E02\u0E32\u0E22\u0E15\u0E48\u0E2D\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C: {{item.weeklysales}}</p>\n        <div *ngIf=\"item.newpricetext === ''\">\n          <span class=\"colornewprice\">{{item.pricetext}}</span>\n        </div>\n\n        <div *ngIf=\"item.newpricetext !== ''\">\n          <span class=\"decoration-line\">{{item.pricetext}} </span><span class=\"colornewprice\">{{item.newpricetext}}</span>\n        </div>\n      </div>\n\n    </ion-label>\n  </ion-item>\n</ion-list>\n";
var CSS_STYLE = "\nion-item {\n  ion-thumbnail {\n      width: 30%;\n      height: 30%;\n  }\n  padding:6px;\n  margin: 10px;\n  border-radius: 10px;\n  background-color: #FFFFFF;\n  .decoration-line {\n      text-decoration-line: line-through; // color: #999;\n      color: rgba(0, 0, 0, .26); // font-size: 3.8vw;\n      font-size: 1.125rem;\n  }\n  h2 {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      display: block;\n      width: 100%;\n      min-width: 1px; // font-size: 4.5vw\n      font-size: .995rem;\n      font-family: -apple-system, Helvetica Neue, Helvetica, Roboto, Droid Sans, Arial, sans-serif;\n      font-weight: 400;\n      height: 2.25rem;\n  }\n  .colornewprice {\n      // color: red; // font-size: 4vw;\n      font-size: 1.125rem;\n      color: #ff2600;\n      font-weight: 500;\n     \n  }\n  .weeklysales {\n      // font-size: 3.5vw;\n      font-size: .875rem;\n  }\n}\n";
var EcommerceProductlistBestsellerComponent = /** @class */ (function () {
    function EcommerceProductlistBestsellerComponent() {
        this.outBestseller = new EventEmitter();
    }
    EcommerceProductlistBestsellerComponent.prototype.ngOnInit = function () {
    };
    EcommerceProductlistBestsellerComponent.prototype.selectItemBestseller = function (item) {
        this.outBestseller.emit(item);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], EcommerceProductlistBestsellerComponent.prototype, "databestseller", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], EcommerceProductlistBestsellerComponent.prototype, "outBestseller", void 0);
    EcommerceProductlistBestsellerComponent = __decorate([
        Component({
            selector: 'app-ecommerce-productlist-bestseller',
            template: HTML_TEMPLATE,
            styles: [CSS_STYLE]
        }),
        __metadata("design:paramtypes", [])
    ], EcommerceProductlistBestsellerComponent);
    return EcommerceProductlistBestsellerComponent;
}());
export { EcommerceProductlistBestsellerComponent };
//# sourceMappingURL=ecommerce-productlist-bestseller.component.js.map