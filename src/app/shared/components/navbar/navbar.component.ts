import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{
  
  public marker!: HTMLDivElement; // Usamos el operador ! para indicar que no es null
  public list!: NodeListOf<HTMLLIElement>;

  ngAfterViewInit() {
    // Seleccionar el marcador y los elementos de la lista después de que la vista esté inicializada
    this.marker = document.querySelector<HTMLDivElement>('#marker')!;
    this.list = document.querySelectorAll<HTMLLIElement>('ul li');

    this.list.forEach(link => {
      link.addEventListener('mousemove', (e: MouseEvent) => {
        this.moveIndicator(e); // Pasa el evento completo
      });
      link.addEventListener('mouseover', () => {
        this.activeLink(link); // Pasa el elemento de lista actual
      });
    });
  }

  // Función para mover el indicador
  moveIndicator(e: MouseEvent) {
    const target = e.target as HTMLLIElement; // Asegúrate de que target es un HTMLLIElement
    if (this.marker && target) {
      this.marker.style.top = target.offsetTop + 'px';
      this.marker.style.width = target.offsetWidth + 'px';
    }
  }

  // Función para activar el enlace
  activeLink(item: HTMLLIElement) {
    this.list.forEach((listItem) => listItem.classList.remove('active'));
    item.classList.add('active');
  }
}
