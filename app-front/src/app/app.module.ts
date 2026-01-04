import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavOnPageComponent } from './components/nav-on-page/nav-on-page.component';
import { FormsModule } from '@angular/forms';
import { HeroContainerComponent } from './components/hero-container/hero-container.component';
import { TopicContainerComponent } from './components/topic-container/topic-container.component';
import { TechStackCarouselComponent } from './components/tech-stack-carousel/tech-stack-carousel.component';
import { AboutMeContainerComponent } from './components/about-me-container/about-me-container.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavOnPageComponent,
    HeroContainerComponent,
    TopicContainerComponent,
    TechStackCarouselComponent,
    AboutMeContainerComponent,
    ProfileHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
