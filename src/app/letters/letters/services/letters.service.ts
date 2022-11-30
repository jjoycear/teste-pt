import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

import { Post, Users } from '../model/structure';

@Injectable({
  providedIn: 'root'
})
export class LettersService {

  private readonly url_user = 'https://jsonplaceholder.typicode.com/users';
  private readonly url_post = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  getUser() {
    return this.httpClient.get<Users[]>(this.url_user)
    .pipe(
      first(), // pega a primeira resposta e finaliza a inscrição
      delay(300),
      tap(letters => console.log(letters))
    )
  }

  getPost () {
    return this.httpClient.get<Post[]>(this.url_post)
    .pipe(
      first(), // pega a primeira resposta e finaliza a inscrição
      delay(300),
      tap(posts => console.log(posts))
    )
  }
}
