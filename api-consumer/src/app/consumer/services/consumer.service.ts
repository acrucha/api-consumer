import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { lastValueFrom } from 'rxjs';
import { Infos } from '../interfaces/infos';


@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  private readonly API = "https://jumpcnj.cin.ufpe.br/api/desafio/";

  constructor(private http: HttpClient) {}

  async getImageFromAPI(unidade: number, detail_level: number): Promise<string> {

    let queryParams = new HttpParams();
    queryParams = queryParams.append('detail_level', detail_level);
    let queryParamsStr = queryParams.toString();

    const source: Observable<string> = this.http.get(this.API + "image/" + unidade + '/?' + queryParamsStr, { responseType: 'text' });

    const infosSource: Promise<string> = lastValueFrom(source).then(source => {
      return source;
    }).catch(err => {
      console.log(err.message);
      return err;
    });

    return infosSource;
  }

  async getInfosFromAPI(unidade_id: number): Promise<Infos> {
    const body = JSON.stringify({ 'unidade_id': unidade_id });

    const source: Observable<any> = this.http.post(this.API + "infos/", body, { headers: this.headers });

    const infos: Promise<Infos> = lastValueFrom(source).then(source => {
      return source.infos;
    }).catch(err => {
      return err;
    });

    return infos;
  }

}
