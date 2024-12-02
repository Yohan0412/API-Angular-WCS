import { Component, inject } from '@angular/core';
import { CocktailService } from './service/cocktail.service';
import { Cocktail } from './models/cocktail.model';
import {  RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  cocktails: Cocktail[] = [];

  private cocktailService = inject(CocktailService);

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe(cocktailsFromJsonFile => {
      this.cocktails = cocktailsFromJsonFile;
      console.log(this.cocktails)
    });

   

  }
}
