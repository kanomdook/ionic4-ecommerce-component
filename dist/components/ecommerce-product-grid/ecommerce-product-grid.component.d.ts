import { OnInit, EventEmitter } from '@angular/core';
export declare class EcommerceProductGridComponent implements OnInit {
    items: Array<any>;
    title: any;
    outPutData: EventEmitter<{}>;
    getProduct: any;
    constructor();
    ngOnInit(): void;
    clickItem(item: any): void;
}
