import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { EcommerceCategoryComponent } from './components/ecommerce-category/ecommerce-category.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        IonicModule,
        CommonModule
    ],
    declarations: [
        EcommerceCategoryComponent
    ],
    exports: [
        EcommerceCategoryComponent
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