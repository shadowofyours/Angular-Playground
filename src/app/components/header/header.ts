import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { User } from '../../models/user.model';
import { NavLink } from '../../models/nav-link.model';

@Component({
  selector: 'playground-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  // User state
  currentUser = signal<User | null>(null);

  // Navigation links
  @Input() navLinks: NavLink[] = [];

  // Methods
  login() {
    // TODO: Implement actual login logic or redirect to login page
    console.log('Login clicked');
  }

  logout() {
    this.currentUser.set(null);
  }

  // Simulate user login for demo
  setDemoUser() {
    this.currentUser.set({
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
    });
  }
}
