import { OnInit, EventEmitter } from '@angular/core';
export declare class EcommerceCategoryComponent implements OnInit {
    title: string;
    items: Array<any>;
    items1: Array<any>;
    items2: Array<any>;
    itemSelected: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    selectItem(item: any): void;
}
