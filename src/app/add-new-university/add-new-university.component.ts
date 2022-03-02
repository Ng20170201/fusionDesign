import { LocalizedString } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteCheckComponent } from '../delete-check/delete-check.component';
import { DataUniversity } from '../models/DataUniversity';
import { University } from '../models/University';
import { OkDialogComponent } from '../ok-dialog/ok-dialog.component';
import { UniversityService } from '../university/university.service';

@Component({
  selector: 'app-add-new-university',
  templateUrl: './add-new-university.component.html',
  styleUrls: ['./add-new-university.component.scss']
})
export class AddNewUniversityComponent implements OnInit {

  university: University = new University();
  changeUniversity = new University();
  decriptions: string[];
  loaded = false;


  constructor(public dialogRef: MatDialogRef<AddNewUniversityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataUniversity,
    public universityService: UniversityService, private dialog:MatDialog) { }


  ngOnInit(): void {
    this.university = this.data.university;
    this.changeUniversity = JSON.parse(JSON.stringify(this.data.university));
    this.universityService.GetDescriptions().subscribe(d => {
      this.decriptions = [];
      d.dataseries.forEach(d => {
        this.decriptions.push(d.cloudcover.toString());
      })
      this.loaded = true;
    });
  }

  onSubmit(): void {
    try{
      this.universityService.AddEditUniversity(this.changeUniversity, this.data.action)
      this.dialogRef.close();
    }
    catch(err){
      this.dialog.open(OkDialogComponent, {
        width: '400px',
        data:err
      });
    }
  }
  closePop(): void {
    if(this.universityService.sameUniversity(this.university,this.changeUniversity)){
      this.dialogRef.close();
      return;
    }
      this.universityService.closePop(this.dialogRef);
  }
}
