import { Component, OnInit } from '@angular/core';
import { CrudComponent } from '../../../+shared/+base/crud-component';
import { MemberRequest } from '../models/membersRequest';
import { MemberResponse } from '../models/membersResponse';
import { MembersService } from '../services/members.service';
import { GridComponent } from '../../../+shared/+components/grid/ui/grid.component';
import { GridColumn } from '../../../+shared/+components/grid/models/grid-column';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-members',
  imports: [GridComponent, MatProgressBarModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent extends CrudComponent<MemberRequest, MemberResponse, MembersService> implements OnInit {
  constructor(service: MembersService) {
    super(service);
  }
  columns: GridColumn[] = [
    { field: 'fullname', title: 'نام و نام خانوادگی' },
    { field: 'address', title: 'آدرس' },
    { field: 'phone', title: 'تلفن' }
  ];
  ngOnInit(): void {
    this.reload()
  }
}
