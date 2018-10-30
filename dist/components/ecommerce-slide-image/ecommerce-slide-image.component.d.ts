import { OnInit, EventEmitter } from '@angular/core';
export declare class EcommerceSlideImageComponent implements OnInit {
    data: any;
    itemSelected: EventEmitter<{}>;
    slideOpts: {
        effect: string;
        speed: number;
        loop: boolean;
        pagination: string;
    };
    constructor();
    ngOnInit(): void;
    slidesDidLoad(slides: any): void;
    selectItem(item: any): void;
}
