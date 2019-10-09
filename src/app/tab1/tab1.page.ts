import { Basic } from './../basic/basic';
import { TimelinePage } from './../timeline/timeline.page';
import { SearcmodalPage } from './../searcmodal/searcmodal.page';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page extends Basic {
  public msgErro : String;
  constructor(private router: Router, private modalCtrl: ModalController) {
    super(null,modalCtrl);
    this.verifyUrl();
  }

  private verifyUrl(){
    let url = environment.url;
    if(!url){
      this.msgErro = "Você precisa cadastrar uma url antes usar a api";
      this.router.navigate(['/tabs/tab2']);
    }
    return;
  }

  async timeline(){
    this.verifyUrl();
    this.openModal(TimelinePage)
  }

  async search(){
    this.verifyUrl();
    this.openModal(SearcmodalPage)
  }

}
