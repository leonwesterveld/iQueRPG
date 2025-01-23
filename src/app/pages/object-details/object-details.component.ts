import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObjectService, RpgObject } from '../../services/object.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-object-details',
  standalone: true,
  templateUrl: './object-details.component.html',
  styleUrls: ['./object-details.component.css'],
  imports: [NgIf],
})
export class ObjectDetailsComponent {
  object: RpgObject | undefined;

  constructor(
    private route: ActivatedRoute,
    private objectService: ObjectService,
    private router: Router
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.object = this.objectService.getObjectById(id);
  }

  goBack(): void {
    this.router.navigate(['/add-object']);
  }
}
