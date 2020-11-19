import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Cat} from '../../Cat';
import {CatsService} from '../../services/cats.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.scss']
})
export class CatDetailsComponent implements OnInit {

  cat$: Observable<Cat>;
  buttonText = 'Afficher';
  showImage = true;

  constructor(private route: ActivatedRoute, private catsService: CatsService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.cat$ = this.catsService.getCat(id);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
    this.buttonText = this.showImage ? 'Cacher' : 'Afficher';
  }

}
