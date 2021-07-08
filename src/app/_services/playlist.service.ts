import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FeaturedPlaylists } from '../_models/interface';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  url = environment.baseApi;

  constructor(private http: HttpClient) { }

  getPlaylist(): Observable<FeaturedPlaylists> {
    return this.http.get<FeaturedPlaylists>(this.url);
  }
}
