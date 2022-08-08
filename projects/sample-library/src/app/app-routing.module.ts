import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDashboardModule } from "./blog-dashboard/blog-dashboard.module"

const routes: Routes = [
  {
    path: 'blog',
    loadChildren: () => import('./blog-dashboard/blog-dashboard.module').then(m => m.BlogDashboardModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
