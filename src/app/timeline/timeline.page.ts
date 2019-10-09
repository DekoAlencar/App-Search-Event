import { enunToast } from './../util/enunToast';
import { Basic } from './../basic/basic';
import { ModalController, ToastController } from '@ionic/angular';
import { Serivce } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage extends Basic implements OnInit {
  public dados: Object;
  public carregamento: boolean;
  constructor(private service: Serivce, public modalCtrl: ModalController, public toastCtrl: ToastController) { 
    super(toastCtrl,modalCtrl);
  }

  ngOnInit() {
    this.timeLine();
  }

  timeLine(){
    this.carregamento = true;
    this.service.timeline().subscribe(result=>{
        this.dados = result;
        console.log(this.dados);
    }, error=>{
      console.log(error);
      this.createToast(error.message, enunToast.middle, 2000, 'danger');
    })
    this.carregamento = false;
  }

  nameLoja(obj){
    return obj.custom_data.store_name;
  }
}
