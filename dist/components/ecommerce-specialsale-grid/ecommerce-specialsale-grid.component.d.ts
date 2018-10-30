import { OnInit, EventEmitter } from '@angular/core';
export declare class EcommerceSpecialsaleGridComponent implements OnInit {
    datas: any;
    specialsaleGridData: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    sendData(item: any): void;
    calculatePercentBar(item: any): number;
}
