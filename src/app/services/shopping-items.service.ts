import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingItemsService {

  items: string[] = [];
  isEmpty: boolean = true;
  constructor() { }

  addItem(item: string) {
    this.items.push(item);
    this.isEmpty = false;
  }

  removeItem(item: string) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
    if (this.items.length == 0) {
      this.isEmpty = true;
    }
  }

  removeAll() {
    this.items = [];
    this.isEmpty = true;
  }

  existsItem(item: string) {
    return this.items
      .map(i => i.toUpperCase().trim())
      .includes(item.toUpperCase().trim());
  }
}
