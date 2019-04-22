import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RichCommunicatorService {
  public content = new BehaviorSubject<any>(null);
  constructor() { }
}
