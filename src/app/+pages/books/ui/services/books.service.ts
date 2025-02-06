import { inject, Injectable } from '@angular/core';
import { BackendService } from '../../../../+shared/+services/backend.service';
import { BookRequest } from '../models/bookRequest';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  backend=inject(BackendService);
  add(book:BookRequest){
    return this.backend.post('api/books/add',book);
  }
  edit(id:number,book:BookRequest){
    return this.backend.put('api/books/edit/'+id,book);
  }
  remove(id:number){
    return this.backend.delete('api/books/remove'+id);
  }
  list(){
    return this.backend.post('api/books/list',{});
  }
}
