import { Injectable } from '@angular/core';

export interface RpgObject {
  id: number;
  name: string;
  type: string;
  value: number;
}

@Injectable({
  providedIn: 'root',
})
export class ObjectService {
  private objects: RpgObject[] = [];
  private nextId = 1;

  getObjects(): RpgObject[] {
    return this.objects;
  }

  addObject(object: { name: string; type: string; value: number }): void {
    this.objects.push({ id: this.nextId++, ...object });
  }

  getObjectById(id: number): RpgObject | undefined {
    return this.objects.find(obj => obj.id === id);
  }
}
