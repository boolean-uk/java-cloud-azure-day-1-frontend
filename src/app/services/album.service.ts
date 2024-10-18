import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private apiUrl = `${environment.apiUrl}/albums`;

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getAlbum(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createAlbum(album: any): Observable<any> {
    return this.http.post(this.apiUrl, album);
  }

  updateAlbum(id: number, album: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, album);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
