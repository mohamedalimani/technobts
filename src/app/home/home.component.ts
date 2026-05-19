import { Component, OnInit } from '@angular/core';
import { TechnoService } from '../techno.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  projects: any;
  count:number=0;
  readonly initialCount = 4;

  constructor(private ts:TechnoService){}

  ngOnInit(): void {
    this.getProjects();
    this.countProjects();
  }

  getProjects(){
        this.ts.getHomeProjects().subscribe({
      next:(res)=>{
        this.projects=res;
      },
      error:(error)=>{
        console.error(error);
      }
    })
  }

  countProjects(){
    this.ts.countProjects().subscribe({
      next:(res)=>{
        this.count=res;
      }
    })
  }

}
