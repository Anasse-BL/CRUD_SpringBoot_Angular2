import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {map} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class StudentService {

//  private res: any;

//private api_base: 'http://localhost:8080/api/student';

  constructor(private http:HttpClient) { }



  getStudent() {
    return this.http.get<any>('http://localhost:8080/api/student/all')
      .pipe(map((res: any) => {
        return res;
      }))
  }

  postStudent(data: any){
    return this.http.post<any>('http://localhost:8080/api/student/add', data)
    .pipe(map((res: any) => {
      return res;
    }))
  }

  deleteStudent(id: number) {
    return this.http.delete<any>('http://localhost:8080/api/student/delete' +'/' +id)
      .pipe(map((res: any) => {
        return res;
      }))

  }
  updateStudent(id:number, value:any ){

    return this.http.put<any>('http://localhost:8080/api/student/update' + '/' +id, value)
    .pipe(map((res:any) =>{
      return res ; 
    }))

  }

  getStudentById(id :number){
    return this.http.get<any>('http://localhost:8080/api/student'+'/'+id)
    .pipe(map((res:any) => {
      return res;
    }))
  }
}
