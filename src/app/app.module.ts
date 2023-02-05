//Importar los modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
//Importar los servicios
//import { PorfolioService } from './servicios/porfolio.service'; Si lo ponemos asi tambien funciona

//Importar los componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './components/redes/redes.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { InterestsComponent } from './components/interests/interests.component';
import { AwardsComponent } from './components/awards/awards.component';
import { WorkComponent } from './components/work/work.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { IndexComponent } from './components/index/index.component';
import { MainComponent } from './components/main/main.component';
import { AcercademiComponent } from './components/acercademi/acercademi.component';
import { ErrorComponent } from './components/error/error.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { NavbardashboardComponent } from './components/dashboard/navbardashboard/navbardashboard.component';
import { BotonlogoutComponent } from './components/botonlogout/botonlogout.component';
import { AcercademidashboardComponent } from './components/dashboard/acercademidashboard/acercademidashboard.component';
import { ExperiencedashboardComponent } from './components/dashboard/experiencedashboard/experiencedashboard.component';
import { EducationdashboardComponent } from './components/dashboard/educationdashboard/educationdashboard.component';
import { ProyectosdashboardComponent } from './components/dashboard/proyectosdashboard/proyectosdashboard.component';
import { SkillsdashboardComponent } from './components/dashboard/skillsdashboard/skillsdashboard.component';
import { WorkdashboardComponent } from './components/dashboard/workdashboard/workdashboard.component';
import { BannerdashboardComponent } from './components/dashboard/bannerdashboard/bannerdashboard.component';
import { CrearBannerComponent } from './components/modales/crear-banner/crear-banner.component';
import { EliminarBannerComponent } from './components/modales/eliminar-banner/eliminar-banner.component';
import { CrearEducationComponent } from './components/modales/crear-education/crear-education.component';
import { EliminarEducationComponent } from './components/modales/eliminar-education/eliminar-education.component';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    BannerComponent,
    IndexComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    InterestsComponent,
    AwardsComponent,
    WorkComponent,
    ProyectosComponent,
    ErrorComponent,
    MainComponent,
    AcercademiComponent,
    DashboardComponent,
    NavbardashboardComponent,
    BotonlogoutComponent,
    AcercademidashboardComponent,
    ExperiencedashboardComponent,
    EducationdashboardComponent,
    ProyectosdashboardComponent,
    SkillsdashboardComponent,
    WorkdashboardComponent,
    BannerdashboardComponent,
    CrearBannerComponent,
    EliminarBannerComponent,
    CrearEducationComponent,
    EliminarEducationComponent
   
 
    
    
   
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  //Agregamos el servicio al array de providers
  providers: [],    //PorfolioService si lo ponemos asi tambien funciona
  bootstrap: [AppComponent]
})
export class AppModule { }


