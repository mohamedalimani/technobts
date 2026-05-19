import { Component } from '@angular/core';

@Component({
  selector: 'app-beton',
  standalone: true,
  imports: [],
  templateUrl: './beton.component.html',
  styleUrl: './beton.component.css'
})
export class BetonComponent {
  desactDir='assets/more/bétons décoratifs/beton désactivé/';
  estampDir='assets/more/bétons décoratifs/beton estampé/';
  desactImg=['2.jpg', '3.jpg'];
  estampImg=['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', 
    '7.jpeg', '8.jpeg', '9.jpeg', '10.jpeg', '11.jpeg', 
    '12.jpeg', '13.jpeg', '14.jpeg', '15.jpeg', '16.jpeg',
    '17.jpeg', '18.jpeg', '19.jpeg', '20.jpeg'];
}
