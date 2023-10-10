import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {importProvidersFrom} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";



const routes: Routes = [{
    path: '',
    component: AppComponent
}]

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(routes))]
}).catch(err => console.error(err));

