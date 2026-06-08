import { Injectable } from '@angular/core';
import { Line } from '../models/line.models';
import { LINES } from '../data/line.mocks';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): Line[] {
    return LINES;
  }
}

export type { Line };
