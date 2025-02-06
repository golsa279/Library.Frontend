import { Component } from '@angular/core';
import { CrudComponent } from '../../../+shared/+base/crud-component';
import { BorrowRequest } from '../models/borrowRequest';
import { BorrowResponse } from '../models/borrowResponse';
import { BorrowsService } from '../services/borrows.service';
import { GridComponent } from "../../../+shared/+components/grid/ui/grid.component";
import { GridColumn } from '../../../+shared/+components/grid/models/grid-column';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-borrows',
  imports: [GridComponent, MatProgressBarModule],
  templateUrl: './borrows.component.html',
  styleUrl: './borrows.component.css'
})
export class BorrowsComponent extends CrudComponent<BorrowRequest, BorrowResponse, BorrowsService> {
  constructor(s: BorrowsService) {
    super(s);
  }
  columns: GridColumn[] = [
    { field: 'bookId', title: 'شناسه کتاب' },
    { field: 'memberId', title: 'شناسه عضو' }
  ];
  ngOnInit(): void {
    this.reload();
  }
}
