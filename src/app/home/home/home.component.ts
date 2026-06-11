import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TechnoService } from '../../techno.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy{

  projects: any;
  count:number=0;
  readonly initialCount = 4;
  @ViewChild('stat') stat!:ElementRef;

  per:number=99;
  perCount:number=0;
  duration:number=21000;
  durationCount:number=0;
  pjt:number=23;
  pjtCount:number=0;
  interval:any;

  constructor(private ts:TechnoService){}

  ngOnInit(): void {
    this.getProjects();
    this.countProjects();
  }

  ngAfterViewInit(): void {
    this.onStat();
  }

  //call animation on reaching stat section
  onStat(){
    const observer= new IntersectionObserver(
      ([entry])=>{
        if (entry.isIntersecting){
          this.countStat();
          observer.disconnect();
        }
      },
      {threshold:0.2}
    );
    observer.observe(this.stat.nativeElement);
  }
  
  
  countStat(){
    const interval= setInterval(()=>{
      if (this.per > this.perCount) this.perCount=this.perCount+3;
      if (this.duration > this.durationCount) this.durationCount=this.durationCount+1000;
      if (this.pjt > this.pjtCount) this.pjtCount++;
      if ((this.per == this.perCount) && (this.duration == this.durationCount) && (this.pjt == this.pjtCount)) clearInterval(interval);
    }, 40)
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

  ngOnDestroy(): void {
      this.interval=null;
  }

}
