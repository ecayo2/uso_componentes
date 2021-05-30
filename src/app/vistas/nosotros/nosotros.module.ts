import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NosotrosPageRoutingModule } from './nosotros-routing.module';
import { ComponentsModule } from '../../components/components.module';

import { NosotrosPage } from './nosotros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NosotrosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NosotrosPage]
})
export class NosotrosPageModule {}
