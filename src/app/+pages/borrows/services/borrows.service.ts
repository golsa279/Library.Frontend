import { Injectable } from '@angular/core';
import { BorrowAddRequest } from '../models/borrowAddRequest';
import { CrudService } from '../../../+shared/+base/crud-service';
import { BorrowEditRequest } from '../models/borrowEditRequest';
import { BorrowRemoveRequest } from '../models/borrowRemoveRequest';

@Injectable({
  providedIn: 'root'
})
export class BorrowsService extends CrudService<BorrowAddRequest,BorrowEditRequest, BorrowRemoveRequest> {
  override apiName: string='borrows';
}