import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatsRoutingModule} from './cats-routing.module';
import {CatsComponent} from './cats.component';
import {CatDetailsComponent} from './cat-details/cat-details.component';


@NgModule({
  declarations: [
    CatsComponent,
    CatDetailsComponent
  ],
  imports: [
    CommonModule,
    CatsRoutingModule
  ]
})
export class CatsModule { }
