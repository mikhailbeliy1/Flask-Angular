/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Injectable } from '@angular/core';
import { User } from '../interfaces/common/users';

@Injectable({
  providedIn: 'root',
})
export class UserStore {
    private user: User;

    getUser(): User {
        return this.user;
    }

    setUser(paramUser: User) {
        this.user = paramUser;
    }

    setSetting(themeName: string) {
      if (this.user) {
        if (this.user.settings) {
          this.user.settings.themeName = themeName;
        } else {
          this.user.settings = { themeName: themeName };
        }
      }
    }
}
