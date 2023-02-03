//Importar los modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
//Importar los servicios
//import { PorfolioService } from './servicios/porfolio.service'; Si lo ponemos asi tambien funciona

//Importar los componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { BannerComponent } from './banner/banner.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestsComponent } from './interests/interests.component';
import { AwardsComponent } from './awards/awards.component';
import { WorkComponent } from './work/work.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { IndexComponent } from './index/index.component';
import { MainComponent } from './main/main.component';
import { AcercademiComponent } from './acercademi/acercademi.component';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbardashboardComponent } from './navbardashboard/navbardashboard.component';
import { BotonlogoutComponent } from './botonlogout/botonlogout.component';
import { AcercademidashboardComponent } from './acercademidashboard/acercademidashboard.component';
import { ExperiencedashboardComponent } from './experiencedashboard/experiencedashboard.component';
import { EducationdashboardComponent } from './educationdashboard/educationdashboard.component';
import { ProyectosdashboardComponent } from './proyectosdashboard/proyectosdashboard.component';
import { SkillsdashboardComponent } from './skillsdashboard/skillsdashboard.component';
import { WorkdashboardComponent } from './workdashboard/workdashboard.component';
import { BannerdashboardComponent } from './bannerdashboard/bannerdashboard.component';
import { CrearBannerComponent } from './components/modales/crear-banner/crear-banner.component';
import { EliminarBannerComponent } from './components/modales/eliminar-banner/eliminar-banner.component';





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


