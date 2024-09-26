import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-my-service',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule],
  templateUrl: './my-service.component.html',
  styleUrl: './my-service.component.scss',
})
export class MyServiceComponent {}
