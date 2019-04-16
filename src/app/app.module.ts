import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UitloggenComponent } from './inloggen-uitloggen/uitloggen/uitloggen.component';
import {AppRoutingModule} from './app-routing.module';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './inloggen-uitloggen/inloggen/auth.guard';
import {AlertService} from './inloggen-uitloggen/inloggen';
import {AuthenticationService} from './inloggen-uitloggen/inloggen';
import {ErrorInterceptor} from './inloggen-uitloggen/inloggen';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertComponent} from './inloggen-uitloggen/inloggen';
import {ItemService} from './shop/item.service';
import {MusicModule} from './admin/music.module';
import {ShopListComponent} from './shop/shop-list.component';
import { ShopItemComponent } from './shop/shop-item/shop-item.component';
import {ItemResolver} from './shared/item.resolver';
import { CartComponent } from './cart/cart.component';
import {CartService} from './cart/cart.service';
import { ConformationComponent } from './conformation/conformation.component';
import { ReloaderComponent } from './reloader/reloader.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    UitloggenComponent,
    MainMenuComponent,
    ErrorPageComponent,
    PageNotFoundComponent,
    AlertComponent,
    ShopListComponent,
    ShopItemComponent,
    CartComponent,
    ConformationComponent,
    ReloaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MusicModule,
    AppRoutingModule,

  ],
  providers: [
    AppComponent,
    AuthGuard,
    AlertService,
    AuthenticationService,
    ItemService,
    ItemResolver,
    CartService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
