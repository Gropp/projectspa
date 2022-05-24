import { Component, OnInit } from '@angular/core';
import { cursos } from '../model/cursos';

const ELEMENT_DATA: cursos[] = [
    {nome: 'Algorítimos', descricao: 'Lógica de programação', duracao: '40 horas', periodo: 'Diurno', ranking: 5 },
    {nome: 'MySQL', descricao: 'Banco de Dados Relacional', duracao: '20 horas', periodo: 'Diurno', ranking: 4 },
    {nome: 'HTML', descricao: 'Linguagem de marcação', duracao: '15 horas', periodo: 'Diurno', ranking: 4.5 },
    {nome: 'CSS', descricao: 'Formatação de páginas HTML', duracao: '15 horas', periodo: 'Diurno', ranking: 4 },
    {nome: 'Angular', descricao: 'Framework Angular', duracao: '20 horas', periodo: 'Diurno', ranking: 5 },
  ];

@Component({
  selector: 'spa-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  displayedColumns: string[] = ['nome', 'descricao', 'duracao', 'periodo', 'ranking'];
  dataSource = ELEMENT_DATA;
}
