var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { EcommerceCategoryComponent } from './components/ecommerce-category/ecommerce-category.component';
import { EcommerceBestsellerScrollxComponent } from './components/ecommerce-bestseller-scrollx/ecommerce-bestseller-scrollx.component';
import { EcommerceCartComponent } from './components/ecommerce-cart/ecommerce-cart.component';
import { EcommerceCommentAllComponent } from './components/ecommerce-comment-all/ecommerce-comment-all.component';
import { EcommerceCommentOverviewComponent } from './components/ecommerce-comment-overview/ecommerce-comment-overview.component';
import { EcommerceFollowComponent } from './components/ecommerce-follow/ecommerce-follow.component';
import { EcommerceProductDetailComponent } from './components/ecommerce-product-detail/ecommerce-product-detail.component';
var Ionic4EcommerceModule = /** @class */ (function () {
    function Ionic4EcommerceModule() {
    }
    Ionic4EcommerceModule_1 = Ionic4EcommerceModule;
    Ionic4EcommerceModule.forRoot = function () {
        return {
            ngModule: Ionic4EcommerceModule_1,
            providers: []
        };
    };
    var Ionic4EcommerceModule_1;
    Ionic4EcommerceModule = Ionic4EcommerceModule_1 = __decorate([
        NgModule({
            imports: [
                IonicModule,
                CommonModule
            ],
            declarations: [
                EcommerceBestsellerScrollxComponent,
                EcommerceCategoryComponent,
                EcommerceCartComponent,
                EcommerceCommentAllComponent,
                EcommerceCommentOverviewComponent,
                EcommerceFollowComponent,
                EcommerceProductDetailComponent
            ],
            exports: [
                EcommerceCategoryComponent,
                EcommerceBestsellerScrollxComponent,
                EcommerceCartComponent,
                EcommerceCommentAllComponent,
                EcommerceCommentOverviewComponent,
                EcommerceFollowComponent,
                EcommerceProductDetailComponent
            ]
        })
    ], Ionic4EcommerceModule);
    return Ionic4EcommerceModule;
}());
export { Ionic4EcommerceModule };
//# sourceMappingURL=ionic4-ecommerce.module.js.map