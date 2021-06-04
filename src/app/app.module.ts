import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { UpdateInfoComponent } from './components/update-info/update-info.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/tool-components/toolbar/toolbar.component';
import { ToolboxComponent } from './components/tool-components/toolbox/toolbox.component';
import { SingleImageComponent } from './components/single-image/single-image.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    UpdateInfoComponent,
    NavbarComponent,
    ToolbarComponent,
    ToolboxComponent,
    SingleImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
