import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private isMenuEnabled = new Subject<boolean>();

  constructor() { }

  // Creating method to handle Side Menu State (Enabled or Disabeld)
  setMenuState(enabled) {
    this.isMenuEnabled.next(enabled);
  }

  // Method for get the Menu State
  getMenuState(): Subject<boolean> {
    return this.isMenuEnabled;
  }
}
