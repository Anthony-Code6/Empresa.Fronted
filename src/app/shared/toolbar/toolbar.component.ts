import { Component, inject } from '@angular/core';

import { RouterLink } from '@angular/router';

import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

  imgAuth: String = 'https://firebasestorage.googleapis.com/v0/b/ecommerce-8b135.appspot.com/o/photo%2Fphoto.png?alt=media&token=93cb7439-0886-454e-a759-5dbdafa1b25d'

}
