import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../spacex.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filteredLocation = 'All';
  public spacex:any[];
  public  success:any[];
  public  land :any[];
  
 
  constructor(private service : SpacexService) {
    this.service.get_launches().subscribe((res:any[])=>{
      this.spacex=res;
    })
      this.service.get_success().subscribe((res:any[])=>{
        this.success=res;
      })
        this.service.get_landurl().subscribe((res:any[])=>{
          this.land=res;
    })
   }

  ngOnInit(): void {
         
}
 

  }

  

