import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
    providedIn: 'root'
})
export class ControleLivrosService {
    private livros: Array<Livro> = [
        { codigo: 1, codEditora: 1, titulo: 'Use a Cabeça: Java', resumo: 'Aprenda Java de forma prática e visual.', autores: ['Kathy Sierra', 'Bert Bates'] },
        { codigo: 2, codEditora: 2, titulo: 'Java, como Programar', resumo: 'Material completo de programação em Java.', autores: ['Paul Deitel', 'Harvey Deitel'] },
        { codigo: 3, codEditora: 3, titulo: 'Core Java for the Impatient', resumo: 'Introdução rápida aos recursos do Java.', autores: ['Cay Horstmann'] }
    ];

    obterLivros(): Array<Livro> {
        return this.livros;
    }

    incluir(livro: Livro): void {
        const maiorCodigo = this.livros.length > 0 ? Math.max(...this.livros.map(l => l.codigo)) : 0;
        livro.codigo = maiorCodigo + 1;
        this.livros.push(livro);
    }

    excluir(codigo: number): void {
        const indice = this.livros.findIndex(l => l.codigo === codigo);
        if (indice >= 0) {
            this.livros.splice(indice, 1)
        }
    }
}
