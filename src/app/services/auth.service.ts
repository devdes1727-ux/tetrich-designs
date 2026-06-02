import { Injectable, inject } from '@angular/core';

import {
    Auth,
    authState
} from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    auth = inject(Auth);

    user$ = authState(this.auth);

}