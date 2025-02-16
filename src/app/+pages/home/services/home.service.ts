import { inject, Injectable } from '@angular/core';
import { BackendService } from '../../../+shared/+services/backend.service';
import { HomePageRequest } from '../models/homePageRequest';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
   backend = inject(BackendService);
      list(request:HomePageRequest) {
          return this.backend.post(`api/books/list`,request);
          
      }
}
