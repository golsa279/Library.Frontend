import { Component, inject, OnInit } from '@angular/core';
import { CrudComponent } from '../../../+shared/+base/crud-component';
import { GridColumn } from '../../../+shared/+components/grid/models/grid-column';
import { LibrariansService } from '../services/librarian.service';
import { LibrarianDetailsComponent } from './librarian-details/librarian-details/librarian-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { GridComponent } from '../../../+shared/+components/grid/ui/grid.component';
import { LibrarianAddRequest } from '../models/LibrarianAddRequest';
import { LibrarianEditRequest } from '../models/LibrarianEditRequest';
import { LibrarianRemoveRequest } from '../models/LibrarianRemoveRequest';
import { librarianResponse } from '../models/LibrarianResponse';

@Component({
  selector: 'app-librarians',
  imports: [GridComponent, MatProgressBarModule, MatButtonModule, LibrarianDetailsComponent],
  templateUrl: './librarians.component.html',
  styleUrl: './librarians.component.css'
})
export class LibrariansComponent extends CrudComponent<LibrarianAddRequest,LibrarianEditRequest, LibrarianRemoveRequest, librarianResponse, LibrariansService> implements OnInit {
  override service=inject(LibrariansService);
  columns: GridColumn[] = [
    { field: 'fullname', title: 'نام و نام خانوادگی' },
    { field: 'address', title: 'آدرس' },
    { field: 'phone', title: 'تلفن' },
    { field: 'salary', title: 'حقوق'}
  ];
  ngOnInit(): void {
    this.reload()
  }
}