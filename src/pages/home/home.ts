import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusBar } from  '@ionic-native/status-bar';

import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult }  from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  scanData: {};
  options: BarcodeScannerOptions;
  constructor(public navCtrl: NavController, private scanner: BarcodeScanner) {

  }


  scan(){
  	this.options = {
  		prompt: 'Escanea tu código',
  		showTorchButton: true
  	};
  	this.scanner.scan(this.options).then(barCodeData => {
  		this.scanData = barCodeData;
  		console.log('Barcode-data',barCodeData);
  	})
  	.catch((e)=>{
  		console.log('mec',e);
  	});
  }
}
