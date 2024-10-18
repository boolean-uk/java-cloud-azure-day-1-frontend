import { Injectable } from '@angular/core';
import { environment } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LabelService {
  private apiUrl = `${environment.apiUrl}/labels`;

  constructor(private http: HttpClient) {}

  getLabels(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getLabel(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createLabel(label: any): Observable<any> {
    return this.http.post(this.apiUrl, label);
  }

  updateLabel(id: number, label: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, label);
  }

  deleteLabel(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
