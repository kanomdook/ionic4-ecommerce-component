import { Component, OnInit } from '@angular/core';
const HTML_TEMPLATE = `
<ion-card>

  <ion-item lines="none">
    <ion-avatar slot="start">
      <img src="https://prtimes.jp/i/3563/252/resize/d3563-252-646957-2.jpg">
    </ion-avatar>
    <ion-label>
      <h2 class="text-nor color-a">Sakura Beauty ซากุระบิวตี้</h2>
    </ion-label>
    <ion-button color="danger" shape="round" fill="outline">
      <ion-icon name="add" ccolor="danger"></ion-icon>
      ติดตาม
    </ion-button>
  </ion-item>

  <ion-card-content>
    <ion-grid>
      <ion-row>
        <ion-col size="4">
          <img src="https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.0-9/18301842_435386383462348_5829017878368625796_n.jpg?_nc_cat=109&_nc_ht=scontent.fbkk9-2.fna&oh=73ddbcba0c800fbe48400e19696efcdc&oe=5C3FAC66">
        </ion-col>
        <ion-col size="4">
          <img src="https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.0-9/18301842_435386383462348_5829017878368625796_n.jpg?_nc_cat=109&_nc_ht=scontent.fbkk9-2.fna&oh=73ddbcba0c800fbe48400e19696efcdc&oe=5C3FAC66">
        </ion-col>
        <ion-col size="4">
          <img src="https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.0-9/18301842_435386383462348_5829017878368625796_n.jpg?_nc_cat=109&_nc_ht=scontent.fbkk9-2.fna&oh=73ddbcba0c800fbe48400e19696efcdc&oe=5C3FAC66">
        </ion-col>
        <ion-col size="4">
          <img src="https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.0-9/18301842_435386383462348_5829017878368625796_n.jpg?_nc_cat=109&_nc_ht=scontent.fbkk9-2.fna&oh=73ddbcba0c800fbe48400e19696efcdc&oe=5C3FAC66">
        </ion-col>
        <ion-col size="4">
          <img src="https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.0-9/18301842_435386383462348_5829017878368625796_n.jpg?_nc_cat=109&_nc_ht=scontent.fbkk9-2.fna&oh=73ddbcba0c800fbe48400e19696efcdc&oe=5C3FAC66">
        </ion-col>
        <ion-col size="4">
          <img src="https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.0-9/18301842_435386383462348_5829017878368625796_n.jpg?_nc_cat=109&_nc_ht=scontent.fbkk9-2.fna&oh=73ddbcba0c800fbe48400e19696efcdc&oe=5C3FAC66">
        </ion-col>
      </ion-row>
    </ion-grid>

    <p class="text-nor">Sakura Beauty ซากุระบิวตี้</p>
  </ion-card-content>

  <ion-row>
    <ion-col size="4">
      <ion-button class="ion-button" fill="clear" color="medium">
        <ion-icon name="heart" fill="outline"></ion-icon>
        6
      </ion-button>
    </ion-col>
    <ion-col size="4">
      <ion-button fill="clear" color="light" color="medium">
        <ion-icon name="chatbubbles" fill="outline"></ion-icon>
        ความคิดเห็น
      </ion-button>
    </ion-col>
    <ion-col size="4" text-right>
      <ion-button fill="clear" color="medium">
        <ion-icon name="share" fill="outline"></ion-icon>
        แชร์
      </ion-button>
    </ion-col>
  </ion-row>

</ion-card>
`;

const CSS_STYLE = `
ion-card {
  background-color: white;
  margin-right: 0px !important;
  margin-left: 0px !important;
  box-shadow: none !important;
  .ion-button {
      color: darkcyan !important;
  }
}

.button-add {
  color: var(--ion-color-danger-shade) !important;
}

.text-nor {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  width: 100%;
  min-width: 1px;
}

.color-a {
  color: var(--colorapp);
}
`;
@Component({
  selector: 'app-ecommerce-follow',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})
export class EcommerceFollowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
