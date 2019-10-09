import { enunToast } from './../util/enunToast';
import { ToastController, ModalController } from '@ionic/angular';

export class Basic{
    constructor(public toastController: ToastController, public modalController: ModalController){}

    async createToast(msg: any, position: any, time: any, color: any){
        time = null == time ? 2000: time;
        color = null == color ? 'dark' : color;
        let toast = await this.toastController.create({
            message: msg,
            position: position,
            duration: time,
            color: color
        });

        toast.present();
    }

    closeModal(){
        this.modalController.dismiss();
    }

    async openModal(page){

        const modal = await this.modalController.create({
            component: page
        })

        modal.present();
    }
}