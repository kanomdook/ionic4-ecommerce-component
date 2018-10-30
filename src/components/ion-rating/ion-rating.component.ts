import { Component, OnInit, Input } from '@angular/core';
const HTML_TEMPLATE = `
<span class="rating-color">
  <span *ngIf="ratings == 0">
  <ion-icon name="star-outline"></ion-icon>
  <ion-icon name="star-outline"></ion-icon>
  <ion-icon name="star-outline"></ion-icon>
  <ion-icon name="star-outline"></ion-icon>
  <ion-icon name="star-outline"></ion-icon>
</span>
<span *ngIf="ratings == 0.5">
  <ion-icon name="star-half"></ion-icon>
  <ion-icon name="star-outline"></ion-icon>
  <ion-icon name="star-outline"></ion-icon>
  <ion-icon name="star-outline"></ion-icon>
  <ion-icon name="star-outline"></ion-icon>
</span>
<span *ngIf="ratings == 1">
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star-outline"></ion-icon>
  <ion-icon name="star-outline"></ion-icon>
  <ion-icon name="star-outline"></ion-icon>
  <ion-icon name="star-outline"></ion-icon>
</span>
<span *ngIf="ratings == 1.5">
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star-half"></ion-icon>
  <ion-icon name="star-outline"></ion-icon>
  <ion-icon name="star-outline"></ion-icon>
  <ion-icon name="star-outline"></ion-icon>
</span>
<span *ngIf="ratings == 2">
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star-outline"></ion-icon>
  <ion-icon name="star-outline"></ion-icon>
  <ion-icon name="star-outline"></ion-icon>
</span>
<span *ngIf="ratings == 2.5">
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star-half"></ion-icon>
  <ion-icon name="star-outline"></ion-icon>
  <ion-icon name="star-outline"></ion-icon>
</span>
<span *ngIf="ratings == 3">
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star-outline"></ion-icon>
  <ion-icon name="star-outline"></ion-icon>
</span>
<span *ngIf="ratings == 3.5">
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star-half"></ion-icon>
  <ion-icon name="star-outline"></ion-icon>
</span>
<span *ngIf="ratings == 4">
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star-outline"></ion-icon>
</span>
<span *ngIf="ratings == 4.5">
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star-half"></ion-icon>
</span>
<span *ngIf="ratings == 5">
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star"></ion-icon>
  <ion-icon name="star"></ion-icon>
</span>
</span>

`;

const CSS_STYLE = `
.rating-color {
  ion-icon {
      color: rgb(255, 145, 0) !important;
  }
}
`;
@Component({
  selector: 'app-ion-rating',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})
export class IonRatingComponent implements OnInit {
  @Input() ratings: any;
  constructor() { }

  ngOnInit() {
  }

}
