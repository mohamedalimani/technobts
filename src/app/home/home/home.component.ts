import { Component } from '@angular/core';
import { TechnoService } from '../../techno.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

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
