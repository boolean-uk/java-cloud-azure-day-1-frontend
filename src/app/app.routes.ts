import { Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { LabelComponent } from './label/label.component';
import { HomeComponent } from './home/home.component';
import { CreateAlbumComponent } from './create-album/create-album.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'albums', component: AlbumComponent },
  { path: 'artists', component: ArtistComponent },
  { path: 'labels', component: LabelComponent },
  { path: 'create-album', component: CreateAlbumComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
