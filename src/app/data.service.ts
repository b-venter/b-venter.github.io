import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Article } from './datainterface';
import { ARTICLE } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getArticle(): Observable<Article[]> {
    return of(ARTICLE); /**As per import**/
  }

  constructor() { }
}
