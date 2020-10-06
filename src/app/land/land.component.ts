import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class LandComponent implements OnInit {
 @Input() mission_img:string;
 @Input() mission_name:string;
 @Input() mission_id:string;
 @Input() launch_year:string;
 @Input() launch_success:string;
 @Input() land_success:string;

  constructor() { }
  
  ngOnInit(): void {
  }

}
