import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import { TimeagoModule } from 'ngx-timeago';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      }
    ]),
    TimeagoModule.forRoot(),
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
