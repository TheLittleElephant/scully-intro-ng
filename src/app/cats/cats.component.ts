import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Cat} from '../Cat';
import {CatsService} from '../services/cats.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent {

  cats$: Observable<Cat[]> = this.catsService.getCats();

  constructor(private catsService: CatsService) { }

}
