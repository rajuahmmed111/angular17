import { Component, inject, OnInit } from '@angular/core';
import { CardService } from './../../services/common/card.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  data: any;

  private readonly cardService = inject(CardService);

  constructor() {}

  ngOnInit(): void {
    this.getData()
  }

  private getData() {
    this.cardService.getData().subscribe({
      next: (res) => {
        this.data = this.data
        console.log('res', this.data);
      },
      error: (err) => {
        console.log(err);
        // console.log('data is not found');
      }
    }
      
    );
  }
}
