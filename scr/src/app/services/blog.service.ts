import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private posts = [
    { id: 1, title: 'Primeiro Post', description: 'Introdução ao Angular Blog', content: 'Conteúdo completo do primeiro post.' },
    { id: 2, title: 'Segundo Post', description: 'Avançando com Angular', content: 'Conteúdo completo do segundo post.' }
  ];

  getPosts() {
    return this.posts;
  }

  getPostById(id: number) {
    return this.posts.find(p => p.id === id);
  }
}
