import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stud-entry', 
  templateUrl: './stud-entry.component.html',
  styleUrls: ['./stud-entry.component.css']
})
export class StudEntryComponent implements OnInit {
  @Output() Entry = new EventEmitter<any>();

  studNo: number;
  studlName: string;
  studfName: string;
  program: string;
  year: number;

  entry;
  constructor() { }


  ngOnInit() {
  }

  getEntry(){
    this.entry= {studNo: this.studNo,
    studlName: this.studlName,
    studfName: this.studfName,
    program: this.program,
    year: this.year
  };

  return this.entry;

}
}
