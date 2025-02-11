import { Component, inject, OnInit } from '@angular/core';
import { CrudComponent } from '../../../+shared/+base/crud-component';
import { MemberAddRequest} from '../models/memberAddRequest';
import { MemberResponse } from '../models/memberResponse';
import { MembersService } from '../services/members.service';
import { GridComponent } from '../../../+shared/+components/grid/ui/grid.component';
import { GridColumn } from '../../../+shared/+components/grid/models/grid-column';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MemberEditRequest } from '../models/memberEditRequest';
import { MatButtonModule } from '@angular/material/button';
import { MemberDetailsComponent } from "./member-details/ui/member-details.component";

@Component({
  selector: 'app-members',
  imports: [GridComponent, MatProgressBarModule, MatButtonModule, MemberDetailsComponent],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent extends CrudComponent<MemberAddRequest,MemberEditRequest, MemberResponse, MembersService> implements OnInit {
  override service=inject(MembersService);
  columns: GridColumn[] = [
    { field: 'fullname', title: 'نام و نام خانوادگی' },
    { field: 'address', title: 'آدرس' },
    { field: 'phone', title: 'تلفن' }
  ];
  ngOnInit(): void {
    this.reload()
  }
}
