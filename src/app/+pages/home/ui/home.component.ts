import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { GridComponent } from '../../../+shared/+components/grid/ui/grid.component';
import { GridColumn } from '../../../+shared/+components/grid/models/grid-column';
import { BooksService } from '../../books/ui/services/books.service';
import { BookResponse } from '../../books/ui/models/bookResponse';
import { BookRemoveRequest } from '../../books/ui/models/bookRemoveRequest';
import { BookEditRequest } from '../../books/ui/models/bookEditRequest';
import { BookAddRequest } from '../../books/ui/models/bookAddRequest';
import { CrudComponent } from '../../../+shared/+base/crud-component';
import { HomeRequest } from '../models/homeRequest';
import { HomeResponse } from '../models/homeResponse';
import { HomeService } from '../services/home.service';
import { HomePageRequest } from '../models/homePageRequest';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-home',
  imports: [FormsModule, MatButton, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatMenuModule, MatProgressBarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  router = inject(Router);
  books = inject(HomeService);
  page = 0;
  size = 5;
  keyword: string = '';
  Manager() {
    this.router.navigateByUrl('/login-admins');
  }
  Librarian() {
    this.router.navigateByUrl('/login-workers');
  }
  data: HomeResponse[] | undefined;
  busy = false;
  ngOnInit(request: HomePageRequest = { page: 0, size: 5, keyword: '' }): void {
    this.busy = true;
    this.books.list(request).subscribe({
      next: res => {
        this.busy = false;
        this.data = res as HomeResponse[];
      }
    });
  }
  next() {
    this.page++;
    this.reload();
  }
  prev() {
    this.page--;
    this.reload();
  }
  pageChange() {
    this.page = 0;
    this.reload();
  }
  keywordChange() {
    this.page = 0;
    this.reload();
  }
  reload() {
    const request: HomePageRequest = {
      size: this.size,
      page: this.page,
      keyword: this.keyword
    }
    this.ngOnInit(request)
  }
}