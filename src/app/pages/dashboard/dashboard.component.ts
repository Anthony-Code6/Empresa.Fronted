import { Component } from '@angular/core';
import { ToolbarComponent } from '../../shared/toolbar/toolbar.component';
import { CardsComponent } from '../../components/dashboard/cards/cards.component';
import { Cards } from '../../interfaces/dashboard/cards';
import { GraphicsComponent } from '../../components/dashboard/graphics/graphics.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ToolbarComponent, CardsComponent,GraphicsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  Cards: Cards[] = [{
    Icon: 'bi bi-cart-fill',
    Titulo: 'Productos',
    Acceso:'login'
  }, {
    Icon: 'bi bi-person-fill',
    Titulo: 'Personal',
    Acceso:'register'
  }]

}
