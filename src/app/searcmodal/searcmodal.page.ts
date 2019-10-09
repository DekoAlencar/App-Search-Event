import { enunToast } from './../util/enunToast';
import { Basic } from './../basic/basic';
import { Serivce } from './../../service/api.service';
import { ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searcmodal',
  templateUrl: './searcmodal.page.html',
  styleUrls: ['./searcmodal.page.scss'],
})
export class SearcmodalPage extends Basic implements OnInit {
  public key:string;
  public dados: Object;

  constructor(
    public modalCtrl: ModalController, 
    private service: Serivce, 
    public toastCtlr: ToastController
    ){
      super(toastCtlr, modalCtrl);
    }

  ngOnInit() {
  }

  search(event){
    if(event.length <= 1){
      return; 
    }
    this.service.autoComplet(event)
    .subscribe(result=>{
      this.dados = result;
      console.log(this.dados);
    }, error=>{
      this.createToast("Nenhum dado encontrado", enunToast.middle, 2000, 'danger');
    })
  }
  
  formatData(data){
    return new Date(data);
  }
}
