import { Component, inject, Input } from '@angular/core';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [NgxSpinnerModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {

  private spinner = inject(NgxSpinnerService)
  @Input({ required: true }) time !: number

  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, this.time);

  }

}
