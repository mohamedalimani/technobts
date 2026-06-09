import { Component } from '@angular/core';

@Component({
  selector: 'app-dallage',
  templateUrl: './dallage.component.html',
  styleUrls: ['./dallage.component.css', './../speciality.css']
})
export class DallageComponent {
  dallageDir='assets/more/dallage industriel/'
  dallageImg=['2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg'];
  cosinusImg=['1.jpeg', '2.jpeg', '3.jpeg'];
  traitImg=['1.jpeg', '2.jpeg'];

  toggleText(event:MouseEvent){
    const btn=event.target as HTMLElement;
    const p= btn.previousElementSibling as HTMLElement;
    const isCollapsed= p.classList.contains('collapsed');
    p.classList.toggle('collapsed', !isCollapsed);
    p.classList.toggle('expanded', isCollapsed);
    btn.textContent=isCollapsed ? 'voir moins':'voir plus';
  }

}
