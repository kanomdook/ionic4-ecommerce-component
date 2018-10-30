var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var HTML_TEMPLATE = "\n<div class=\"background\">\n  \u0E23\u0E49\u0E32\u0E19\u0E41\u0E19\u0E30\u0E19\u0E33\n  <div class=\"slide-overflow\">\n    <ion-row class=\"flex-warp-list\">\n      <ion-col size=\"5\" size-lg=\"3\" no-padding class=\"col-size\">\n        <ion-card>\n          <img class=\"image-card-size\" src=\"assets/images/shop.jpg\" />\n          <ion-card-content class=\"card-padding\">\n            <ion-card-title>\n              <ion-row>\n                <ion-col size=\"4\">\n                  <img class=\"image-circle\" src=\"assets/images/shop-icon.jpg\" />\n                </ion-col>\n                <ion-col size=\"8\" class=\"name-shop-padding\">\n                  <p class=\"name-shop-card\">My Shop Name again</p>\n                </ion-col>\n              </ion-row>\n            </ion-card-title>\n            <div class=\"button-center\">\n              <!-- <ion-button color=\"danger\" fill=\"outline\">\n                \u0E14\u0E39\u0E23\u0E49\u0E32\u0E19\u0E04\u0E49\u0E32\n              </ion-button> -->\n              <ion-button block color=\"danger\" fill=\"outline\">\u0E14\u0E39\u0E23\u0E49\u0E32\u0E19\u0E04\u0E49\u0E32</ion-button>\n            </div>\n\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"5\" no-padding class=\"col-size\">\n          <ion-card>\n            <img class=\"image-card-size\" src=\"assets/images/shop.jpg\" />\n            <ion-card-content class=\"card-padding\">\n              <ion-card-title>\n                <ion-row>\n                  <ion-col size=\"4\">\n                    <img class=\"image-circle\" src=\"assets/images/shop-icon.jpg\" />\n                  </ion-col>\n                  <ion-col size=\"8\" class=\"name-shop-padding\">\n                    <p class=\"name-shop-card\">My Shop Name again</p>\n                  </ion-col>\n                </ion-row>\n              </ion-card-title>\n              <div class=\"button-center\">\n                <!-- <ion-button color=\"danger\" fill=\"outline\">\n                  \u0E14\u0E39\u0E23\u0E49\u0E32\u0E19\u0E04\u0E49\u0E32\n                </ion-button> -->\n                <ion-button block color=\"danger\" fill=\"outline\">\u0E14\u0E39\u0E23\u0E49\u0E32\u0E19\u0E04\u0E49\u0E32</ion-button>\n              </div>\n  \n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n  \n\n    </ion-row>\n  </div>\n</div>\n";
var CSS_STYLE = "\n.slide-overflow {\n  display: -webkit-box;\n  overflow-x: scroll;\n  // display: -moz-box;\n  // display: -ms-flexbox;\n  // display: -webkit-flex;\n  // display: flex;\n}\n\n.flex-warp-list {\n  flex-wrap: nowrap;\n}\n\n.image-circle {\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n}\n\n.card-padding {\n  padding: 4px 4px 4px 4px;\n}\n\n.image-card-size {\n  height: 110px;\n}\n\n.name-shop-card {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-size: 13px;\n  font-weight: bold;\n  padding-top: 7px;\n}\n\n.name-shop-padding {\n  padding: 0px 0px 0px 0px;\n}\n\n.col-size {\n  width: 170px;\n}\n\n.button-center {\n  text-align: center;\n}\n\n.btn-size{\n  width: 130px;\n  height: 35px;\n}\n";
var EcommerceShopRecommendScrollxComponent = /** @class */ (function () {
    function EcommerceShopRecommendScrollxComponent() {
    }
    EcommerceShopRecommendScrollxComponent.prototype.ngOnInit = function () {
    };
    EcommerceShopRecommendScrollxComponent = __decorate([
        Component({
            selector: 'app-ecommerce-shop-recommend-scrollx',
            template: HTML_TEMPLATE,
            styles: [CSS_STYLE]
        }),
        __metadata("design:paramtypes", [])
    ], EcommerceShopRecommendScrollxComponent);
    return EcommerceShopRecommendScrollxComponent;
}());
export { EcommerceShopRecommendScrollxComponent };
//# sourceMappingURL=ecommerce-shop-recommend-scrollx.component.js.map