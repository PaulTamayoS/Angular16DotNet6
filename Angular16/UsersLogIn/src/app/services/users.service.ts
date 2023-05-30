import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "User"

  constructor(private http: HttpClient) { }

  public getUser() : Observable< Users[]>
  {   
    return this.http.get<Users[]>(`${environment.apiUrl}/${this.url}`);
  }
}
