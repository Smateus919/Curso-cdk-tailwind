import { Component, OnInit } from '@angular/core';
import { SelectInterface } from 'src/app/shared/types/general.types';
import { faCopy, faChartLine, faPlus, faGear, faSuitcase, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faClock, faChartBar, faUser, faClipboard } from '@fortawesome/free-regular-svg-icons';

interface Boards extends SelectInterface{
  workspaceName: string;
}


@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent implements OnInit {

  public boardMenu: SelectInterface[] = [
    {id:0, name: 'Tableros', icon: faClipboard, status: true}, 
    {id: 1, name: 'Plantillas', icon: faCopy, status: false}, 
    {id: 2, name: 'Inicio', icon: faChartLine, status: false}
  ];
  public faPlus = faPlus;
  public faClock = faClock;
  public faSuitcase = faSuitcase;
  public faUsers = faUsers;
  public workspaceName = 'Espacio de trabajo de prueba'
  public recentBoards: Boards[] = [
    {id: 0, name: 'Prueba', workspaceName: 'Espacio de trabajo de prueba'}
  ];
  public myBoards: Boards[] = [
    {id: 0, name: 'Prueba', workspaceName: 'Espacio de trabajo de prueba'}
  ];
  public guestBoards: Boards[] = [
    {id: 0, name: 'Tablero invitado', workspaceName: 'Formulación de proyectos'}
  ];
  public workspaceOptions: SelectInterface[] = [
    {id: 0, name: 'Tableros', icon: faClipboard},
    {id: 1, name: 'Vistas', icon: faChartBar},
    {id: 2, name: 'Miembros (1)', icon: faUser},
    {id: 3, name: 'Configuración', icon: faGear},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
