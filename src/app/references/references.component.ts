import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.css'
})
export class ReferencesComponent implements OnInit {

  readonly logos: string[]=[
    'assets/references/acer.png',
    'assets/references/aerosfax.png',
    'assets/references/altrad.png',
    'assets/references/astral.png',
    'assets/references/aviationoffice.jpg',
    'assets/references/aziza.png',
    'assets/references/azurcity.jpg',
    'assets/references/bic.png',
    'assets/references/decathlon.png',
    'assets/references/delice.jpg',
    'assets/references/ect.png',
    'assets/references/galpharma.png',
    'assets/references/geant.png',
    'assets/references/gias.jpg',
    'assets/references/goldina.jpg',
    'assets/references/kmc.png',
    'assets/references/kromberg.jpg',
    'assets/references/leoni.jpg',
    'assets/references/lycee.jpg',
    'assets/references/mazda.jpg',
    'assets/references/misfat.jpg',
    'assets/references/mobitecno.png',
    'assets/references/moulindor.png',
    'assets/references/multiflex.png',
    'assets/references/oetker.png',
    'assets/references/pole.jpg',
    'assets/references/renault.jpg',
    'assets/references/roseblanche.png',
    'assets/references/sebntn.png',
    'assets/references/sfaxmall.jpg',
    'assets/references/sika.png',
    'assets/references/sitpec.png',
    'assets/references/sobig.png',
    'assets/references/sotuchoc.png',
    'assets/references/stelia.png',
    'assets/references/sumitomo.jpg',
    'assets/references/supercable.jpg',
    'assets/references/tav.png',
    'assets/references/rosenberger.jpg'
  ]

  rowA: string[] = [];
  rowB: string[] = [];
  tripleA: string[] = [];
  tripleB: string[] = [];
 
  ngOnInit(): void {
    const mid = Math.ceil(this.logos.length / 2);
    this.rowA = this.logos.slice(0, mid);   // first 19
    this.rowB = this.logos.slice(mid);      // last 19
 
    // Triple each row so the seamless loop works at any viewport width
    this.tripleA = [...this.rowA, ...this.rowA, ...this.rowA];
    this.tripleB = [...this.rowB, ...this.rowB, ...this.rowB];
  }

}
