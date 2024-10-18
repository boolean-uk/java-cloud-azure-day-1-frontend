import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  private apiUrl = `${environment.apiUrl}/artists`;

  constructor(private http: HttpClient) {}

  getArtists(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getArtist(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createArtist(artist: any): Observable<any> {
    return this.http.post(this.apiUrl, artist);
  }

  updateArtist(id: number, artist: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, artist);
  }

  deleteArtist(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
