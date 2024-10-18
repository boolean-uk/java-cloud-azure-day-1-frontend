import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../services/album.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
  standalone: true,
  imports: [CommonModule], // Lägg till CommonModule i imports
})
export class AlbumComponent implements OnInit {
  albums: any[] = [];

  constructor(private albumService: AlbumService, private router: Router) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.albumService.getAlbums().subscribe((data) => {
      this.albums = data;
    });
  }

  navigateToCreate(): void {
    this.router.navigate(['/create-album']);
  }

  navigateToEdit(id: number): void {
    this.router.navigate(['/edit-album', id]);
  }
}
