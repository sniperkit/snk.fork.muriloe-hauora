import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Remedio } from '../../../../shared/model/remedio.model';
import { Doenca } from './../../../../shared/model/doenca.model';
import { Consumo } from './../../../../shared/model/consumo.model';
import { Cliente } from './../../../../shared/model/cliente.model';

@Component({
    selector: 'ngx-consulta-anamnese-model',
    templateUrl: './consulta-anamnese-modal.component.html',
  })

export class ConsultaAnamneseModalComponent {
    constructor(private activeModal: NgbActiveModal) { }
    userId: String;
    cliente: Cliente;
    consumos: Consumo[];
    remedios: Remedio[];
    doenca: Doenca[];

    closeModal() {
        this.activeModal.close();
    }

}