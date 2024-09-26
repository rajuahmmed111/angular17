import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-my-review',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './my-review.component.html',
  styleUrl: './my-review.component.scss',
})
export class MyReviewComponent {
  activeButton: string = 'products';
  activeContent: string = 'products';

  showContent(content: string) {
    this.activeButton = content;
    this.activeContent = content;
  }

  iconArray = Array(5);
}
