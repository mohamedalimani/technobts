import { Component, Input, OnInit } from '@angular/core';
import { TechnoService } from '../techno.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {
  
  @Input() id!: number;
  project:any;
  
  constructor(private ts:TechnoService){}

  ngOnInit(): void {
      this.getProject();
  }

  getProject(){
    this.ts.getProject(this.id).subscribe({
      next:(res)=>{
        this.project=res;
        console.log(this.project);
      },
      error:(error)=>{
        console.error(error);
      }
    })
  }

}
