import { Component } from '@angular/core';
import { ToolbarComponent } from '../../shared/toolbar/toolbar.component';
import { CardsComponent } from '../../components/dashboard/cards/cards.component';
import { GraphicsComponent } from '../../components/dashboard/graphics/graphics.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ToolbarComponent, CardsComponent,GraphicsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


}
