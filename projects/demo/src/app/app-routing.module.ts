import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'getting-started',
        loadChildren: () => import('./start/start.module').then(mod => mod.StartModule)
      },
      {
        path: 'flash',
        loadChildren: () => import('./flash/flash.module').then(mod => mod.FlashModule)
      },
      {
        path: 'loading-button',
        loadChildren: () => import('./loading-button/loading-button.module').then(mod => mod.LoadingButtonModule)
      },
      {
        path: 'indicator-button',
        loadChildren: () => import('./indicator-button/indicator-button.module').then(mod => mod.IndicatorButtonModule)
      },
      {
        path: 'dropzone',
        loadChildren: () => import('./dropzone/dropzone.module').then(mod => mod.DropzoneModule)
      },
      {
        path: 'indeterminate-bar',
        loadChildren: () => import('./indeterminate-bar/indeterminate-bar.module').then(mod => mod.IndeterminateBarModule)
      },
      {
        path: 'pretty-file-input',
        loadChildren: () => import('./pretty-file-input/pretty-file-input.module').then(mod => mod.PrettyFileInputModule)
      },
      {
        path: 'blocknload',
        loadChildren: () => import('./blocknload/blocknload.module').then(mod => mod.BlocknloadModule)
      },
      {
        path: 'indicators',
        loadChildren: () => import('./indicators/indicators.module').then(mod => mod.IndicatorsModule)
      }
    ]
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
