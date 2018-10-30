import { OnInit, EventEmitter } from '@angular/core';
export declare class EcommerceProductlistBestsellerComponent implements OnInit {
    databestseller: any;
    outBestseller: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    selectItemBestseller(item: any): void;
}
