import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';

@NgModule({
  declarations: [App, LivroListaComponent, LivroDadosComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ControleEditoraService, ControleLivrosService],
  bootstrap: [App],
})
export class AppModule {}
