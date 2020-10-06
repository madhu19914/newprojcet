import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  baseUrl:string = "https://api.spaceXdata.com/v3/launches?limit=100";
  successurl:string ="https://api.spaceXdata.com/v3/launches?limit=100&amp;launch_success=true";
  landurl :string ="https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true";

  constructor(private http: HttpClient) { }

  get_launches(){
             return this.http.get(this.baseUrl)
  }
  get_success(){
    return this.http.get(this.successurl)
  }
  get_landurl(){
    return this.http.get(this.landurl)
  }
}
