import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  
  shareOnFacebook() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=www.google.com&quote=' + encodeURIComponent('¡Unete a esta página!'), 'facebook-share-dialog', 'width=626,height=436');
  return false;
  }

}
