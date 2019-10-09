import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearcmodalPage } from './searcmodal.page';

const routes: Routes = [
  {
    path: '',
    component: SearcmodalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearcmodalPage],
  entryComponents: [SearcmodalPage]
})
export class SearcmodalPageModule {}
