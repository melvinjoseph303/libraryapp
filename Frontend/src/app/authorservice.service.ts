import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  item= {
    name:'',
    age:'',
    type:'',
    image:''}
  constructor( private http:HttpClient) { }
  getAuthor(id:any){
    //return this.http.get("http://localhost:3000/"+id);
    return this.http.get("http://localhost:3000/authors/"+id);
  }
  getAuthors(){
    return this.http.get("http://localhost:3000/authors");
  }

  newAuthor(item:any)
  {   
    return this.http.post("http://localhost:3000/insertauthor",{"author":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteAuthor(id:any)
  {

    return this.http.delete("http://localhost:3000/removeauthor/"+id)

  }
  editAuthor(author:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/updateauthor",author)
    .subscribe(data =>{console.log(data)})
  }
}
