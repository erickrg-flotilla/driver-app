import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'
import { QRCodeModule } from 'angularx-qrcode';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';


const routes = [
  {
    path: 'driver-dashboard',
    loadChildren: () =>
      import('./pages/driver-dashboard/driver-dashboard.module').then(
        (m) => m.DriverDashboardModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ComponentsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: environment.production,
    // Register the ServiceWorker as soon as the application is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerWhenStable:30000'
  }),
  QRCodeModule,
  HttpClientModule,
  ReactiveFormsModule
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
