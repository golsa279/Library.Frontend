import { Injectable } from '@angular/core';
import { BorrowAddRequest } from '../models/borrowAddRequest';
import { CrudService } from '../../../+shared/+base/crud-service';
import { BorrowEditRequest } from '../models/borrowEditRequest';

@Injectable({
  providedIn: 'root'
})
export class BorrowsService extends CrudService<BorrowAddRequest,BorrowEditRequest> {
  override apiName: string='borrows';
}