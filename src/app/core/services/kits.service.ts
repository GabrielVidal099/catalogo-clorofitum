
import { Injectable } from '@angular/core';
import { kits } from '../models/kits.models';
import { KITS } from '../data/kits.mocks';

@Injectable({
  providedIn: 'root',
})
export class kitsService {
   getkits(): kits[] {
      return KITS;
    }
}
export type { kits };