import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar Componentes
import { ZapatosComponent } from './zapatos/zapatos.component';
import { VideoJuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'zapatos', component: ZapatosComponent},
  {path: 'videojuego', component: VideoJuegoComponent},
  {path: 'cursos', component: CursosComponent},
  {path: '**', component: HomeComponent}
];

// Exportar el módulo del router
/* export const RoutingProviders: any[] = [];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes); */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
