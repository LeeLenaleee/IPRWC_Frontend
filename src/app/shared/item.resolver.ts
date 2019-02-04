import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ItemService} from '../shop/item.service';
import {ItemModel} from '../models/item.model';

@Injectable()
export class ItemResolver implements Resolve<Observable<ItemModel>> {
  constructor(private itemService: ItemService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<ItemModel>> |
    Promise<Observable<ItemModel>> | Observable<ItemModel> {
    return this.itemService.getItem(route.params.id);
  }


}
