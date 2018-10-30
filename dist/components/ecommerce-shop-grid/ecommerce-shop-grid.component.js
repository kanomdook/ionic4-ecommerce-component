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
var HTML_TEMPLATE = "\n<div class=\"background-color\">\n    <b class=\"font-text-title\">{{title}}</b>\n    <div class=\"slide-container\">\n        <ion-grid>\n            <ion-row class=\"horizontal\">\n                <ion-col size=\"4\" class=\"item-center\" *ngFor=\"let item of data1;let i = index\" (click)=\"itemSelected(item)\">\n                    <img [src]=\"item.image.url\" alt=\"imag\" class=\"image-size\">\n                </ion-col>\n            </ion-row>\n            <ion-row class=\"horizontal\">\n                <ion-col size=\"4\" class=\"item-center\" *ngFor=\"let item of data2;let i = index\" (click)=\"itemSelected(item)\">\n                    <img [src]=\"item.image.url\" alt=\"imag\" class=\"image-size\">\n                </ion-col>\n                <ion-col size=\"4\">\n                    <div class=\"border-more\">\n                        <!-- <div class=\"image-size2 transform\">\n                            <img src=\"assets/images/play-symbol.png\">\n                        </div> -->\n\n                        <div class=\"padding-more\">\n                            <img class=\"image-more-size \" src=\"assets/images/play-symbol.png\">\n                        </div>\n                        <div>\n                            <p class=\"text-buttom\">\u0E14\u0E39\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21</p>\n                        </div>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n</div>\n";
var CSS_STYLE = "\n.background-color {\n  background-color: white !important;\n}\n\n.slide-container {\n  display: -webkit-box;\n  overflow-x: scroll;\n}\n\n::-webkit-scrollbar {\n  display: none;\n}\n\n.item-center {\n  text-align: center;\n}\n\n.horizontal {\n  flex-wrap: nowrap !important;\n}\n\n.text-buttom {\n  font-size: 90%;\n  text-align: center;\n  margin-bottom: 0px;\n  color: orange;\n  margin-top: 10%;\n  flex-wrap: nowrap !important;\n}\n\n.image-size {\n  border-style: solid;\n  border-width: 1px;\n  border-color: #d7d8da;\n  width: 100%;\n  height: 100%;\n}\n\n.font-text-title {\n  font-weight: bold ;\n  color: rgb(255, 38, 0) !important ;\n  padding-left: 10px;\n}\n\n.border-more{\n  text-align: center;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #d7d8da;\n  height: 100%;\n}\n\n// .transform{\n//     position: relative;\n//     top: 50%;\n//     transform: translateY(-50%);\n// }\n\n.image-more-size {\n  flex-wrap: nowrap !important;\n  width: 30%;\n  color: orange;\n}\n\n.padding-more {\n  // padding-top: 5px;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n";
var EcommerceShopGridComponent = /** @class */ (function () {
    function EcommerceShopGridComponent() {
        this.data = [];
        this.data1 = [];
        this.data2 = [];
        this.title = '';
        this.selected = new EventEmitter();
    }
    EcommerceShopGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.forEach(function (el, i) {
            if (i % 2) {
                _this.data2.push(el);
            }
            else {
                _this.data1.push(el);
            }
        });
        // console.log(this.data1);
        // console.log(this.data2);
    };
    EcommerceShopGridComponent.prototype.itemSelected = function (item) {
        this.selected.emit(item);
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], EcommerceShopGridComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], EcommerceShopGridComponent.prototype, "title", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], EcommerceShopGridComponent.prototype, "selected", void 0);
    EcommerceShopGridComponent = __decorate([
        Component({
            selector: 'app-ecommerce-shop-grid',
            template: HTML_TEMPLATE,
            styles: [CSS_STYLE]
        }),
        __metadata("design:paramtypes", [])
    ], EcommerceShopGridComponent);
    return EcommerceShopGridComponent;
}());
export { EcommerceShopGridComponent };
//# sourceMappingURL=ecommerce-shop-grid.component.js.map