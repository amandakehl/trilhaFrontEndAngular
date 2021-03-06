import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cubo',
  templateUrl: './cubo.component.html',
  styleUrls: ['./cubo.component.scss']
})
export class CuboComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
    this.valor = this.router.getCurrentNavigation()?.extras.state?.['valorRota'];
  }

  ngOnInit(): void {
  }

  public valor: number = 0;
}
