import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NabvarComponent } from './nabvar/nabvar.component';
import { RecibosComponent } from './recibos/recibos.component';
import { MenubarComponent } from './menubar/menubar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { YoutubePipe } from './pipes/youtube.pipe';


// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PaginaRecibosComponent } from './pagina-recibos/pagina-recibos.component';
import { PaginaPerfilComponent } from './pagina-perfil/pagina-perfil.component';
import { PerfilComponent } from './perfil/perfil.component';
import { VideosComponent } from './videos/videos.component';
import { PaginaVideosComponent } from './pagina-videos/pagina-videos.component';
import { PaginaPagosComponent } from './pagina-pagos/pagina-pagos.component';
import { PagosComponent } from './pagos/pagos.component';
import { MapaComponent } from './mapa/mapa.component';
import { PaginaMapaComponent } from './pagina-mapa/pagina-mapa.component';


const routes: Routes = [
  {path:'',component:PaginaPrincipalComponent},
  {path:'recibos',component:PaginaRecibosComponent},
  {path:'perfil',component:PaginaPerfilComponent},
  {path:'videos',component:PaginaVideosComponent},
  {path:'pagos',component:PaginaPagosComponent},
  {path:'ubicacion',component:PaginaMapaComponent},


]


@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    RecibosComponent,
    MenubarComponent,
    InicioComponent,
    FooterComponent,
    PaginaPrincipalComponent,
    PaginaRecibosComponent,
    PaginaPerfilComponent,
    PerfilComponent,
    VideosComponent,
    PaginaVideosComponent,
    YoutubePipe,
    PaginaPagosComponent,
    PagosComponent,
    MapaComponent,
    PaginaMapaComponent



  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AuthModule.forRoot({
      domain: 'dev-xlx8tm3g24flhlk5.us.auth0.com',
      clientId: 'sjbZY3gFBlhtmyBODn03laWPSqFdlpzR'
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
