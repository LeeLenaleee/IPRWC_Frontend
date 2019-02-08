import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {ItemModel} from '../models/item.model';

@Injectable()
export class ItemService {
  itemEmitter = new EventEmitter<ItemModel[]>();
  headers = this.createHeaders();
  apiBase = 'http://192.168.1.26:8080/api/';

  constructor(private httpClient: HttpClient) {
  }

  createHeaders(): HttpHeaders {
    return new HttpHeaders(
      {
        'Authorization': 'basic ' + btoa(sessionStorage.getItem('email') + ':' + sessionStorage.getItem('password'))
      });
  }

  getItems() {
    this.httpClient.get<ItemModel[]>(this.apiBase + 'music/', {headers: this.headers})
      .subscribe(
        (item: ItemModel[]) => {
          this.itemEmitter.emit(item);
        }
      );
  }

  getItem(index: number) {
    return this.httpClient.get<ItemModel>(this.apiBase + 'music/' + index, {
      headers: this.headers
    });
  }

  postItem(item: ItemModel) {
    return this.httpClient.post<ItemModel>(this.apiBase + 'music/', item, {
      headers: this.headers
    });
  }

  deleteItem(id: number) {
    return this.httpClient.delete<ItemModel>(this.apiBase + 'music/' + id, {
      headers: this.headers
    });
  }

  putItem(item: ItemModel, id: number) {
    return this.httpClient.put<ItemModel>(this.apiBase + 'music/' + id, item, {
      headers: this.headers
    });
  }

  formToItem(form: NgForm) {
    const item = new ItemModel(null, form.value['prijs'], form.value['album'], form.value['producent'],
      form.value['zanger'], form.value['lengte'], form.value['cover']);
    return item;
  }

  getRandom() {
    return this.httpClient.get(this.apiBase + 'music/random');
  }
}
