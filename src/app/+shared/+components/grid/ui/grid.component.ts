import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { GridColumn } from '../models/grid-column';
import { MatButton } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { GridRequest } from '../models/grid-request';
import { PersianDatePipe } from '../../../+pipes/persian-date.pipe';
import { ExtractDataPipe } from '../../../+pipes/extract-data.pipe';
import { CrudService } from '../../../+base/crud-service';
import { Observable } from 'rxjs';
PersianDatePipe

@Component({
  selector: 'app-grid',
  imports: [ExtractDataPipe, PersianDatePipe, FormsModule, MatButton, MatSelectModule, MatInputModule, MatFormFieldModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent<TAddRequest,TEditRequest,TService> extends CrudService<TAddRequest,TEditRequest> {

  @Input() data: any[] | undefined;
  @Input() columns: GridColumn[] | undefined;
  @Input() selectable: boolean = false;
  @Input() editTitle = 'ویرایش'
  @Output() onEdit = new EventEmitter<any>();
  @Output() onRemove = new EventEmitter<any>();
  @Output() refresh = new EventEmitter<GridRequest>;
  @Output() select = new EventEmitter<any>;
  service:TService|undefined;
  @Input() id: number = 0;
  current:any={};
  page = 0;
  size = 5;
  keyword: string = '';
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
    const request: GridRequest = {
      size: this.size,
      page: this.page,
      keyword: this.keyword
    }
    this.refresh.emit(request);
  }
  /*delete(){
    return this.service?.remove(this.id);
  }
  */
}
