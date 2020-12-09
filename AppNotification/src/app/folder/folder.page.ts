import { AuthenticationService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  user$: Observable<firebase.User>;
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, public authService: AuthenticationService, private router:Router) { }


  ngOnInit() {
    this.folder = "Notify"
    this.user$ = this.authService.getUser()
  }
  logout(){
    this.authService.SignOut()
    .then(() => {
      this.router.navigateByUrl('login');
    });
  }
  

}
