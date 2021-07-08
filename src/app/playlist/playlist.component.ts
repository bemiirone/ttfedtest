import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ListProps } from '../_models/interface';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnChanges {
  @Input() playlistData: ListProps[];
  displayedColumns: string[] = ['name', 'kind', 'curator_name', 'url', 'artwork'];
  dataSource: any;

  constructor() { }

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource(this.playlistData);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
