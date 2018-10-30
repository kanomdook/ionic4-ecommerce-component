import { OnInit, EventEmitter } from '@angular/core';
export declare class EcommerceProductlistSpecialsaleComponent implements OnInit {
    masterBar: number;
    procentBar: number;
    product: any;
    outSpecialsale: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    selectItemSpecialsale(item: any): void;
    calculatePercentBar(item: any): number;
}
