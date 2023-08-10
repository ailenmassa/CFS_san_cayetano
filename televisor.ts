// Trabajo obligatorio con entrega a tutores designados (miércoles 9 fecha límite)
// implementar todos los métodos de la clase Televisor (es decir, que las funciones... funcionen cuac!)
// agregar validaciones:
// 1- si no está encendido no puede realizar ninguna acción, salvo encender
// 2- volumen min 0 / max 100
// 3- canal min 1 / max 99
// 4- función info muestra canal, volumen y la hora actual

class Televisor {
    isOn: boolean;
    volume: number;
    channel: number;
    constructor(on: boolean = false, vol: number = 0, chn: number = 0) {
      this.isOn = on;
      this.volume = vol;
      this.channel = chn;
    }
    switchOnOff(): void {
      this.isOn = !this.isOn;
      console.log(this.isOn ? "encendido" : "apagado");
    }
    volUp(): void {
        if (!this.isOn) return;
        this.volume = this.volume + 1 ;
        if (this.volume > 100) {
            console.log("error");
            return;
        }
      console.log("subiste el volumen a", this.volume);
    }
    volDown(): void {
        if (!this.isOn) return;
        this.volume = this.volume - 1 ;
        if (this.volume < 0) {
            console.log("error");
            return;
        }
      console.log("bajaste el volumen a", this.volume);
    }
    channelUp(): void {
        if (!this.isOn) return;
        this.channel = this.channel + 1 ;
        if (this.channel > 99) {
            console.log("error");
            return;
        }
      console.log("subiste el canal a", this.channel);
    }
    channelDown(): void {
        if (!this.isOn) return;
        this.channel = this.channel - 1 ;
        if (this.channel < 1) {
            console.log("error");
            return;
        }
      console.log("bajaste el canal a", this.channel);
    }
    pickChannel(channel: number): void {
      if (!this.isOn) return;
      this.channel = channel;
      console.log("Cambiaste al canal", this.channel);
    }
    info(): void {
      console.log("canal",this.channel, "volumen", this.volume, "hora",.toLocaleTimeString([],{hour: '2-digit', minute:'2-digit'}));
    }
  }
  
  const tv01 = new Televisor();
  tv01.switchOnOff();
  
 
