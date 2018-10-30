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
var HTML_TEMPLATE = "\n<div class=\"box\">\n  <div>\n    <b class=\"title\">{{title}}</b>\n  </div>\n  <div class=\"slide-container\">\n    <ion-grid>\n      <ion-row class=\"horizontal\">\n        <ion-col size=\"3\" class=\"center\" *ngFor=\"let item of items1\" (click)=\"selectItem(item)\">\n          <img [src]=\"item.image.url\" alt=\"imag\" class=\"img-width\">\n          <div class=\"name\">\n            {{item.name}}\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"horizontal\">\n        <ion-col size=\"3\" class=\"center\" *ngFor=\"let item of items2\" (click)=\"selectItem(item)\">\n          <img [src]=\"item.image.url\" alt=\"imag\" class=\"img-width\">\n          <div class=\"name\">\n            {{item.name}}\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</div>\n";
var CSS_STYLE = "\n.box {\n  background-color: #ffffff;\n}\n\n.title {\n  font-weight: bold;\n  color: rgb(255, 38, 0) !important;\n  padding: 1rem 1rem 1rem 0.4rem;\n}\n\n.name {\n  font-size: 0.75rem;\n}\n\n.slide-container {\n  display: -webkit-box;\n  overflow-x: scroll;\n}\n\n::-webkit-scrollbar {\n  display: none;\n}\n\n.center {\n  text-align: center;\n  width: 22vw !important;\n}\n\n.horizontal {\n  flex-wrap: nowrap !important;\n}\n\n.img-width {\n  width: 74px;\n}\n";
var EcommerceCategoryComponent = /** @class */ (function () {
    function EcommerceCategoryComponent() {
        this.title = 'title';
        this.items = [];
        this.items1 = [];
        this.items2 = [];
        this.itemSelected = new EventEmitter();
    }
    EcommerceCategoryComponent.prototype.ngOnInit = function () {
        var itemSlice = (this.items.length / 2) + 0.5;
        this.items1 = this.items.slice(0, itemSlice);
        this.items2 = this.items.slice(itemSlice, this.items.length);
    };
    EcommerceCategoryComponent.prototype.selectItem = function (item) {
        this.itemSelected.emit(item);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], EcommerceCategoryComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], EcommerceCategoryComponent.prototype, "items", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], EcommerceCategoryComponent.prototype, "itemSelected", void 0);
    EcommerceCategoryComponent = __decorate([
        Component({
            selector: 'app-ecommerce-category',
            template: HTML_TEMPLATE,
            styles: [CSS_STYLE]
        }),
        __metadata("design:paramtypes", [])
    ], EcommerceCategoryComponent);
    return EcommerceCategoryComponent;
}());
export { EcommerceCategoryComponent };
//# sourceMappingURL=ecommerce-category.component.js.map