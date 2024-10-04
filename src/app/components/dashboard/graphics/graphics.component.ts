import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-graphics',
  standalone: true,
  imports: [],
  templateUrl: './graphics.component.html',
  styleUrl: './graphics.component.css'
})
export class GraphicsComponent implements OnInit, AfterViewInit {
  public chart!: Chart
  @Input({ required: true }) ids !: string
  @Input({ required: true }) types !: string
  @Input({ required: true }) labels !: string[]
  @Input({ required: true }) titles !: string
  @Input({ required: true }) datas !: number[]

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.getLinea()
  }

  getLinea() {
    const data = {
      labels: this.labels,
      datasets: [{
        label: this.titles,
        data: [65, 59, 80, 81, 26, 55, 40],
        fill: false,
        borderColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderWidth: 1
      }]
    };

    const config = {
      type: this.types,
      data: data,
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        },
        responsive: true, // Hace que el gráfico sea responsivo
        maintainAspectRatio: false, // Permite ajustar la altura del contenedor
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    const tipo = this.types
    this.chart = new Chart(this.ids, {
      type: this.types as ChartType,
      data: data,
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        },
        responsive: true, // Hace que el gráfico sea responsivo
        maintainAspectRatio: false, // Permite ajustar la altura del contenedor
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }
}
