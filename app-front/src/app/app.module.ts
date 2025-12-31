import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavOnPageComponent } from './components/nav-on-page/nav-on-page.component';
import { FormsModule } from '@angular/forms';
import { HeroContainerComponent } from './components/hero-container/hero-container.component';
import { TopicContainerComponent } from './components/topic-container/topic-container.component';
import { TechStackCarouselComponent } from './components/tech-stack-carousel/tech-stack-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavOnPageComponent,
    HeroContainerComponent,
    TopicContainerComponent,
    TechStackCarouselComponent
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
