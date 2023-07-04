import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CompoLibComponent } from './compo-lib.component';
import { LoginFormComponent } from './login-form/login-form.component';
// import { LoginFormComponent } from './login-form/login-form.component'; 
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
export class CompoLibModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG8tbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvLWxpYi9zcmMvbGliL2NvbXBvLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUV2RSwyRUFBMkU7QUFDM0UsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFBOztBQWdCMUMsTUFBTSxPQUFPLGNBQWM7OEdBQWQsY0FBYzsrR0FBZCxjQUFjLGlCQVh2QixpQkFBaUI7WUFDakIsa0JBQWtCLGFBR2xCLFdBQVcsYUFHWCxpQkFBaUI7K0dBSVIsY0FBYyxZQVB2QixXQUFXOzsyRkFPRixjQUFjO2tCQWIxQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixpQkFBaUI7d0JBQ2pCLGtCQUFrQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFdBQVc7cUJBQ1o7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGlCQUFpQjtxQkFDbEI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsc0JBQXNCLENBQUM7aUJBQ3BEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTk9fRVJST1JTX1NDSEVNQSwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvTGliQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wby1saWIuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudCc7XG5cbi8vIGltcG9ydCB7IExvZ2luRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudCc7IFxuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ29tcG9MaWJDb21wb25lbnQsXG4gICAgTG9naW5Gb3JtQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ29tcG9MaWJDb21wb25lbnRcbiAgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUEsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBDb21wb0xpYk1vZHVsZSB7IH1cbiJdfQ==