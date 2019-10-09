import { enunToast } from './../util/enunToast';
import { ToastController } from '@ionic/angular';
import { Basic } from './../basic/basic';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page extends Basic{
  public url: any;
  public port: any;
  public ssl: any;

  constructor(public toastCtrl: ToastController) {
  
    super(toastCtrl, null);

      if(environment.url){
        this.url = environment.url.split(':');
        console.log(this.url);
        this.ssl = this.url[0];
        this.port = this.url[2];
        this.url = this.url[1].replace("//", "");
      }
  }

  public saveUrl(){
    this.clearStorage();
    localStorage.setItem("url", this.ssl+'://'+this.url.toLowerCase()+':'+this.port);
    this.createToast("Configurações salvas com sucesso", enunToast.bottom, null, null);
    // this.activeToast("Configurações salvas com sucesso", "bottom");
  }
  
  public clearStorage(){
    localStorage.clear();
  }

}
