import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookManagementApiService {

  constructor(private http:HttpClient) { }
  storeBook(data:any){
    return this.http.post('http://localhost:3000/books/storeBook',data)
  }
  updateBook(data:any){
    return this.http.put('http://localhost:3000/books/updateBook',data)
  }
  deleteBook(data:any){
    return this.http.post('http://localhost:3000/books/deleteBook',data)
  }
  showBookList(){
    return this.http.get('http://localhost:3000/books/getBook')
  }
}
