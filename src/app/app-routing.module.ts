import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {LoginComponent} from './login/login.component';
import {MusicResolver} from './admin/music.resolver';
import {ShopListComponent} from './shop/shop-list.component';
import {CartComponent} from './cart/cart.component';
import {ConformationComponent} from './conformation/conformation.component';
import {ReloaderComponent} from './reloader/reloader.component';

const appRoutes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: 'cart', component: CartComponent},
  { path: 'shop', component: ShopListComponent},
  {path: 'conformation', component: ConformationComponent},
  {path: 'reload', component: ReloaderComponent},
  { path: '**', redirectTo: '/not-found' }
];


@NgModule({
  // imports: [RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload' })],
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule],
  providers: [MusicResolver]
})
export class AppRoutingModule {

}
