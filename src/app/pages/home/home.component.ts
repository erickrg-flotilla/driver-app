import { RestService } from './../../rest.service';
import { Component, OnInit } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home implements OnInit {
  public loginForm: FormGroup;

  constructor(private title: Title, private meta: Meta,
    private restService: RestService, private formBuilder: FormBuilder) {
    this.title.setTitle('FlotillaDriverApp')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'FlotillaDriverApp',
      },
    ]);
  }

  ngOnInit(): void {
    this.getIPAddress();
    this.login();

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    })
  }

  getIPAddress() {
    this.restService.getPublicIPAddress().subscribe(res => {
      console.log(res);
    });
  }

  login() {
    this.restService.login().subscribe(res => {
      console.log(res);
    });
  }

  processInfo() {
    localStorage.setItem('email', 'abcde123');
    localStorage.setItem('nip', '9876');
  }
}
