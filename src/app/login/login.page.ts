<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  email: String = 'ee';
  nombre : String = 'ee';
  contrasena: String = 'ee';
  constructor(
    private navController: NavController,
    private toastController: ToastController,
  ) {}
ngOnInit(){

}
login(){
  if(this.email == 'fernando.lezama@utcv.edu.mx' && this.contrasena == 'dsm5b'){
    this.navController.navigateRoot('/menu');
  } else {
    this.presentToast('bottom'); // Invoca la función con un argumento
  }
}

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Las credenciales estan incorrectas',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
}
=======
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  email: String = 'ee';
  nombre : String = 'ee';
  contrasena: String = 'ee';
  constructor(
    private navController: NavController,
    private toastController: ToastController,
  ) {}
ngOnInit(){

}
login(){
  if(this.email == 'fernando.lezama@utcv.edu.mx' && this.contrasena == 'dsm5b'){
    this.navController.navigateRoot('/menu');
  } else {
    this.presentToast('bottom'); // Invoca la función con un argumento
  }
}

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Las credenciales estan incorrectas',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
}
>>>>>>> e661251456290024d464fef68e7566109b9d4cc4
