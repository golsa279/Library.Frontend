import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { DetailsComponent } from '../../../../../+shared/+base/details-component';
import { MemberAddRequest } from '../../../models/memberAddRequest';
import { MemberEditRequest } from '../../../models/memberEditRequest';
import { MembersService } from '../../../services/members.service';
import { MembersComponent } from "../../members.component";


@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrl: './member-details.component.css',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
]
})
export class MemberDetailsComponent extends DetailsComponent<MemberAddRequest, MemberEditRequest, MembersService>{
  override initForm(): void {
    console.log(this.initial);
    if (this.action != 'add' && this.initial){
      this.memberForm.setValue(this.initial);
    }
  }
  override service = inject(MembersService);
  private fb = inject(FormBuilder);
  memberForm = this.fb.group({
    fullname: [null, Validators.required],
    address: [null, Validators.required],
    phone: [null, Validators.required],
  });

  button: any;
  onSubmit(): void {
    //console.log(this.action);
    this.ok(this.memberForm.value)?.subscribe(res => {
      this.onCancel.emit();
    });
  }
}
