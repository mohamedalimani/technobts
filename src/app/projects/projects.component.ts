import { Component, OnInit } from '@angular/core';
import { TechnoService } from '../techno.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {

  projects:any;

  constructor(private ts:TechnoService){}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
      this.ts.getProjects().subscribe({
        next:(res)=>{
          this.projects=res;
        },
        error:(error)=>{
          console.error(error);
        }
      })
  }

}
