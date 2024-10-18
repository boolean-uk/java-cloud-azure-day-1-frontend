import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LabelService } from '../services/label.service';

@Component({
  selector: 'app-label',
  standalone: true,
  templateUrl: './label.component.html',
  styleUrl: './label.component.css',
  imports: [CommonModule], // Lägg till CommonModule i imports
})
export class LabelComponent {
  labels: any[] = [];

  constructor(private labelService: LabelService) {}

  ngOnInit(): void {
    this.loadLabels();
  }

  loadLabels(): void {
    this.labelService.getLabels().subscribe((data) => {
      this.labels = data;
    });
  }
}
