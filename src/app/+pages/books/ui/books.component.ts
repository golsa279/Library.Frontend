import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './services/books.service';
import { Observable } from 'rxjs';
import { CrudComponent } from '../../../+shared/+base/crud-component';
import { GridComponent } from '../../../+shared/+components/grid/ui/grid.component';
import { GridColumn } from '../../../+shared/+components/grid/models/grid-column';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BookEditRequest } from './models/bookEditRequest';
import { BookAddRequest } from './models/bookAddRequest';
import { BookResponse } from './models/bookResponse';
import {MatButtonModule} from '@angular/material/button';
import { BookDetailsComponent } from './book-details/ui/book-details.component';
import { BookRemoveRequest } from './models/bookRemoveRequest';

@Component({
  selector: 'app-books',
  imports: [GridComponent, MatProgressBarModule, BookDetailsComponent, MatButtonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent extends CrudComponent<BookAddRequest,BookEditRequest, BookRemoveRequest, BookResponse, BooksService> implements OnInit {
  override service=inject(BooksService);
  columns: GridColumn[] = [
    { field: 'title', title: 'عنوان' },
    { field: 'writer', title: 'نویسنده' },
    { field: 'price', title: 'قیمت' },
    {field: 'category', title:'دسته بندی'},
    {field: 'imgPath', title:'تصویر'}
  ];
  ngOnInit(): void {
    this.reload();
  }
}
