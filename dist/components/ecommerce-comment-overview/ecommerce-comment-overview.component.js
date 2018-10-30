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
var HTML_TEMPLATE = "\n<ion-grid style=\"background: white;\">\n  <ion-row>\n    <ion-col size=\"6\" text-left>\n      <p>\u0E04\u0E30\u0E40\u0E40\u0E19\u0E19\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</p>\n      <app-ion-rating></app-ion-rating>\n      <span class=\"color-font margin-left\"></span>\n    </ion-col>\n    <ion-col size=\"6\" text-right align-self-center>\n      <p class=\"see-more-text-style\">\u0E14\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14</p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"list-comment-style\">\n    <ion-col size=\"2\" text-center>\n      <ion-avatar class=\"img-user-style \">\n        <img src=\"assets/images/avatar.png\">\n      </ion-avatar>\n    </ion-col>\n    <ion-col>\n      <p style=\"margin: 0;\">\u0E40\u0E1E\u0E35\u0E22\u0E27\u0E40\u0E2D\u0E07\u0E07\u0E07\u0E07\u0E07</p>\n      <p style=\"margin: 0;padding-top: 5px;\">4/5</p>\n      <p style=\"margin: 0;padding-top: 3px;\">\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E2D\u0E23\u0E48\u0E2D\u0E22 \u0E2B\u0E49\u0E2D\u0E07\u0E19\u0E49\u0E33\u0E2A\u0E30\u0E2D\u0E32\u0E14 \u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E14\u0E35</p>\n      <p style=\"margin: 0;padding-top: 5px;\" class=\"date-comment-style\">26-10-2018 17.40 | \u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 : black</p>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"list-comment-style\">\n    <ion-col size=\"2\" text-center>\n      <ion-avatar class=\"img-user-style \">\n        <img src=\"assets/images/avatar.png\">\n      </ion-avatar>\n    </ion-col>\n    <ion-col>\n      <p style=\"margin: 0;\">\u0E40\u0E1E\u0E35\u0E22\u0E27\u0E40\u0E2D\u0E07\u0E07\u0E07\u0E07\u0E07</p>\n      <p style=\"margin: 0;padding-top: 5px;\">4/5</p>\n      <p style=\"margin: 0;padding-top: 3px;\">\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E2D\u0E23\u0E48\u0E2D\u0E22 \u0E2B\u0E49\u0E2D\u0E07\u0E19\u0E49\u0E33\u0E2A\u0E30\u0E2D\u0E32\u0E14 \u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E14\u0E35</p>\n      <p style=\"margin: 0;padding-top: 5px;\" class=\"date-comment-style\">26-10-2018 17.40 | \u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 : black</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n";
var CSS_STYLE = "\n.img-user-style {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 50px !important;\n  max-height: 50px !important;\n}\n\n.date-comment-style {\n  font-size: 13px;\n  color: gray;\n}\n\n.list-comment-style {\n  border-top: solid 1px rgb(241, 241, 241);\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.see-more-text-style {\n  color: #ff5722;\n}\n";
var EcommerceCommentOverviewComponent = /** @class */ (function () {
    function EcommerceCommentOverviewComponent() {
    }
    EcommerceCommentOverviewComponent.prototype.ngOnInit = function () {
    };
    EcommerceCommentOverviewComponent = __decorate([
        Component({
            selector: 'app-ecommerce-comment-overview',
            template: HTML_TEMPLATE,
            styles: [CSS_STYLE]
        }),
        __metadata("design:paramtypes", [])
    ], EcommerceCommentOverviewComponent);
    return EcommerceCommentOverviewComponent;
}());
export { EcommerceCommentOverviewComponent };
//# sourceMappingURL=ecommerce-comment-overview.component.js.map