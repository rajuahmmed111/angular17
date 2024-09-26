import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTooltip],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  podcasts = [
    {
      id: '111',
      title: '1 Lorem ipsum dolor sit amet.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnOWMSmrnbEwMaYwb-QH1bJouecwQKwv6YNhif4BN2KNt0pPTkFwWMPzb3iUpnhytpgRE&usqp=CAU',
    },
    {
      id: '112',
      title: '2 Lorem ipsum dolor sit amet.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnOWMSmrnbEwMaYwb-QH1bJouecwQKwv6YNhif4BN2KNt0pPTkFwWMPzb3iUpnhytpgRE&usqp=CAU',
    },
    {
      id: '113',
      title: '3 Lorem ipsum dolor sit amet.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnOWMSmrnbEwMaYwb-QH1bJouecwQKwv6YNhif4BN2KNt0pPTkFwWMPzb3iUpnhytpgRE&usqp=CAU',
    },
    {
      id: '114',
      title: '4 Lorem ipsum dolor sit amet.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnOWMSmrnbEwMaYwb-QH1bJouecwQKwv6YNhif4BN2KNt0pPTkFwWMPzb3iUpnhytpgRE&usqp=CAU',
    },
    {
      id: '115',
      title: '5 Lorem ipsum dolor sit amet.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnOWMSmrnbEwMaYwb-QH1bJouecwQKwv6YNhif4BN2KNt0pPTkFwWMPzb3iUpnhytpgRE&usqp=CAU',
    },
    {
      id: '116',
      title: '6 Lorem ipsum dolor sit amet.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnOWMSmrnbEwMaYwb-QH1bJouecwQKwv6YNhif4BN2KNt0pPTkFwWMPzb3iUpnhytpgRE&usqp=CAU',
    },
    {
      id: '117',
      title: '7 Lorem ipsum dolor sit amet.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnOWMSmrnbEwMaYwb-QH1bJouecwQKwv6YNhif4BN2KNt0pPTkFwWMPzb3iUpnhytpgRE&usqp=CAU',
    },
    {
      id: '118',
      title: '8 Lorem ipsum dolor sit amet.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnOWMSmrnbEwMaYwb-QH1bJouecwQKwv6YNhif4BN2KNt0pPTkFwWMPzb3iUpnhytpgRE&usqp=CAU',
    },
    {
      id: '119',
      title: '9 Lorem ipsum dolor sit amet.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnOWMSmrnbEwMaYwb-QH1bJouecwQKwv6YNhif4BN2KNt0pPTkFwWMPzb3iUpnhytpgRE&usqp=CAU',
    },
    {
      id: '120',
      title: '10 Lorem ipsum dolor sit amet.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnOWMSmrnbEwMaYwb-QH1bJouecwQKwv6YNhif4BN2KNt0pPTkFwWMPzb3iUpnhytpgRE&usqp=CAU',
    },
  ];

  isCard2Visible = false;

  showCard2() {
    this.isCard2Visible = true;
  }

  hideCard2() {
    this.isCard2Visible = false;
  }
}
