import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

import { LettersService } from '../letters/services/letters.service';
import { Clipboard } from '@angular/cdk/clipboard';



@Component({
  selector: 'app-generate-object',
  templateUrl: './generate-object.component.html',
  styleUrls: ['./generate-object.component.scss']
})
export class GenerateObjectComponent implements OnInit {

  newObject: string[] = [];
  structureObject;
  users;
  posts;
  msgCarregando = false;

  constructor(
    private lettersService: LettersService,
    private clipboard: Clipboard
  ) {}

  ngOnInit(): void {
    this.generateObject();
  }

  generateObject() {

    this.msgCarregando = true;

    const users = this.lettersService.getUser();
    const posts = this.lettersService.getPost();

    forkJoin([users, posts]).subscribe(result => {

      this.msgCarregando = false;

      this.users = result[0];
      this.posts = result[1];

      this.users.forEach(element => {

        const arrayPosts = this.posts.filter(x => x.userId === element.id);
        const infoPosts = arrayPosts.map(resp => {
          return {
            id: resp.id,
            body: resp.body,
            title: resp.title
          }
        });

        this.structureObject = {
          id: element.id,
          name: element.name,
          username: element.username,
          email: element.email,
          address: element.address.street + ',' + element.address.suite + ',' + element.address.zipcode + ' ' + element.address.city,
          phone: element.phone,
          website: element.website,
          company: element.company.name,
          posts: [...infoPosts]
        }

        this.newObject.push(this.structureObject);
      });
    })
  }

  public copy() {
    this.clipboard.copy(JSON.stringify(this.newObject, null, 2));
  }
}
