import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class LoginFormComponent {
    private fb;
    private _router;
    loginForm: FormGroup;
    show: boolean;
    disabledLoginPage: boolean;
    submitStatus: string;
    otpForm: any;
    input: any;
    constructor(fb: FormBuilder, _router: Router);
    initializeForm(): void;
    initializeOtpForm(): void;
    routeToChangePassword(): void;
    toggleShow(): void;
    login(val: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoginFormComponent, "lib-login-form", never, {}, {}, never, never, false, never>;
}
