import { OnInit, EventEmitter } from '@angular/core';
export declare class EcommerceBestsellerScrollxComponent implements OnInit {
    items: any;
    bestsellerScrollxData: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    sendData(item: any): void;
}
