import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {ScullyRoute, ScullyRoutesService} from '@scullyio/ng-lib';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  // Toutes les routes du blog (celles du blog ont un titre)
  links$: Observable<ScullyRoute[]> = this.scullyRoutesService.available$.pipe(
    map(routes => routes.filter(route => route.title))
  );

  constructor(private scullyRoutesService: ScullyRoutesService) {}
}
