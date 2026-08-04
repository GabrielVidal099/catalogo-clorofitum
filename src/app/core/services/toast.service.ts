import { Injectable, signal } from '@angular/core';

export interface Toast {
  id: number;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastsSignal = signal<Toast[]>([]);

  get toasts() {
    return this.toastsSignal.asReadonly();
  }

  trigger(message: string, duration = 1500) {
    const id = Date.now();
    this.toastsSignal.update(current => [...current, { id, message }]);

    setTimeout(() => {
      this.toastsSignal.update(current => current.filter(t => t.id !== id));
    }, duration);
  }
}