import {EventEmitter, Injectable} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {Observable} from 'rxjs';
import {ItemModel} from '../models/item.model';
import {ApiService} from '../shared/api.service';

@Injectable()
export class MusicService {

  onkostenEmitter = new EventEmitter<ItemModel[]>();
  onkostenSelected = new EventEmitter<ItemModel>();

  constructor(private apiService: ApiService) {}

  getOnkosten() {
    this.apiService.get<ItemModel[]>('/music').subscribe(
      (music: ItemModel[]) => {
        this.onkostenEmitter.emit(music);
      }
    );
  }

  getOnkost(index: number) {
    return this.apiService.getById<ItemModel>('/music', index);
  }

  getOnkostenByOmschrijving(omschrijving: string) {
    return this.apiService.get<ItemModel[]>('/music/zoek?omschrijving=' + omschrijving);
  }

  formToOnkost(form: NgForm) {
    const music = new ItemModel(null, form.value['prijs'], form.value['album'], form.value['producent'],
      form.value['zanger'], form.value['lengte'], form.value['cover']);
    return music;
  }

  postOnkost(music: ItemModel) {
    return this.apiService.post<ItemModel>('/music', music);
  }

  putOnkost(music: ItemModel, id: number) {
    return this.apiService.put<ItemModel>('/music', id, music);
  }

  deleteOnkost(id: number) {
    return this.apiService.delete<ItemModel>('/music', id);
  }

  toServerDateTransform(date) {
    const dateSendingToServer = new DatePipe('en-US').transform(date, 'dd-MM-yyyy');
    return dateSendingToServer;
  }

  getKostenPosten(): Observable<ItemModel[]> {
    return this.apiService.get<ItemModel[]>('/music');
  }
}
