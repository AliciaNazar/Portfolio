import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  valorSignal = signal(0);
}
