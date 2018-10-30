import { OnInit, EventEmitter } from '@angular/core';
export declare class EcommerceCartComponent implements OnInit {
    datas: any;
    cartDatas: EventEmitter<{}>;
    selectAll: Boolean;
    selectItem: Boolean;
    constructor();
    ngOnInit(): void;
    addQty(i: any): void;
    deleteQty(i: any): void;
    selectAllProd(e: any, i: any): void;
    checkAllCheckbox(i: any): void;
    selectByItem(i: any, itm: any): void;
    delProduct(i: any, idx: any): void;
}
