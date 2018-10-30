import { OnInit, EventEmitter } from '@angular/core';
export declare class EcommerceShopGridComponent implements OnInit {
    data: Array<any>;
    data1: Array<any>;
    data2: Array<any>;
    title: string;
    selected: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    itemSelected(item: any): void;
}
