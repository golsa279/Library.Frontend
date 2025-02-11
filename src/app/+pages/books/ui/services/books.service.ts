import { Injectable } from '@angular/core';
import { BackendService } from '../../../../+shared/+services/backend.service';
import { BookAddRequest } from '../models/bookAddRequest';
import { CrudService } from '../../../../+shared/+base/crud-service';
import { BookEditRequest } from '../models/bookEditRequest';
import { BookRemoveRequest } from '../models/bookRemoveRequest';



@Injectable({
  providedIn: 'root'
})
export class BooksService extends CrudService<BookAddRequest,BookEditRequest, BookRemoveRequest> {
  override apiName: string='books';
}
