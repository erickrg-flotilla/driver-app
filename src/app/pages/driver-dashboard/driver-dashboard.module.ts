import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { DriverDashboard } from './driver-dashboard.component'
import { QRCodeModule } from 'angularx-qrcode';


const routes = [
  {
    path: '',
    component: DriverDashboard,
  },
]

@NgModule({
  declarations: [DriverDashboard],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes), QRCodeModule],
  exports: [DriverDashboard],
})
export class DriverDashboardModule {}
