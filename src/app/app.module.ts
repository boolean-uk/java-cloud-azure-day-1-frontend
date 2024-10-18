import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // Use provideHttpClient instead of HttpClientModule
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routes } from './app.routes'; // Import your routes
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    AppComponent,
    BrowserModule,
    CommonModule, // Lägg till CommonModule i imports
    FormsModule,
    RouterModule.forRoot(routes), // Register routes
  ],
  providers: [
    provideHttpClient(), // Provide HttpClient
  ],
})
export class AppModule {}
