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

  resetImage() {
    this.image = "";
  }
  
  getImage(): any {
    return this.image;
  }

  hasImage(): Boolean {
    if(this.image == "") {
      return false;
    }else{
      return true;
    }
  }
  
  setInfos(unidade_id: number) {
    this.consumerFacade.getInfos(unidade_id).then(infos => {
      this.infos = infos;
    }).catch(err => console.log(err.message));
  }

  resetInfos() {
    this.infos = defaultInfos;
  }

  hasInfo(): Boolean {
    if(this.infos == defaultInfos){
      return false;
    }else{
      return true;
    } 
  }

  getInfos(): Infos {
    return this.infos;
  }

}
