import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {

  private authServices = inject( AuthService );

  // Metodo 1
  public user = computed( () => this.authServices.currentUser());

  // Metodo 2
  // get user() {
  //   return this.authServices.currentUser();
  // }

  onLogout() {
    this.authServices.logout();
  }

}
