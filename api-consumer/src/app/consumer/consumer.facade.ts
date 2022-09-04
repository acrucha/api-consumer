import { ConsumerService } from "./services/consumer.service";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Infos } from "./interfaces/infos";

@Injectable()
export class ConsumerFacade {

    constructor(private consumerService: ConsumerService){}

    public getImage(unidade: number, detail_level: number): Promise<string> {
        return this.consumerService.getImageFromAPI(unidade, detail_level).then(image => {
            return image;
        });
    }

    public getInfos(unidade_id: number): Promise<Infos> {
        return this.consumerService.getInfosFromAPI(unidade_id).then(infos => {
            return infos as Infos;
        });
    }
}