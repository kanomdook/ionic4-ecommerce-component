import { OnInit, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';
export declare class EcommerceCartComponent implements OnInit {
    private navCtrl;
    datas: any;
    cartDatas: EventEmitter<{}>;
    selectAll: Boolean;
    selectItem: Boolean;
    constructor(navCtrl: NavController);
    ngOnInit(): void;
    addQty(i: any): void;
    deleteQty(i: any): void;
    selectAllProd(e: any, i: any): void;
    checkAllCheckbox(i: any): void;
    selectByItem(i: any, itm: any): void;
    delProduct(i: any, idx: any): void;
    toHomePage(): void;
}
