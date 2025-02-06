import { Injectable } from '@angular/core';
import { BorrowRequest } from '../models/borrowRequest';
import { CrudService } from '../../../+shared/+base/crud-service';

@Injectable({
  providedIn: 'root'
})
export class BorrowsService extends CrudService<BorrowRequest> {
  override apiName: string='borrows';
}