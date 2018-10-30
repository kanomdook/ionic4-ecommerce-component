var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var HTML_TEMPLATE = "\n<span class=\"rating-color\">\n  <span *ngIf=\"ratings == 0\">\n  <ion-icon name=\"star-outline\"></ion-icon>\n  <ion-icon name=\"star-outline\"></ion-icon>\n  <ion-icon name=\"star-outline\"></ion-icon>\n  <ion-icon name=\"star-outline\"></ion-icon>\n  <ion-icon name=\"star-outline\"></ion-icon>\n</span>\n<span *ngIf=\"ratings == 0.5\">\n  <ion-icon name=\"star-half\"></ion-icon>\n  <ion-icon name=\"star-outline\"></ion-icon>\n  <ion-icon name=\"star-outline\"></ion-icon>\n  <ion-icon name=\"star-outline\"></ion-icon>\n  <ion-icon name=\"star-outline\"></ion-icon>\n</span>\n<span *ngIf=\"ratings == 1\">\n  <ion-icon name=\"star\"></ion-icon>\n  <ion-icon name=\"star-outline\"></ion-icon>\n  <ion-icon name=\"star-outline\"></ion-icon>\n  <ion-icon name=\"star-outline\"></ion-icon>\n  <ion-icon name=\"star-outline\"></ion-icon>\n</span>\n<span *ngIf=\"ratings == 1.5\">\n  <ion-icon name=\"star\"></ion-icon>\n  <ion-icon name=\"star-half\"></ion-icon>\n  <ion-icon name=\"star-outline\"></ion-icon>\n  <ion-icon name=\"star-outline\"></ion-icon>\n  <ion-icon name=\"star-outline\"></ion-icon>\n</span>\n<span *ngIf=\"ratings == 2\">\n  <ion-icon name=\"star\"></ion-icon>\n  <ion-icon name=\"star\"></ion-icon>\n  <ion-icon name=\"star-outline\"></ion-icon>\n  <ion-icon name=\"star-outline\"></ion-icon>\n  <ion-icon name=\"star-outline\"></ion-icon>\n</span>\n<span *ngIf=\"ratings == 2.5\">\n  <ion-icon name=\"star\"></ion-icon>\n  <ion-icon name=\"star\"></ion-icon>\n  <ion-icon name=\"star-half\"></ion-icon>\n  <ion-icon name=\"star-outline\"></ion-icon>\n  <ion-icon name=\"star-outline\"></ion-icon>\n</span>\n<span *ngIf=\"ratings == 3\">\n  <ion-icon name=\"star\"></ion-icon>\n  <ion-icon name=\"star\"></ion-icon>\n  <ion-icon name=\"star\"></ion-icon>\n  <ion-icon name=\"star-outline\"></ion-icon>\n  <ion-icon name=\"star-outline\"></ion-icon>\n</span>\n<span *ngIf=\"ratings == 3.5\">\n  <ion-icon name=\"star\"></ion-icon>\n  <ion-icon name=\"star\"></ion-icon>\n  <ion-icon name=\"star\"></ion-icon>\n  <ion-icon name=\"star-half\"></ion-icon>\n  <ion-icon name=\"star-outline\"></ion-icon>\n</span>\n<span *ngIf=\"ratings == 4\">\n  <ion-icon name=\"star\"></ion-icon>\n  <ion-icon name=\"star\"></ion-icon>\n  <ion-icon name=\"star\"></ion-icon>\n  <ion-icon name=\"star\"></ion-icon>\n  <ion-icon name=\"star-outline\"></ion-icon>\n</span>\n<span *ngIf=\"ratings == 4.5\">\n  <ion-icon name=\"star\"></ion-icon>\n  <ion-icon name=\"star\"></ion-icon>\n  <ion-icon name=\"star\"></ion-icon>\n  <ion-icon name=\"star\"></ion-icon>\n  <ion-icon name=\"star-half\"></ion-icon>\n</span>\n<span *ngIf=\"ratings == 5\">\n  <ion-icon name=\"star\"></ion-icon>\n  <ion-icon name=\"star\"></ion-icon>\n  <ion-icon name=\"star\"></ion-icon>\n  <ion-icon name=\"star\"></ion-icon>\n  <ion-icon name=\"star\"></ion-icon>\n</span>\n</span>\n\n";
var CSS_STYLE = "\n.rating-color {\n  ion-icon {\n      color: rgb(255, 145, 0) !important;\n  }\n}\n";
var IonRatingComponent = /** @class */ (function () {
    function IonRatingComponent() {
    }
    IonRatingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IonRatingComponent.prototype, "ratings", void 0);
    IonRatingComponent = __decorate([
        Component({
            selector: 'app-ion-rating',
            template: HTML_TEMPLATE,
            styles: [CSS_STYLE]
        }),
        __metadata("design:paramtypes", [])
    ], IonRatingComponent);
    return IonRatingComponent;
}());
export { IonRatingComponent };
//# sourceMappingURL=ion-rating.component.js.map