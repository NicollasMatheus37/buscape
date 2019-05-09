import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ThemeComponent } from "./components/theme/theme.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
	{ path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: '',
		component: ThemeComponent, 
		canActivate: [AuthGuard],
		children: [
			{ path: 'home', loadChildren: './pages/home/home.module#HomeModule' }
		]
	},
	{ path: '**', loadChildren: './pages/not-found/not-found.module#NotFoundModule' }
]

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
