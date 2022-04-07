import { Component } from '@angular/core';
import { StudentService } from './services/student.service';
import { Student } from './student';
import {FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";
import {identity} from "rxjs";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Myapi';
  private res: any;
  students?:Student[];
  studentobj : Student = new Student();
  myForm!: FormGroup   ;
  constructor(private formbuilder:FormBuilder, private method:StudentService) { }

  ngOnInit(): void {

    this.myForm = this.formbuilder.group({
      name: [''],
      email: [''],
      dob:[''],
      age: [''],
  

    });
    this.getAllStudents()
  }


getAllStudents(){
  this.method.getStudent()
  .subscribe((res:any)=>{
    this.students = res;
  });
}


post(){
 
  this.studentobj.name = this.myForm.value.name;
  this.studentobj.email = this.myForm.value.email;
  this.studentobj.dob = this.myForm.value.dob;
  this.studentobj.age = this.myForm.value.age;
  this.method.postStudent(this.studentobj)
    .subscribe((res:any)=>{console.log(res);
      alert('Student Created Successfully ')
      let ref = document.getElementById('fermer')
      ref!.click();
      this.myForm.reset();
      this.getAllStudents();

    },
     (err:any) =>{ alert('Errors') }
     )
}


delete(row : any){
  this.method.deleteStudent(row)
    .subscribe((res:any)=> {
      alert('Student Deleted');
      this.getAllStudents();
    })

}

update(data:any){

 console.log('Updating')

// this.studentobj.name = this.myForm.value.name;
 //this.studentobj.email = this.myForm.value.email;
// this.studentobj.dob = this.myForm.value.dob;
// this.studentobj.age = this.myForm.value.age;
 ///this.method.postStudent(this.studentobj)
 ///  .subscribe((res:any)=>{console.log(res);
   //  alert('Student Created Successfully ')
 //    let ref = document.getElementById('fermer')
 //    ref!.click();
    // this.myForm.reset();
 //    this.getAllStudents();

//   },
 //   (err:any) =>{ alert('Errors') }
 //   )
//}

}
}