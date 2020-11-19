import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CatsComponent} from './cats.component';
import {CatDetailsComponent} from './cat-details/cat-details.component';

const routes: Routes = [
  {
    path: '',
    component: CatsComponent
  },
  {
    path: ':id',
    component: CatDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatsRoutingModule {}

