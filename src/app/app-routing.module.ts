import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from "./pages/login/login";
import { ThemeComponent } from "./components/theme/theme.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
	{ path: '/login', component: LoginComponent },
	{ path: '', redirectTo: 'home' },
	{
		path: '',
		component: ThemeComponent, 
		canActivate: [AuthGuard],
		children: [
			{ path: 'home', loadChildren: './pages/home/home.module#HomeModule' }
		]
	},
	{ path: '**' }
]

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
