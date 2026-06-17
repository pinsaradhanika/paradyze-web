import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;

  links = [
    { path: '/shop', label: 'Shop' },
    { path: '/shop', label: 'Women' },
    { path: '/shop', label: 'New In' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];
}