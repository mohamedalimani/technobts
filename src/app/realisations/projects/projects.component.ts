import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TechnoService } from '../../techno.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

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
