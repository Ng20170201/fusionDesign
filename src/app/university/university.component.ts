import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewUniversityComponent } from '../add-new-university/add-new-university.component';
import { University, universityList } from '../models/University';
import { UniversityService } from './university.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss']
})
export class UniversityComponent implements OnInit {
  universities:University[];
  constructor(private dialog:MatDialog,public universityService:UniversityService) { }
  ngOnInit(): void {
   
  }
  AddUniversity():void{
    this.dialog.open(AddNewUniversityComponent, {
      height: '500px',
      width: '800px',
      data:{university:{image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvGEH8NRyLvs04jLQU7OObBBpZ_c7bw7TbbQ&usqp=CAU"},action:"add"}
    });

  }
  edit(university:University){
    this.dialog.open(AddNewUniversityComponent, {
      height: '500px',
      width: '800px',
      data: { university: university, action: "edit" }
    });
  }
  delete(university:University){
    this.universityService.delete(university);
  }
}
