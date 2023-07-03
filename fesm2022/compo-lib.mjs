import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class CompoLibService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: CompoLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: CompoLibService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: CompoLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class LoginFormComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: LoginFormComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.3", type: LoginFormComponent, selector: "lib-login-form", ngImport: i0, template: "<h4>login form</h4>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: LoginFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-login-form', template: "<h4>login form</h4>" }]
        }] });

class CompoLibComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: CompoLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.3", type: CompoLibComponent, selector: "lib-compo-lib", ngImport: i0, template: `
  <lib-login-form></lib-login-form>
  `, isInline: true, dependencies: [{ kind: "component", type: LoginFormComponent, selector: "lib-login-form" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: CompoLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-compo-lib', template: `
  <lib-login-form></lib-login-form>
  ` }]
        }] });

class CompoLibModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: CompoLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.3", ngImport: i0, type: CompoLibModule, declarations: [CompoLibComponent,
            LoginFormComponent], exports: [CompoLibComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: CompoLibModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: CompoLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CompoLibComponent,
                        LoginFormComponent
                    ],
                    imports: [],
                    exports: [
                        CompoLibComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of compo-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CompoLibComponent, CompoLibModule, CompoLibService };
//# sourceMappingURL=compo-lib.mjs.map
