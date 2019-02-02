import { Injectable } from '@angular/core';

import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {ItemModel} from '../models/item.model';
import {MusicService} from './music.service';

@Injectable()
export class MusicResolver implements Resolve<Observable<ItemModel>> {
  constructor(private musicService: MusicService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<ItemModel>> |
    Promise<Observable<ItemModel>> | Observable<ItemModel> {
    return this.musicService.getOnkost(route.params.id);
  }


}
