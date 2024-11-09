import { Component, inject, Input } from '@angular/core';
import { AuthStateService } from '../../data-access/auth-state.service';
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  private authState = inject(AuthStateService)
  public route = inject(Router)
  
  async logOut(){
    await this.route.navigateByUrl('/home-page')
    this.authState.signOut()
    toast.message("Ha cerrado sesión")
  }

 }
