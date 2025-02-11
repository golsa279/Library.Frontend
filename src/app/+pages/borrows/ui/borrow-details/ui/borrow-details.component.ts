import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { DetailsComponent } from '../../../../../+shared/+base/details-component';
import { BorrowAddRequest } from '../../../models/borrowAddRequest';
import { BorrowEditRequest } from '../../../models/borrowEditRequest';
import { BorrowsService } from '../../../services/borrows.service';
import { MembersComponent } from "../../../../members/ui/members.component";
import { BooksComponent } from "../../../../books/ui/books.component";


@Component({
  selector: 'app-borrow-details',
  templateUrl: './borrow-details.component.html',
  styleUrl: './borrow-details.component.css',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MembersComponent,
    BooksComponent
  ]
})
export class BorrowDetailsComponent extends DetailsComponent<BorrowAddRequest, BorrowEditRequest, BorrowsService> {
  bookSelect($event: any) {
    this.borrowForm.controls.bookId.setValue($event.id);
  }
  memberSelect($event: any) {
    this.borrowForm.controls.memberId.setValue($event.id);
  }
  override initForm(): void {
    console.log(this.initial);
    if (this.action != 'add' && this.initial) {
      this.borrowForm.setValue(this.initial);
      if(this.action=='edit'){
        this.borrowForm.controls.bookId.disable();
        this.borrowForm.controls.memberId.disable();
      }
    }
  }
  override service = inject(BorrowsService);
  private fb = inject(FormBuilder);
  borrowForm = this.fb.group({
    bookId: [null, Validators.required],
    memberId: [null, Validators.required],
  });

  button: any;
  onSubmit(): void {
    console.log("test")
    this.ok(this.borrowForm.value)?.subscribe(res => {
      this.onCancel.emit();
    });
  }
}


