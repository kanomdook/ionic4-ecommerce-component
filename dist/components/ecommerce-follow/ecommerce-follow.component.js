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
var HTML_TEMPLATE = "\n\n<ion-card>\n\n  <ion-item lines=\"none\">\n    <ion-avatar slot=\"start\">\n      <img src=\"https://prtimes.jp/i/3563/252/resize/d3563-252-646957-2.jpg\">\n    </ion-avatar>\n    <ion-label>\n      <h2 class=\"text-nor color-a\" >Sakura Beauty \u0E0B\u0E32\u0E01\u0E38\u0E23\u0E30\u0E1A\u0E34\u0E27\u0E15\u0E35\u0E49</h2>\n    </ion-label>\n    <ion-button color=\"danger\" shape=\"round\" fill=\"outline\">\n      <ion-icon name=\"add\" ccolor=\"danger\"></ion-icon>\n      \u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\n    </ion-button>\n  </ion-item>\n\n  <ion-card-content>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <img src=\"https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.0-9/18301842_435386383462348_5829017878368625796_n.jpg?_nc_cat=109&_nc_ht=scontent.fbkk9-2.fna&oh=73ddbcba0c800fbe48400e19696efcdc&oe=5C3FAC66\">\n        </ion-col>\n        <ion-col size=\"4\">\n          <img src=\"https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.0-9/18301842_435386383462348_5829017878368625796_n.jpg?_nc_cat=109&_nc_ht=scontent.fbkk9-2.fna&oh=73ddbcba0c800fbe48400e19696efcdc&oe=5C3FAC66\">\n        </ion-col>\n        <ion-col size=\"4\">\n          <img src=\"https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.0-9/18301842_435386383462348_5829017878368625796_n.jpg?_nc_cat=109&_nc_ht=scontent.fbkk9-2.fna&oh=73ddbcba0c800fbe48400e19696efcdc&oe=5C3FAC66\">\n        </ion-col>\n        <ion-col size=\"4\">\n          <img src=\"https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.0-9/18301842_435386383462348_5829017878368625796_n.jpg?_nc_cat=109&_nc_ht=scontent.fbkk9-2.fna&oh=73ddbcba0c800fbe48400e19696efcdc&oe=5C3FAC66\">\n        </ion-col>\n        <ion-col size=\"4\">\n          <img src=\"https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.0-9/18301842_435386383462348_5829017878368625796_n.jpg?_nc_cat=109&_nc_ht=scontent.fbkk9-2.fna&oh=73ddbcba0c800fbe48400e19696efcdc&oe=5C3FAC66\">\n        </ion-col>\n        <ion-col size=\"4\">\n          <img src=\"https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.0-9/18301842_435386383462348_5829017878368625796_n.jpg?_nc_cat=109&_nc_ht=scontent.fbkk9-2.fna&oh=73ddbcba0c800fbe48400e19696efcdc&oe=5C3FAC66\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <p class=\"text-nor\">Sakura Beauty \u0E0B\u0E32\u0E01\u0E38\u0E23\u0E30\u0E1A\u0E34\u0E27\u0E15\u0E35\u0E49</p>\n  </ion-card-content>\n\n  <ion-row>\n    <ion-col size=\"4\">\n      <ion-button class=\"ion-button\" fill=\"clear\" color=\"medium\">\n        <ion-icon name=\"heart\" fill=\"outline\"></ion-icon>\n        6\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-button fill=\"clear\" color=\"light\" color=\"medium\">\n        <ion-icon name=\"chatbubbles\" fill=\"outline\"></ion-icon>\n        \u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"4\" text-right>\n      <ion-button fill=\"clear\" color=\"medium\">\n        <ion-icon name=\"share\" fill=\"outline\"></ion-icon>\n        \u0E41\u0E0A\u0E23\u0E4C\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-card>\n";
var CSS_STYLE = "\nion-card{\n  background-color: white;\n  margin-right: 0px !important;\n  margin-left: 0px !important;\n  box-shadow: none !important;\n  .ion-button{\n      color: darkcyan !important;\n  }\n}\n.button-add{\n  color: var(--ion-color-danger-shade) !important;\n}\n\n.text-nor{\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      display:block;\n      width:100%;\n      min-width:1px;\n\n      \n}\n    \n      .color-a{\n          color: var(--colorapp);\n      }\n\n";
var EcommerceFollowComponent = /** @class */ (function () {
    function EcommerceFollowComponent() {
    }
    EcommerceFollowComponent.prototype.ngOnInit = function () {
    };
    EcommerceFollowComponent = __decorate([
        Component({
            selector: 'app-ecommerce-follow',
            template: HTML_TEMPLATE,
            styles: [CSS_STYLE]
        }),
        __metadata("design:paramtypes", [])
    ], EcommerceFollowComponent);
    return EcommerceFollowComponent;
}());
export { EcommerceFollowComponent };
//# sourceMappingURL=ecommerce-follow.component.js.map