import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ConsumerFacade } from '../consumer.facade';
import { Infos, defaultInfos } from '../interfaces/infos';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {

  private image: any;
  private infos: Infos;

  constructor(private consumerFacade: ConsumerFacade, private sanitizer: DomSanitizer) {
    this.image = "";
    this.infos = defaultInfos;
  }

  ngOnInit(): void {}

  transformHTML(image: string) {
    return this.sanitizer.bypassSecurityTrustHtml(image);
  }

  setImage(unidade: number, detail_level: number) {
    this.consumerFacade.getImage(unidade, detail_level).then(image => {
      this.image = this.transformHTML(image);
    }).catch(err => console.log(err.message));
  }

  getImage(): any {
    return this.image;
  }

  setInfos(unidade_id: number) {
    this.consumerFacade.getInfos(unidade_id).then(infos => {
      this.infos = infos;
    }).catch(err => console.log(err.message));
  }

  getInfos(): Infos {
    return this.infos;
  }

}
