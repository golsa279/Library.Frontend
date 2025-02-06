import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './services/books.service';
import { Observable } from 'rxjs';
import { BookResponse } from './models/bookResponse';
import { CrudComponent } from '../../../+shared/+base/crud-component';
import { BookRequest } from './models/bookRequest';
import { GridComponent } from '../../../+shared/+components/grid/ui/grid.component';
import { GridColumn } from '../../../+shared/+components/grid/models/grid-column';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-books',
  imports: [GridComponent, MatProgressBarModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent extends CrudComponent<BookRequest, BookResponse, BooksService> implements OnInit {
  constructor(service: BooksService) {
    super(service)
  }
  columns: GridColumn[] = [
    { field: 'title', title: 'عنوان' },
    { field: 'writer', title: 'نویسنده' },
    { field: 'price', title: 'قیمت' }
  ];
  ngOnInit(): void {
    this.reload();
  }
}
