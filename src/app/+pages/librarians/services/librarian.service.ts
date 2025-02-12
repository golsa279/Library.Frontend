import { Injectable } from '@angular/core';
import { CrudService } from '../../../+shared/+base/crud-service';
import { LibrarianAddRequest } from '../models/LibrarianAddRequest';
import { LibrarianEditRequest } from '../models/LibrarianEditRequest';
import { LibrarianRemoveRequest } from '../models/LibrarianRemoveRequest';

@Injectable({
  providedIn: 'root'
})
export class LibrariansService extends CrudService<LibrarianAddRequest,LibrarianEditRequest, LibrarianRemoveRequest> {
  override apiName: string='librarians';
}
