import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
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
