import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddNewUniversityComponent } from '../add-new-university/add-new-university.component';



@Component({
  selector: 'app-close-pop',
  templateUrl: './close-pop.component.html',
  styleUrls: ['./close-pop.component.scss']
})
export class ClosePopComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ClosePopComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MatDialogRef<AddNewUniversityComponent>) { }

  ngOnInit(): void {
  }
  yes():void{
    this.data.close();
    this.dialogRef.close();
  }
  no():void{
    this.dialogRef.close();
  }
}
