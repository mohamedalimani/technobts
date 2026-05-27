import { Component, Input } from '@angular/core';
import { TechnoService } from '../../techno.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

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
      },
      error:(error)=>{
        console.error(error);
      }
    })
  }

}
