import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
]

@NgModule({
    declarations: [
        HomeComponent
    ],
    providers: [],
    exports: [],
    imports: [
        RouterModule.forChild(routes)
    ],
})
export class HomeModule {}