import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainRequestComponent } from './main-request/main-request.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ThemingService, ThemingModule } from '@fundamental-ngx/core/theming';
import { NavbarComponent } from './navbar/navbar.component';
import { ShellbarModule } from '@fundamental-ngx/core/shellbar';

@NgModule({
  declarations: [
    AppComponent,
    MainRequestComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ShellbarModule,
    TableModule,
    NoopAnimationsModule,
    ThemingModule.withConfig({ defaultTheme: 'sap_horizon', changeThemeOnQueryParamChange: false })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
constructor(themingService: ThemingService) {
themingService.init();
}
}
