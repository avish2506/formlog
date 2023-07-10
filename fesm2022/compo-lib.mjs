import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormsModule } from '@angular/forms';

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
    getValues(val) {
        console.log(val);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: LoginFormComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.3", type: LoginFormComponent, selector: "lib-login-form", ngImport: i0, template: "\r\n<h4>login form source files</h4>\r\n\r\n<form #simpleForm=\"ngForm\" (ngSubmit)=\"getValues(simpleForm.value)\" >\r\n    <label>User name</label>\r\n   <input type=\"text\" ngModel name=\"user\" placeholder=\"Enter user name\">\r\n   <br><br>\r\n   <label>Age</label>\r\n   <input type=\"text\" ngModel name=\"age\" placeholder=\"Enter user age\">\r\n   <br><br>\r\n   <label>Address</label>\r\n   <input type=\"text\" ngModel name=\"address\" placeholder=\"Enter user address\">\r\n   <br><br>\r\n   <button> Submit</button>\r\n\r\n    <img src=\"../../../assets/imges/approved.png\" alt=\"crr\"/>\r\n \r\n  </form>", styles: ["label{color:#0cf469}h4{color:#00f}\n"], dependencies: [{ kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: LoginFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-login-form', template: "\r\n<h4>login form source files</h4>\r\n\r\n<form #simpleForm=\"ngForm\" (ngSubmit)=\"getValues(simpleForm.value)\" >\r\n    <label>User name</label>\r\n   <input type=\"text\" ngModel name=\"user\" placeholder=\"Enter user name\">\r\n   <br><br>\r\n   <label>Age</label>\r\n   <input type=\"text\" ngModel name=\"age\" placeholder=\"Enter user age\">\r\n   <br><br>\r\n   <label>Address</label>\r\n   <input type=\"text\" ngModel name=\"address\" placeholder=\"Enter user address\">\r\n   <br><br>\r\n   <button> Submit</button>\r\n\r\n    <img src=\"../../../assets/imges/approved.png\" alt=\"crr\"/>\r\n \r\n  </form>", styles: ["label{color:#0cf469}h4{color:#00f}\n"] }]
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
            LoginFormComponent], imports: [FormsModule], exports: [CompoLibComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: CompoLibModule, imports: [FormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: CompoLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CompoLibComponent,
                        LoginFormComponent
                    ],
                    imports: [
                        FormsModule
                    ],
                    exports: [
                        CompoLibComponent
                    ],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
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
