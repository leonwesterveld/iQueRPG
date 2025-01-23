import { Component } from '@angular/core';
import { ObjectService, RpgObject } from '../../services/object.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-object',
  standalone: true,
  templateUrl: './add-object.component.html',
  styleUrls: ['./add-object.component.css'],
  imports: [NgFor, FormsModule, RouterModule],
})

export class AddObjectComponent {
  name = '';
  type = 'Zwaard';
  value = 0;
  objects: RpgObject[] = [];

  constructor(private objectService: ObjectService, private router: Router) {
    this.objects = this.objectService.getObjects();
  }

  addObject(): void {
    if (!this.name) {
      return;
    }
    this.objectService.addObject({ name: this.name, type: this.type, value: this.value });
    this.name = '';
    this.type = 'Zwaard';
    this.value = 0;
    this.objects = this.objectService.getObjects();
  }
}
