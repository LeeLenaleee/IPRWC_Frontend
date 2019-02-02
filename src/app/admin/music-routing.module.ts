import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MusicComponent} from './music.component';
import {MusicDetailComponent} from './music-detail/music-detail.component';
import {MusicToevoegenComponent} from './music-toevoegen/music-toevoegen.component';
import {MusicResolver} from './music.resolver';
import {AdminAuthGuard} from './admin.auth.guard';

const musicRoutes: Routes = [
  { path: 'admin', component: MusicComponent, canActivate: [AdminAuthGuard], children: [
      { path: '', component: MusicToevoegenComponent },
      { path: ':id', component: MusicDetailComponent,
        resolve: { music: MusicResolver }},
    ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(musicRoutes)
  ],
  exports: [RouterModule]
})
export class MusicRoutingModule {}
