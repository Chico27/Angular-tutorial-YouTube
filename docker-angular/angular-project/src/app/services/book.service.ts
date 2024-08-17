import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks() {
    return [
      {"id": 1, "name": "はじめてのAngular入門", "author": "佐藤 太郎", "price": 2200},
      {"id": 2, "name": "Angularで学ぶウェブアプリケーション開発", "author": "山田 花子", "price": 3500},
      {"id": 3, "name": "Angular超初心者ガイド", "author": "鈴木 一郎", "price": 2400},
      {"id": 4, "name": "Angularスタートブック", "author": "高橋 由美", "price": 2100},
    ]
  }

}
