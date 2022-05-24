import { Component, ViewChild } from '@angular/core';
import { professores } from '../model/professores';
import { MatTable } from '@angular/material/table';

const ELEMENT_DATA: professores[] = [
  {nome: 'Maria Alice', formacao: 'Ciência da Computação', experiencia: '8 anos', email: 'maria@escola.com.br', curso: 'Algorítimos' },
  {nome: 'João Cezar', formacao: 'Ciência de Dados', experiencia: '10 anos', email: 'joao@escola.com.br', curso: 'MySQL' },
  {nome: 'Roberto Pompeo', formacao: 'Design de Interfaces', experiencia: '6 anos', email: 'roberto@escola.com.br', curso: 'HTML' },
  {nome: 'Karla Dias', formacao: 'Analise de Sistemas', experiencia: '4 anos', email: 'karla@escola.com.br', curso: 'CSS' },
  {nome: 'Sandro Becker', formacao: 'Ciência da Computação', experiencia: '12 anos', email: 'sandro@escola.com.br', curso: 'Angular' },
];


@Component({
  selector: 'spa-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent {

  displayedColumns: string[] = ['nome', 'formacao', 'experiencia', 'email', 'curso'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table: MatTable<professores>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}
