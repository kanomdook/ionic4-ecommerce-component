import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { EcommerceCategoryComponent } from './components/ecommerce-category/ecommerce-category.component';
import { EcommerceBestsellerScrollxComponent } from './components/ecommerce-bestseller-scrollx/ecommerce-bestseller-scrollx.component';
import { EcommerceCartComponent } from './components/ecommerce-cart/ecommerce-cart.component';
import { EcommerceCommentAllComponent } from './components/ecommerce-comment-all/ecommerce-comment-all.component';
import { EcommerceCommentOverviewComponent } from './components/ecommerce-comment-overview/ecommerce-comment-overview.component';
import { EcommerceFollowComponent } from './components/ecommerce-follow/ecommerce-follow.component';
import { EcommerceProductDetailComponent } from './components/ecommerce-product-detail/ecommerce-product-detail.component';

@NgModule({
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
export class Ionic4EcommerceModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: Ionic4EcommerceModule,
            providers: []
        };
    }
}