import { Component } from '@angular/core';
import { PlaylistService } from './_services/playlist.service';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ListProps } from './_models/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title$: Observable<string>;
  playlist$: Observable<ListProps[]>;

  constructor(private service: PlaylistService) {
    this.title$ = this.service.getPlaylist().pipe(pluck('featuredPlaylists', 'name'));
    this.playlist$ = this.service.getPlaylist().pipe(pluck('featuredPlaylists', 'content'));
  }

  ngOnInit() {
  }
}
