import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit, OnDestroy{
  recipes : Recipe[];
  subscription : Subscription;
  constructor(private recipesService: RecipeService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.subscription = this.recipesService.recipesChanged.subscribe((recipes:Recipe[])=>{
      this.recipes = recipes;
    });

    this.recipes = this.recipesService.getRecipes();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }
}
