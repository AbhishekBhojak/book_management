import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import {BookManagementApiService} from '../app/book-management-api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isform: boolean = false
  title:any=''
  author:any=''
  summary:any=''
  searchId:any=''
  istitle:boolean=false
  isauthor:boolean=false
  issummary:boolean=false
  selectedData:any={}
  iseditbtn: boolean=false
  bookList:any=[]
  
  constructor(private bookapi:BookManagementApiService, private toster:ToastrService){}
  ngOnInit() {
    this.getBookList()
    console.log(this.bookList);
    
  }
  addEmployee(){
    this.isform=true
    this.iseditbtn=false
  }
  clearForm(){
    this.title=''
    this.author=''
    this.summary=''
  }
  hideForm(){
    this.isform=false
    this.iseditbtn=false
    this.clearForm()
  }
  getBookList(){
    this.bookapi.showBookList().subscribe((data:any)=>{
      console.log(data);
      this.bookList=data
    })
  }
  onEditBook(data:any){
    console.log(data);
    this.selectedData=data
    this.iseditbtn=true
    this.isform=true 
    this.title=data.title
    this.author=data.author
    this.summary=data.summary   
  }
  updateBook(){
    if(this.title!='' && this.author!='' && this.summary!=''){

    var data=new FormData()
    if(this.title!=this.selectedData.title){
      data.append('title',this.title)
    }
    if(this.author!=this.selectedData.author){
      data.append('author',this.author)
    }
    if(this.summary!=this.selectedData.summary){
      data.append('summary',this.summary)
    }
    data.append('_id',this.selectedData._id)
    console.log(data);
    this.bookapi.updateBook(data).subscribe((data:any)=>{
      if(data.success){
      this.hideForm()
      this.getBookList()
      this.clearForm()
      this.toster.success(data.message);
    }
    else{
      this.toster.error(data.message);
    }
    })
  }
  }
  saveBook(){
    if(this.title!='' && this.author!='' && this.summary!=''){
    let bookData={
      title:this.title,
      author:this.author,
      summary:this.summary
    }
    this.bookapi.storeBook(bookData).subscribe((data:any)=>{
      
      if(data.success){
        this.getBookList()
        this.clearForm()
        this.hideForm()
        this.toster.success(data.message);
      }
      else{
        this.toster.error(data.message);
      }
    })
  }
  }
  deleteBook(data:any){
    console.log(data)
    var bookId=data._id
    var decision=confirm('Are you sure you want to delete user')
    if(decision==true){
      this.bookapi.deleteBook({bookid:bookId}).subscribe((data:any)=>{
        if(data.success){
          this.getBookList()
          this.toster.success(data.message);
        }
        else{
          this.getBookList()
          this.toster.error(data.message);
        }
        })
    }
  }
}
