import { Component, inject } from '@angular/core';
import { DetailsComponent } from '../../../../../+shared/+base/details-component';
import { LibrariansService } from '../../../services/librarian.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LibrarianRemoveRequest } from '../../../models/LibrarianRemoveRequest';
import { LibrarianEditRequest } from '../../../models/LibrarianEditRequest';
import { LibrarianAddRequest } from '../../../models/LibrarianAddRequest';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-librarian-details',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  templateUrl: './librarian-details.component.html',
  styleUrl: './librarian-details.component.css'
})
export class LibrarianDetailsComponent extends DetailsComponent<LibrarianAddRequest, LibrarianEditRequest, LibrarianRemoveRequest, LibrariansService> {
  override initForm(): void {
    console.log(this.initial);
    if (this.action != 'add' && this.initial) {
      this.librarianForm.setValue(this.initial);
    }
    if (this.action == 'remove') {
      this.librarianForm.controls.fullname.disable();
      this.librarianForm.controls.address.disable();
      this.librarianForm.controls.phone.disable();
    }
  }
  override service = inject(LibrariansService);
  private fb = inject(FormBuilder);
  librarianForm = this.fb.group({
    fullname: [null, Validators.required],
    address: [null, Validators.required],
    phone: [null, Validators.required],
    salary: [null, Validators.required],
  });

  button: any;
  onSubmit(): void {
    //console.log(this.action);
    this.ok(this.librarianForm.value)?.subscribe(res => {
      this.onCancel.emit();
    });
  }
}

