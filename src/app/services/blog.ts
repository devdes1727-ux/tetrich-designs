import { Injectable } from '@angular/core';

import {
  Firestore,
  collection,
  addDoc,
  collectionData
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  constructor(
    private firestore: Firestore
  ) {}

  async addBlog(blogData: any) {

    const blogRef = collection(
      this.firestore,
      'blogs'
    );

    return addDoc(blogRef, blogData);

  }

   getBlogs() {

    const blogRef = collection(
      this.firestore,
      'blogs'
    );

    return collectionData(
      blogRef,
      { idField: 'id' }
    );

  }

}