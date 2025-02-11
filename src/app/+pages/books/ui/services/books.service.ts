import { Injectable } from '@angular/core';
import { BackendService } from '../../../../+shared/+services/backend.service';
import { BookAddRequest } from '../models/bookAddRequest';
import { CrudService } from '../../../../+shared/+base/crud-service';
import { BookEditRequest } from '../models/bookEditRequest';



@Injectable({
  providedIn: 'root'
})
export class BooksService extends CrudService<BookAddRequest,BookEditRequest> {
  override apiName: string='books';
}
