import { Component, input, Input } from '@angular/core';
import { GridColumn } from '../models/grid-column';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-grid',
  imports: [MatButton],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  @Input() data: any[] | undefined;
  @Input() columns: GridColumn[] | undefined;
}
