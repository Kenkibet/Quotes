import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AddQuotesComponent } from './components/add-quotes/add-quotes.component'
import { ListQuotesComponent } from './components/list-quotes/list-quotes.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },

  {
    path:'home', component: ListQuotesComponent
  },
  {
    path:'add', component: AddQuotesComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
