import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private dataStorage:DataStorageService) {}

  onSaveData(){
    this.dataStorage.storeRecipes();
  }

  onFetchData(){
    this.dataStorage.fetchRecipes();
  }
}
