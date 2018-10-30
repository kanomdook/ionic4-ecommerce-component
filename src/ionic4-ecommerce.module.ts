import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { EcommerceCategoryComponent } from './components/ecommerce-category/ecommerce-category.component';
import { EcommerceBestsellerScrollxComponent } from './components/ecommerce-bestseller-scrollx/ecommerce-bestseller-scrollx.component';
import { EcommerceCartComponent } from './components/ecommerce-cart/ecommerce-cart.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule
    ],
    declarations: [
        EcommerceBestsellerScrollxComponent,
        EcommerceCategoryComponent,
        EcommerceCartComponent
    ],
    exports: [
        EcommerceCategoryComponent,
        EcommerceBestsellerScrollxComponent,
        EcommerceCartComponent
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