import { Component, OnInit } from '@angular/core';
import {DbService} from './service/db.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
 
})
export class ProfileComponent implements OnInit {
  id: number;
  student: {id:number, name:string, email:string};

  constructor(private dbService: DbService, private route: ActivatedRoute) {
    
      this.route.queryParams.subscribe(params => this.id= params['id']);
   
    this.student = this.dbService.getStudent(this.id);
    console.log("Student" + this.student.id);
    console.log("id " + this.id);
   }

  ngOnInit() {  
   
  }

}
