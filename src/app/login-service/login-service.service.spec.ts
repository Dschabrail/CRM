import { TestBed } from '@angular/core/testing';

import { LoginServiceService } from './login-service.service';
import { Auth } from '@angular/fire/auth';


class AuthStub {
  // Implementiere hier die erforderlichen Methoden für die Authentifizierung (z.B. signInWithGoogle).
}

describe('LoginServiceService', () => {
  let service: LoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Auth, useClass: AuthStub }, // Hier wird der Stub für Auth verwendet
      ],
    });
    service = TestBed.inject(LoginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
