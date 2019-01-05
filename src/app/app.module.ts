import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { FooterComponent } from './home/footer/footer.component';
import { ListComponent } from './project-list/list/list.component';
import { SummaryComponent } from './project-detail/summary/summary.component';
import { PhasesComponent } from './project-detail/phases/phases.component';
import { TechnologiesComponent } from './home/projects/technologies/technologies.component';
import { TechListComponent } from './home/about/tech-list/tech-list.component';
import { ContactListComponent } from './home/contact/contact-list/contact-list.component';
import { ImagesProjectsComponent } from './home/projects/images-projects/images-projects.component';
import { ImagesPhasesComponent } from './project-detail/phases/images-phases/images-phases.component';
import { AttributesProjectsComponent } from './home/projects/attributes-projects/attributes-projects.component';
import { AttributesSummaryComponent } from './project-detail/summary/attributes-summary/attributes-summary.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { FirebaseService } from './firebase.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProjectListComponent,
        ProjectDetailComponent,
        ProjectsComponent,
        AboutComponent,
        ContactComponent,
        FooterComponent,
        ListComponent,
        SummaryComponent,
        PhasesComponent,
        TechnologiesComponent,
        TechListComponent,
        ContactListComponent,
        ImagesProjectsComponent,
        ImagesPhasesComponent,
        AttributesProjectsComponent,
        AttributesSummaryComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FlexLayoutModule
    ],
    providers: [FirebaseService],
    bootstrap: [AppComponent]
})
export class AppModule { }
