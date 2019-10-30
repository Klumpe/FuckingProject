// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { AlertService, MessageSeverity, DialogType } from '../../services/alert.service';
import { AuthService } from '../../services/auth.service';
import { AccountService } from '../../services/account.service';
import { ConfigurationService } from '../../services/configuration.service';
import { Utilities } from '../../services/utilities';
import { UserLogin } from '../../models/user-login.model';
import { UserEdit } from '../../models/user-edit.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

    user = new UserLogin();

    constructor(private alertService: AlertService, private authService: AuthService, private configurations: ConfigurationService, private accountService: AccountService) {

  }


  ngOnInit() {

  }

    register() {
        console.log(this.user.userName, this.user.password);

        var newUser = new UserEdit;
        newUser.currentPassword = this.user.password;
        newUser.userName = this.user.userName;
        this.accountService.newUser(newUser);
    }

  showErrorAlert(caption: string, message: string) {
    this.alertService.showMessage(caption, message, MessageSeverity.error);
  }

  mapLoginErrorMessage(error: string) {

    if (error == 'invalid_username_or_password') {
      return 'Invalid username or password';
    }

    if (error == 'invalid_grant') {
      return 'This account has been disabled';
    }

    return error;
  }

}
