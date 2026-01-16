
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

/**
 * A futuristic Floating Action Button (FAB) for contact options.
 * This component uses signals for state management to toggle its expanded view.
 * It demonstrates a blend of "Glassmorphism" and clean UI for a modern feel.
 */
@Component({
  selector: 'app-contact-fab',
  templateUrl: './contact-fab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage]
})
export class ContactFabComponent {
  /**
   * Signal to control the expanded/collapsed state of the FAB menu.
   * `isExpanded` is a writable signal, initialized to `false`.
   */
  isExpanded = signal(false);

  /**
   * Toggles the state of the FAB menu.
   * This method is used for click events, ensuring accessibility on touch devices.
   */
  toggle(): void {
    this.isExpanded.update(value => !value);
  }

  /**
   * Expands the FAB menu.
   * Intended for mouseenter events to provide a fluid desktop experience.
   */
  expand(): void {
    this.isExpanded.set(true);
  }

  /**
   * Collapses the FAB menu.
   * Intended for mouseleave events.
   */
  collapse(): void {
    this.isExpanded.set(false);
  }
}
