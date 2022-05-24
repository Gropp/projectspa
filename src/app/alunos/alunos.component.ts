import { Component, OnInit } from '@angular/core';
import { alunos } from '../model/alunos';

@Component({
  selector: 'spa-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  constructor() { }

  listaAlunos: alunos[] = [
    {nome: 'Camila Taruma', idade: 27, email: 'camila.taruma@gmail.com', curso:'Algorítimo'},
    {nome: 'Isabel Martins', idade: 24, email: 'isabel.martins@gmail.com', curso:'MySQL'},
    {nome: 'Maria Coelho', idade: 25, email: 'maria.coelho@gmail.com', curso:'HTML'},
    {nome: 'Pedro Cardoso', idade: 21, email: 'pedro.cardoso@gmail.com', curso:'CSS'},
    {nome: 'Cláudio Pires', idade: 20, email: 'claudio.pires@gmail.com', curso:'Angular'},
    {nome: 'Renato Oliveira', idade: 22, email: 'renato.oliveira@gmail.com', curso:'HTML'}
  ];

  diplayedColumns: string[] = ['Nome', 'Idade', 'Email', 'Curso'];

  ngOnInit(): void {
  }

}
