import { Component, inject } from '@angular/core';
import { CrudComponent } from '../../../+shared/+base/crud-component';
import { BorrowAddRequest } from '../models/borrowAddRequest';
import { BorrowResponse } from '../models/borrowResponse';
import { BorrowsService } from '../services/borrows.service';
import { GridComponent } from "../../../+shared/+components/grid/ui/grid.component";
import { GridColumn } from '../../../+shared/+components/grid/models/grid-column';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BorrowEditRequest } from '../models/borrowEditRequest';
import { MatButtonModule } from '@angular/material/button';
import { BorrowDetailsComponent } from "./borrow-details/ui/borrow-details.component";


@Component({
  selector: 'app-borrows',
  imports: [GridComponent, MatProgressBarModule, MatButtonModule, BorrowDetailsComponent],
  templateUrl: './borrows.component.html',
  styleUrl: './borrows.component.css'
})
export class BorrowsComponent extends CrudComponent<BorrowAddRequest, BorrowEditRequest, BorrowResponse, BorrowsService> {
  override service=inject(BorrowsService);
  columns: GridColumn[] = [
    { field: 'borrowtime', title: 'تاریخ امانت',type:'date' },
    //{ field: 'bookId', title: 'شناسه کتاب' },
    { field: 'book.title', title: 'عنوان کتاب' },
    //{ field: 'memberId', title: 'شناسه عضو' },
    { field: 'member.fullname',title: 'نام عضو'}
  ];
  ngOnInit(): void {
    this.reload();
  }
}
