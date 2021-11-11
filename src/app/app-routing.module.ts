import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './pages/admin/admin.component';
import {RoomClassComponent} from './pages/room-class/room-class.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'room', component: RoomClassComponent },
  { path: '**', redirectTo: '/'} // handle all routes (in browser) which are not including in our routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
