import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./not-found";

const routes: Routes = [
    {
        path: '',
        component: NotFoundComponent
    }
];

@NgModule({
    declarations: [
        NotFoundComponent
    ],
    imports: [
        RouterModule.forChild(routes),
    ]
})
export class NotFoundModule {}