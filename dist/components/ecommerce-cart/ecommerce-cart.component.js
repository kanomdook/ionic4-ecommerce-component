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
var HTML_TEMPLATE = "\n<div *ngFor=\"let item of datas;let i = index;\">\n  <ion-grid class=\"background-grid\" *ngIf=\"!item.shop.products.length == 0\" style=\"padding-top:0;padding-bottom:0;\">\n    <ion-row no-padding>\n      <ion-col size=\"1.2\" style=\"padding-top:0;padding-right:0;padding-bottom:0;\">\n        <p class=\"p-shop-name-style\">\n          <ion-checkbox name=\"{{item._id}}\" color=\"danger\" [(ngModel)]=\"item.isChecked\" (click)=\"datas[i].flag = true\"\n            (ngModelChange)=\"selectAllProd(item.isChecked,i)\"></ion-checkbox>\n        </p>\n      </ion-col>\n      <ion-col size=\"1.1\" no-padding>\n        <div class=\"image-shop-div-style\">\n          <img class=\"image-shop-style\" [src]=\"item.shop.image.url\" />\n        </div>\n      </ion-col>\n      <ion-col size=\"9\" no-padding>\n        <p class=\"shop-name-style p-shop-name-style\">{{item.shop.name}}</p>\n      </ion-col>\n    </ion-row>\n\n    <div *ngFor=\"let itm of item.shop.products;let idx = index;\">\n      <ion-row class=\"div-prod-style\">\n        <ion-col size=\"1\">\n          <p>\n            <ion-checkbox name=\"{{itm._id}}\" id=\"{{itm._id}}\" color=\"danger\" style=\"margin-top: 10px;\" [(ngModel)]=\"itm.isChecked\"\n              (ngModelChange)=\"selectByItem(i,itm)\"></ion-checkbox>\n          </p>\n        </ion-col>\n        <ion-col size=\"3\">\n          <img [src]=\"itm.image.url\" class=\"image-product-style\">\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-grid no-padding>\n            <ion-row no-padding>\n              <ion-col size=\"11\" no-padding>\n                <p class=\"product-name-text\" style=\"margin-bottom: 0;margin-top: 0;\">\n                  <!-- <span>(\u0E2A\u0E35\u0E14\u0E33)</span> -->\n                  {{itm.name}}\n                </p>\n              </ion-col>\n              <ion-col size=\"1\" no-padding>\n                <p style=\"margin-bottom: 0;margin-top: 0;\">\n                  <ion-icon name=\"ios-trash\" class=\"icon-del-style\" (click)=\"delProduct(i,idx)\"></ion-icon>\n                </p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <ion-grid style=\"text-align: center;margin-top: 5px;\" no-padding>\n            <ion-row style=\"height: 25px;\" no-padding>\n              <ion-col size=\"2\" style=\"border:solid 1px lightgray;\" no-padding>\n                <ion-button color=\"light\" fill=\"clear\" (click)=\"deleteQty(itm)\" [disabled]=\"itm.qty == 1\">\n                  <span class=\"qty-button-style\">-</span>\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"2\" style=\"border-top:solid 1px lightgray;border-bottom:solid 1px lightgray;\" no-padding>\n                <ion-input class=\"input-qty\" type=\"number\" [(ngModel)]=\"itm.qty\"></ion-input>\n              </ion-col>\n              <ion-col size=\"2\" style=\"border:solid 1px lightgray;\" no-padding>\n                <ion-button color=\"light\" fill=\"clear\" (click)=\"addQty(itm)\">\n                  <span class=\"qty-button-style1\">+</span>\n                </ion-button>\n              </ion-col>\n              <ion-col text-left>\n                <span style=\"color:gray;font-size: 13px;\">\n                    {{itm.price.name}}\n                </span>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <ion-grid no-padding>\n            <ion-row no-padding style=\"width: 150px;\" *ngIf=\"!itm.price.newpricetext && itm.price.pricetext\">\n              <ion-col no-padding>\n                <p class=\"new-price-text-style\">{{itm.price.pricetext}}</p>\n              </ion-col>\n              <ion-col no-padding style=\"margin-left: -42px;\">\n                <p class=\"new-price-text-style\">{{itm.price.newpricetext}}</p>\n              </ion-col>\n            </ion-row>\n            <ion-row no-padding style=\"width: 150px;\" *ngIf=\"itm.price.newpricetext && itm.price.pricetext\">\n              <ion-col no-padding>\n                <p class=\"price-text-style\">{{itm.price.pricetext}}</p>\n              </ion-col>\n              <ion-col no-padding style=\"margin-left: -42px;\">\n                <p class=\"new-price-text-style\">{{itm.price.newpricetext}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-grid>\n  <br>\n</div>\n";
var CSS_STYLE = "\n.background-grid {\n  background-color:white !important ;\n  }\n  \n  .image-shop-div-style{\n      width: 25px;\n      position: absolute;\n      top: 0%;\n      left: 0%;\n      right: 0%;\n      bottom: 0%;\n      padding-top: 8px;\n  \n  }\n  \n  .image-shop-style{\n      border-radius: 50% !important ;\n  }\n  \n  .shop-name-style {\n      font-size: 14px;\n      padding-top: 2px;\n  }\n  \n  .p-shop-name-style{\n      margin-top: 10px;\n      margin-bottom: 10px;\n  }\n  \n  .border-header {\n      border-bottom: solid 1px lightgray;\n  }\n  \n  .product-name-text {\n      text-overflow: ellipsis !important;\n      overflow: hidden;\n      white-space: nowrap;\n      font-size: 14px;\n  }\n  \n  .input-qty {\n      text-align: center;\n      margin-top: -8px;\n      font-size: 13px;\n  }\n  \n  .item-size-qty{\n      width: 75% !important;\n  }\n  \n  .new-price-text-style {\n      color:  rgb(255, 38, 0) !important ;\n      margin-top: 10px;\n      margin-bottom: 0 !important ;\n      font-size: 14px;\n  }\n  \n  .image-product-style {\n      margin-top: 0;\n      width: 100px;\n  }\n  \n  .qty-button-style {\n      color: gray;\n      font-size: 25px;\n      margin-top: -25px;\n      margin-left: -3px;\n  }\n  \n  .qty-button-style1 {\n      color: gray;\n      font-size: 25px;\n      margin-top: -22px;\n      margin-left: -6px;\n  }\n  \n  .boder-button-qty {\n      border: 0 !important;\n  }\n  \n  .price-text-style {\n      color: lightgray;\n      text-decoration-line: line-through;\n      margin-top: 10px;\n      margin-bottom: 0 !important ;\n      font-size: 14px;\n  }\n  \n  .icon-del-style {\n      font-size: 20px;\n      color: gray;\n  }\n  \n  .div-prod-style {\n      border-top: solid 1px rgb(241, 241, 241);\n      padding-top: 10px;padding-bottom: 10px;\n  }\n";
var EcommerceCartComponent = /** @class */ (function () {
    function EcommerceCartComponent() {
        this.cartDatas = new EventEmitter();
        this.selectAll = true;
        this.selectItem = true;
    }
    EcommerceCartComponent.prototype.ngOnInit = function () {
    };
    EcommerceCartComponent.prototype.addQty = function (i) {
        i.qty++;
        this.cartDatas.emit(this.datas);
    };
    EcommerceCartComponent.prototype.deleteQty = function (i) {
        if (i.qty > 1) {
            i.qty--;
            this.cartDatas.emit(this.datas);
        }
    };
    EcommerceCartComponent.prototype.selectAllProd = function (e, i) {
        var _this = this;
        if (this.datas[i].flag) {
            if (e) {
                this.datas[i].shop.products.forEach(function (product) {
                    product.isChecked = true;
                    _this.cartDatas.emit(_this.datas);
                });
            }
            else {
                this.datas[i].shop.products.forEach(function (product) {
                    product.isChecked = false;
                    _this.cartDatas.emit(_this.datas);
                });
            }
            this.checkAllCheckbox(i);
        }
    };
    EcommerceCartComponent.prototype.checkAllCheckbox = function (i) {
        var _this = this;
        this.datas[i].isChecked = true;
        this.datas[i].shop.products.forEach(function (product) {
            if (!product.isChecked) {
                _this.datas[i].isChecked = false;
            }
        });
    };
    EcommerceCartComponent.prototype.selectByItem = function (i, itm) {
        this.datas[i].flag = false;
        this.cartDatas.emit(this.datas);
        this.checkAllCheckbox(i);
    };
    EcommerceCartComponent.prototype.delProduct = function (i, idx) {
        var confirm = window.confirm('ยืนยันการลบสินค้า');
        if (confirm) {
            this.datas[i].shop.products.splice(idx, 1);
            this.cartDatas.emit(this.datas);
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], EcommerceCartComponent.prototype, "datas", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], EcommerceCartComponent.prototype, "cartDatas", void 0);
    EcommerceCartComponent = __decorate([
        Component({
            selector: 'app-ecommerce-cart',
            template: HTML_TEMPLATE,
            styles: [CSS_STYLE]
        }),
        __metadata("design:paramtypes", [])
    ], EcommerceCartComponent);
    return EcommerceCartComponent;
}());
export { EcommerceCartComponent };
//# sourceMappingURL=ecommerce-cart.component.js.map