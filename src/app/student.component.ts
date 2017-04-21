import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {DbService} from './service/db.service'; 

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html'
})
export class StudentComponent implements OnInit {
 public students:{id:number, name:string, email:string}[];
  constructor(private dbService: DbService, private router: Router) {
   }

  ngOnInit() {
   this.students = this.dbService.getData();   
  }

  getProfile(id: number){
    this.router.navigate(['profile'], {queryParams: {id: id}});
  }

}
