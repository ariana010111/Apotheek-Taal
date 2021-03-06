import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit {
  categories = [
    {
      id: '1',
      name: 'Angular Tutorial',
      description: 'Angular Full Course Step by Step',
      imgUrl: '',
      isFavorite: false,
    },
    {
      id: '2',
      name: 'HTML/Css Tutorial',
      description: 'Html & Css Full Course Step by Step',
      imgUrl: '',
      isFavorite: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
