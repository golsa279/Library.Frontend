import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './services/books.service';
import { Observable } from 'rxjs';
import { BookResponse } from './models/bookResponse';

@Component({
  selector: 'app-books',
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit{
  books=inject(BooksService);
  data:BookResponse[]|undefined;
  busy=false;
  ngOnInit(): void {
    this.busy=true;
    this.books.list().subscribe({
      next:res=>{
        this.busy=false;
        this.data=res as BookResponse[];
      }
    });
  }
}
