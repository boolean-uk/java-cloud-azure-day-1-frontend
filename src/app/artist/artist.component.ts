import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../services/artist.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
  standalone: true,
  imports: [CommonModule], // Lägg till CommonModule i imports
})
export class ArtistComponent implements OnInit {
  artists: any[] = [];

  constructor(private artistService: ArtistService) {}

  ngOnInit(): void {
    this.loadArtists();
  }

  loadArtists(): void {
    this.artistService.getArtists().subscribe((data) => {
      this.artists = data;
    });
  }
}
