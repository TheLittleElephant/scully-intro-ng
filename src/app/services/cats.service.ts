import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cat} from '../Cat';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(private httpClient: HttpClient) { }

  getCats(): Observable<Cat[]> {
    return this.httpClient.get<Cat[]>('https://my-json-server.typicode.com/TheLittleElephant/scully-intro/cats');
  }

  getCat(id: number): Observable<Cat> {
    return this.httpClient.get<Cat>(`https://my-json-server.typicode.com/TheLittleElephant/scully-intro/cats/${id}`);
  }
}
