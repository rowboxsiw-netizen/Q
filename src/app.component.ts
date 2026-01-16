
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ContactFabComponent } from './components/contact-fab/contact-fab.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeroSectionComponent, ContactFabComponent]
})
export class AppComponent {}
