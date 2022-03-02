import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataUniversity } from '../models/DataUniversity';
import { University } from '../models/University';
import { UniversityService } from '../university/university.service';

@Component({
  selector: 'app-delete-check',
  templateUrl: './delete-check.component.html',
  styleUrls: ['./delete-check.component.scss']
})
export class DeleteCheckComponent implements OnInit {
  university:University;
  constructor(public dialogRef: MatDialogRef<DeleteCheckComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataUniversity, private universityService:UniversityService) { }

  ngOnInit(): void {
    this.university=this.data.university;
  }
  yes():void{
    if(this.data.action=="delete"){
    this.universityService.deleteUniversity(this.university);
    }
    if(this.data.action=="edit"){
      this.universityService.editUniversity(this.university);
    }
    
    this.dialogRef.close();
  }
  no():void{
    this.dialogRef.close();
  }
}
