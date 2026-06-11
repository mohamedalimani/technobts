import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser' ;
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

  isSent:boolean=localStorage.getItem('sent') == '1' ? true:false;

  constructor(private formBuilder:FormBuilder){}

  contactForm:FormGroup=this.formBuilder.group({
    prenom:['',[Validators.required]],
    nom:['',[Validators.required]],
    tel:['', [Validators.required, Validators.min(8)]],
    email:['',[Validators.required, Validators.email]],
    sujet:['', [Validators.required, Validators.max(30)]],
    message:['', [Validators.required, Validators.min(10)]]
  })

  ngOnInit(){
      this.resetForm();
  }

  get prenom(){
    return this.contactForm.get('prenom');
  }

  get nom(){
    return this.contactForm.get('nom');
  }

  get tel(){
    return this.contactForm.get('tel');
  }

  get email(){
    return this.contactForm.get('email');
  }

  get sujet(){
    return this.contactForm.get('sujet');
  }

  get message(){
    return this.contactForm.get('message');
  }

  async sendEmail(event:Event){
    event?.preventDefault();
    if (this.contactForm.invalid) return;
    if (this.isSent){
      alert('Une demande a déjà été envoyée à notre équipe via ce formulaire. Veuillez nous contacter en utilisant les coordonnées mentionnées sur cette page. Merci.')
      return;
    }
    try{
      await emailjs.send(
        environment.EMAILJS_SERVICE_ID, environment.EMAILJS_TEMPLATE_ID, this.contactForm.value, environment.EMAILJS_PUBLIC_KEY
      )
      alert('Courriel envoyé avec succès');
      this.contactForm.reset();
      const sentAt = new Date();
      localStorage.setItem('sent', '1');
      localStorage.setItem('sentAt', new Date().toISOString());
      this.isSent=true;
      this.startCountdown(sentAt, 3 * 24 * 60 * 60 * 1000);
    }
    catch(error){
      console.error('EmailJs Error', error);
      alert("Échec de l'envoi de l'e-mail. Consultez la console pour plus de détails.");
    }
  }

  timeLeft: string = '';
  private countdownInterval: any;

  //reset permission to use form after passing a certain duration
  resetForm(){
    if (this.isSent){
    const sentAt = localStorage.getItem('sentAt');
      if (sentAt) {
        const sentDate = new Date(sentAt);
        const threeDaysMs = 3 * 24 * 60 * 60 * 1000;
        const hasExpired = Date.now() - sentDate.getTime() > threeDaysMs;

        if (hasExpired) {
          localStorage.removeItem('sent');
          localStorage.removeItem('sentAt');
          this.isSent = false;
        } else {
          this.contactForm.disable();
          this.startCountdown(sentDate, threeDaysMs);
        }
      }
    }
  }

  private startCountdown(sentDate: Date, threeDaysMs: number){
    const update = () => {
      const remaining = threeDaysMs - (Date.now() - sentDate.getTime());
      if (remaining <= 0) {
        this.timeLeft = '';
        clearInterval(this.countdownInterval);
        localStorage.removeItem('sent');
        localStorage.removeItem('sentAt');
        this.isSent = false;
        return;
      }
      const hours   = Math.floor(remaining / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
      this.timeLeft = `${hours}h ${minutes}m ${seconds}s`;
    };

    update();
    this.countdownInterval = setInterval(update, 1000);
  }

  ngOnDestroy(){
    clearInterval(this.countdownInterval);
  }
  
}
