import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { DetailsComponent } from '../../../../../+shared/+base/details-component';
import { BookAddRequest } from '../../models/bookAddRequest';
import { BookEditRequest } from '../../models/bookEditRequest';
import { BooksService } from '../../services/books.service';
import { BookRemoveRequest } from '../../models/bookRemoveRequest';



@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class BookDetailsComponent extends DetailsComponent<BookAddRequest, BookEditRequest, BookRemoveRequest, BooksService>{
  override initForm(): void {
    console.log(this.initial);
    if (this.action != 'add' && this.initial){
      this.bookForm.setValue(this.initial);
    }
    if (this.action == 'remove'){
      this.bookForm.controls.title.disable();
      this.bookForm.controls.writer.disable();
      this.bookForm.controls.price.disable();
      this.bookForm.controls.category.disable();
      this.bookForm.controls.imgPath.disable();
    }
  }
  override service = inject(BooksService);
  private fb = inject(FormBuilder);
  bookForm = this.fb.group({
    title: [null, Validators.required],
    writer: [null, Validators.required],
    price: [null, Validators.required],
    category: [null, Validators.required],
    imgPath: [null, Validators.required],
  });

  button: any;
  onSubmit(): void {
    //console.log(this.action);
    this.ok(this.bookForm.value)?.subscribe(res => {
      this.onCancel.emit();
    });
  }
}
