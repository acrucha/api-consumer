import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { lastValueFrom } from 'rxjs';
import { Infos } from '../interfaces/infos';


@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private readonly API = "https://jumpcnj.cin.ufpe.br/api/desafio/";

  constructor(private http: HttpClient) {}

  getImageFromAPI(unidade: number, detail_level: number): Observable<any> {

    let queryParams = new HttpParams();

    queryParams = queryParams.append('detail_level', detail_level);

    return this.http.get<any>(this.API + "image/" + unidade, { params: queryParams })
  }

  async getInfosFromAPI(unidade_id: number): Promise<Infos> {
    const body = JSON.stringify({ 'unidade_id': unidade_id });

    const source: Observable<any> = this.http.post(this.API + "infos/", body, { headers: this.headers });
    const infosSource = await lastValueFrom(source);
    const infos: Promise<Infos> = infosSource.json().infos;

    return infos;
  }

}
