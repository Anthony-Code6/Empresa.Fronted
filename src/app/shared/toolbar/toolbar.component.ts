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

  imgAuth: String = 'https://firebasestorage.googleapis.com/v0/b/ecommerce-f0e8c.appspot.com/o/logo%2Fdefault.jpg?alt=media&token=6026260e-59e9-4b01-b822-c2f0f6cd58c4'

}
