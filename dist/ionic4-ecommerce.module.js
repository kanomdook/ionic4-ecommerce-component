var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EcommerceCategoryComponent } from './components/ecommerce-category/ecommerce-category.component';
import { EcommerceBestsellerScrollxComponent } from './components/ecommerce-bestseller-scrollx/ecommerce-bestseller-scrollx.component';
import { EcommerceCartComponent } from './components/ecommerce-cart/ecommerce-cart.component';
import { EcommerceCommentAllComponent } from './components/ecommerce-comment-all/ecommerce-comment-all.component';
import { EcommerceCommentOverviewComponent } from './components/ecommerce-comment-overview/ecommerce-comment-overview.component';
import { EcommerceFollowComponent } from './components/ecommerce-follow/ecommerce-follow.component';
import { EcommerceProductDetailComponent } from './components/ecommerce-product-detail/ecommerce-product-detail.component';
import { EcommerceSlideImageComponent } from './components/ecommerce-slide-image/ecommerce-slide-image.component';
import { EcommerceProductGridComponent } from './components/ecommerce-product-grid/ecommerce-product-grid.component';
import { EcommerceProductlistBestsellerComponent } from './components/ecommerce-productlist-bestseller/ecommerce-productlist-bestseller.component';
import { EcommerceProductlistSpecialsaleComponent } from './components/ecommerce-productlist-specialsale/ecommerce-productlist-specialsale.component';
import { EcommerceShopGridComponent } from './components/ecommerce-shop-grid/ecommerce-shop-grid.component';
import { EcommerceShopRecommendScrollxComponent } from './components/ecommerce-shop-recommend-scrollx/ecommerce-shop-recommend-scrollx.component';
import { EcommerceShopdetailScrollheaderComponent } from './components/ecommerce-shopdetail-scrollheader/ecommerce-shopdetail-scrollheader.component';
import { EcommerceSpecialsaleGridComponent } from './components/ecommerce-specialsale-grid/ecommerce-specialsale-grid.component';
import { IonRatingComponent } from './components/ion-rating/ion-rating.component';
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
                CommonModule,
                FormsModule
            ],
            declarations: [
                EcommerceBestsellerScrollxComponent,
                EcommerceCategoryComponent,
                EcommerceCartComponent,
                EcommerceCommentAllComponent,
                EcommerceCommentOverviewComponent,
                EcommerceFollowComponent,
                EcommerceProductDetailComponent,
                EcommerceSlideImageComponent,
                EcommerceProductGridComponent,
                EcommerceProductlistBestsellerComponent,
                EcommerceProductlistSpecialsaleComponent,
                EcommerceShopGridComponent,
                EcommerceShopRecommendScrollxComponent,
                EcommerceShopdetailScrollheaderComponent,
                EcommerceSpecialsaleGridComponent,
                IonRatingComponent
            ],
            exports: [
                EcommerceCategoryComponent,
                EcommerceBestsellerScrollxComponent,
                EcommerceCartComponent,
                EcommerceCommentAllComponent,
                EcommerceCommentOverviewComponent,
                EcommerceFollowComponent,
                EcommerceProductDetailComponent,
                EcommerceSlideImageComponent,
                EcommerceProductGridComponent,
                EcommerceProductlistBestsellerComponent,
                EcommerceProductlistSpecialsaleComponent,
                EcommerceShopGridComponent,
                EcommerceShopRecommendScrollxComponent,
                EcommerceShopdetailScrollheaderComponent,
                EcommerceSpecialsaleGridComponent,
                IonRatingComponent
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], Ionic4EcommerceModule);
    return Ionic4EcommerceModule;
}());
export { Ionic4EcommerceModule };
//# sourceMappingURL=ionic4-ecommerce.module.js.map