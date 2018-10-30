import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { MessageComponent } from './components/message/message.component';

@NgModule({
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
        IonRatingComponent,
        MessageComponent
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
        IonRatingComponent,
        MessageComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Ionic4EcommerceModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: Ionic4EcommerceModule,
            providers: []
        };
    }
}