import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class LoginFormComponent {
    getValues(val) {
        console.log(val);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: LoginFormComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.3", type: LoginFormComponent, selector: "lib-login-form", ngImport: i0, template: "<h4>login form source files</h4>\r\n\r\n<form #simpleForm=\"ngForm\" (ngSubmit)=\"getValues(simpleForm.value)\" >\r\n    <label>User name</label>\r\n   <input type=\"text\" ngModel name=\"user\" placeholder=\"Enter user name\">\r\n   <br><br>\r\n   <label>Age</label>\r\n   <input type=\"text\" ngModel name=\"age\" placeholder=\"Enter user age\">\r\n   <br><br>\r\n   <label>Address</label>\r\n   <input type=\"text\" ngModel name=\"address\" placeholder=\"Enter user address\">\r\n   <br><br>\r\n   <button> Submit</button>\r\n  </form>", styles: ["h4{color:#00f}\n"], dependencies: [{ kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: LoginFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-login-form', template: "<h4>login form source files</h4>\r\n\r\n<form #simpleForm=\"ngForm\" (ngSubmit)=\"getValues(simpleForm.value)\" >\r\n    <label>User name</label>\r\n   <input type=\"text\" ngModel name=\"user\" placeholder=\"Enter user name\">\r\n   <br><br>\r\n   <label>Age</label>\r\n   <input type=\"text\" ngModel name=\"age\" placeholder=\"Enter user age\">\r\n   <br><br>\r\n   <label>Address</label>\r\n   <input type=\"text\" ngModel name=\"address\" placeholder=\"Enter user address\">\r\n   <br><br>\r\n   <button> Submit</button>\r\n  </form>", styles: ["h4{color:#00f}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wby1saWIvc3JjL2xpYi9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG8tbGliL3NyYy9saWIvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU8xQyxNQUFNLE9BQU8sa0JBQWtCO0lBQy9CLFNBQVMsQ0FBQyxHQUFRO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDaEIsQ0FBQzs4R0FIWSxrQkFBa0I7a0dBQWxCLGtCQUFrQixzRENQL0IsNGhCQWFTOzsyRkROSSxrQkFBa0I7a0JBTDlCLFNBQVM7K0JBQ0UsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1sb2dpbi1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkZvcm1Db21wb25lbnQge1xuZ2V0VmFsdWVzKHZhbDogYW55KXtcbmNvbnNvbGUubG9nKHZhbClcbn1cbn1cbiIsIjxoND5sb2dpbiBmb3JtIHNvdXJjZSBmaWxlczwvaDQ+XHJcblxyXG48Zm9ybSAjc2ltcGxlRm9ybT1cIm5nRm9ybVwiIChuZ1N1Ym1pdCk9XCJnZXRWYWx1ZXMoc2ltcGxlRm9ybS52YWx1ZSlcIiA+XHJcbiAgICA8bGFiZWw+VXNlciBuYW1lPC9sYWJlbD5cclxuICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmdNb2RlbCBuYW1lPVwidXNlclwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdXNlciBuYW1lXCI+XHJcbiAgIDxicj48YnI+XHJcbiAgIDxsYWJlbD5BZ2U8L2xhYmVsPlxyXG4gICA8aW5wdXQgdHlwZT1cInRleHRcIiBuZ01vZGVsIG5hbWU9XCJhZ2VcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHVzZXIgYWdlXCI+XHJcbiAgIDxicj48YnI+XHJcbiAgIDxsYWJlbD5BZGRyZXNzPC9sYWJlbD5cclxuICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmdNb2RlbCBuYW1lPVwiYWRkcmVzc1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdXNlciBhZGRyZXNzXCI+XHJcbiAgIDxicj48YnI+XHJcbiAgIDxidXR0b24+IFN1Ym1pdDwvYnV0dG9uPlxyXG4gIDwvZm9ybT4iXX0=