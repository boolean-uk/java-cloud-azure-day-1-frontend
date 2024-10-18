import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LabelService } from '../services/label.service';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class CreateAlbumComponent implements OnInit {
  newAlbum: any = {
    title: '',
    year: '',
    genre: '',
    numberOfTracks: 0,
    label: 0,
    artists: [],
  };
  newArtistId: number | null = null;
  newArtist: any = { firstName: '', lastName: '' };
  newLabel: any = { name: '', location: '' };
  labels: any[] = [];
  artists: any[] = [];

  constructor(
    private albumService: AlbumService,
    private labelService: LabelService,
    private artistService: ArtistService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadLabels();
    this.loadArtists();
  }

  loadLabels(): void {
    this.labelService.getLabels().subscribe((data) => {
      this.labels = data;
    });
  }

  loadArtists(): void {
    this.artistService.getArtists().subscribe((data) => {
      this.artists = data;
    });
  }

  openModal(elementId: string): void {
    const modal = document.getElementById(elementId);
    this.newArtist = { firstName: '', lastName: '' }; // Reset the form
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeModal(elementId: string): void {
    const modal = document.getElementById(elementId);
    if (modal) {
      modal.style.display = 'none';
    }
  }

  saveNewArtist(): void {
    this.artistService.createArtist(this.newArtist).subscribe((artist) => {
      this.artists.push(artist);
      this.newArtistId = artist.id;
      this.closeModal('addArtistModal');
    });
  }

  saveNewLabel(): void {
    this.labelService.createLabel(this.newLabel).subscribe((label) => {
      this.labels.push(label);
      this.newAlbum.label = label.id;
      this.newLabel = { name: '', location: '' }; // Nollställ värdena
      this.closeModal('addLabelModal');
    });
  }

  isFormValid(): boolean {
    if (!this.newAlbum.title) {
      alert('Please enter a title.');
      return false;
    }
    if (!this.newAlbum.year) {
      alert('Please enter a year.');
      return false;
    }
    if (!this.newAlbum.genre) {
      alert('Please enter a genre.');
      return false;
    }
    if (
      this.newAlbum.numberOfTracks === null ||
      this.newAlbum.numberOfTracks === undefined
    ) {
      alert('Please enter the number of tracks.');
      return false;
    }
    if (!this.newAlbum.label) {
      alert('Please select a label.');
      return false;
    }
    if (this.newAlbum.artists.length === 0) {
      alert('Please add at least one artist.');
      return false;
    }
    return true;
  }

  addAlbum(): void {
    if (!this.isFormValid()) {
      return;
    }

    this.albumService.createAlbum(this.newAlbum).subscribe((album) => {
      this.router.navigate(['/albums']);
    });
  }

  addArtist(): void {
    if (this.newArtistId !== null) {
      const artistExists = this.newAlbum.artists.some(
        (artist: any) => artist.id === this.newArtistId
      );
      if (!artistExists) {
        this.newAlbum.artists.push({ id: this.newArtistId });
      }
      this.newArtistId = null;
    }
  }

  removeArtist(artistId: number): void {
    this.newAlbum.artists = this.newAlbum.artists.filter(
      (artist: any) => artist.id !== artistId
    );
  }

  getArtistName(artistId: number): string {
    const artist = this.artists.find((a) => a.id === artistId);
    return artist ? `${artist.firstName} ${artist.lastName}` : 'Unknown Artist';
  }
}
