import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'driver-dashboard',
  templateUrl: 'driver-dashboard.component.html',
  styleUrls: ['driver-dashboard.component.css'],
})
export class DriverDashboard {
  public myAngularxQrCode: string = null;
  public mostrarQR: boolean = false;
  // assign a value
  constructor(private title: Title, private meta: Meta) {
    this.myAngularxQrCode = localStorage.getItem('email') + localStorage.getItem('nip');
    console.log(this.myAngularxQrCode);
    this.title.setTitle('DriverDashboard - FlotillaDriverApp')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'DriverDashboard - FlotillaDriverApp',
      },
    ])
  }

  toggleQR(){
    this.mostrarQR = false;
    this.myAngularxQrCode = localStorage.getItem('email') + localStorage.getItem('nip');
    this.mostrarQR = true;
  }
}
