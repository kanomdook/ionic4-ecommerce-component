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
var HTML_TEMPLATE = "\n<ion-slides *ngIf=\"datas.length > 0\" #mySlider (ionSlidesDidLoad)=\"slidesDidLoad(mySlider)\" pager>\n  <ion-slide size=\"12\" *ngFor=\"let item of datas\" (click)=\"selectItem(item)\">\n    <img [src]=\"item.image.url\" />\n  </ion-slide>\n</ion-slides>\n\n<div *ngIf=\"datas && datas.image && datas.image.url\">\n  <img [src]=\"datas.image.url\" />\n</div>\n";
var CSS_STYLE = "\n.slide-overflow {\n  display: -webkit-box;\n  overflow-x: scroll;\n}\n\n.flex-warp-list {\n  flex-wrap: nowrap;\n}\n\n.background-color-grid {\n  background-color: white !important;\n}\n\nimg {\n  width: 100vw !important;\n}\n\n.size-img {\n  width: 50px !important;\n}\n\n.custom-swiper-pagination {\n  visibility: hidden;\n}\n";
var EcommerceSlideImageComponent = /** @class */ (function () {
    function EcommerceSlideImageComponent() {
        this.itemSelected = new EventEmitter();
        this.slideOpts = {
            effect: 'slide',
            speed: 200,
            loop: true,
            pagination: '.custom-swiper-pagination',
        };
    }
    EcommerceSlideImageComponent.prototype.ngOnInit = function () {
        // console.log(this.data);
    };
    EcommerceSlideImageComponent.prototype.slidesDidLoad = function (slides) {
        slides.startAutoplay();
    };
    EcommerceSlideImageComponent.prototype.selectItem = function (item) {
        this.itemSelected.emit(item);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], EcommerceSlideImageComponent.prototype, "datas", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], EcommerceSlideImageComponent.prototype, "itemSelected", void 0);
    EcommerceSlideImageComponent = __decorate([
        Component({
            selector: 'app-ecommerce-slide-image',
            template: HTML_TEMPLATE,
            styles: [CSS_STYLE]
        }),
        __metadata("design:paramtypes", [])
    ], EcommerceSlideImageComponent);
    return EcommerceSlideImageComponent;
}());
export { EcommerceSlideImageComponent };
//# sourceMappingURL=ecommerce-slide-image.component.js.map