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
var HTML_TEMPLATE = "\n<div class=\"shop-page-header\" [ngStyle]=\"{'background-image': 'url('+ 'https://ichef.bbci.co.uk/news/660/cpsprodpb/8812/production/_102043843_dbc82227-5da2-4095-be51-a0d4bbbd9b88.jpg' + ')','top': '-163px'}\">\n  <div class=\"shop-page-header-mask\">\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-1/p160x160/42572703_1824157904328502_7987998786641199104_n.jpg?_nc_cat=107&_nc_ht=scontent.fbkk12-1.fna&oh=21de29abc8da3d3795a0b4b45e854863&oe=5C4C1B6F\">\n      </ion-avatar>\n      <ion-label>\n        <h2 class=\"color-text\">Intro Master</h2>\n        <p class=\"color-text\">Active \u0E40\u0E21\u0E37\u0E48\u0E2D 15 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07 \u0E17\u0E35\u0E48\u0E1C\u0E48\u0E32\u0E19\u0E21\u0E32</p>\n        <h3 class=\"color-text\">\u0E1C\u0E39\u0E49\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21 31 | \u0E01\u0E33\u0E25\u0E31\u0E07\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21 74</h3>\n      </ion-label>\n      <ion-grid>\n        <ion-row>\n          <ion-button shape=\"round\" fill=\"outline\" color=\"light\" size=\"small\"><ion-icon name=\"add\"></ion-icon> \u0E15\u0E34\u0E14\u0E15\u0E32\u0E21</ion-button>\n        </ion-row>\n        <ion-row>\n          <ion-button shape=\"round\" fill=\"outline\" color=\"light\" size=\"small\"><ion-icon name=\"chatboxes\"></ion-icon>\u0E1E\u0E39\u0E14\u0E04\u0E38\u0E22</ion-button>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </div>\n</div>\n";
var CSS_STYLE = "\n.shop-page-header {\n  position: relative;\n  position: -webkit-sticky;\n  position: sticky;\n  width: 100%;\n  padding-top: 50%;\n  background-color: #fff;\n  background-size: cover;\n  top: 0;\n  z-index: 89;\n}\n.shop-page-header-mask {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(75,63,90,.7);\n}\nion-avatar{\n  width: 17%;\n  height: 17%;\n}\nion-item{\n  margin: 7px;\n  padding-top: 61px;\n}\n.color-text{\n  color: white !important;\n}\n\n// ion-toolbar{\n//     --background: none;\n// }\n// .header-ios ion-toolbar:last-child {\n//     --border-width: 0 0 0.30px;\n// }\n";
var EcommerceShopdetailScrollheaderComponent = /** @class */ (function () {
    function EcommerceShopdetailScrollheaderComponent() {
    }
    EcommerceShopdetailScrollheaderComponent.prototype.ngOnInit = function () {
    };
    EcommerceShopdetailScrollheaderComponent = __decorate([
        Component({
            selector: 'app-ecommerce-shopdetail-scrollheader',
            template: HTML_TEMPLATE,
            styles: [CSS_STYLE]
        }),
        __metadata("design:paramtypes", [])
    ], EcommerceShopdetailScrollheaderComponent);
    return EcommerceShopdetailScrollheaderComponent;
}());
export { EcommerceShopdetailScrollheaderComponent };
//# sourceMappingURL=ecommerce-shopdetail-scrollheader.component.js.map