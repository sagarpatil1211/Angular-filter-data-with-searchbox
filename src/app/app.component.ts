import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  states:any;
  searchTerm:string = "";
  filteredstates:any;

  constructor(private http:HttpClient){

  }

  ngOnInit(): void {
    this.http.get("http://awsmaster.mahamining.com/master/states/GetState").subscribe((result:any)=>{
      console.log(result.responseData);
      this.states = result.responseData;
      this.filteredstates =  this.states;
      
    })
  }

  filter(){
    this.filteredstates = this.states.filter((data:any)=>{
      if(data.state.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1){
        return data
      }
    })
  }

}
