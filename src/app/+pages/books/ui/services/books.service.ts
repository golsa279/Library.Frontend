import { inject, Injectable } from '@angular/core';
import { BackendService } from '../../../../+shared/+services/backend.service';
import { BookRequest } from '../models/bookRequest';
import { CrudService } from '../../../../+shared/+base/crud-service';

@Injectable({
  providedIn: 'root'
})
export class BooksService extends CrudService<BookRequest> {
  override apiName: string='books';
}
