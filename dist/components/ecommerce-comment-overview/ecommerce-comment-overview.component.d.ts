import { OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
export declare class EcommerceCommentOverviewComponent implements OnInit {
    private navCtrl;
    overview: any;
    constructor(navCtrl: NavController);
    ngOnInit(): void;
    toCommentAllPage(): void;
}
