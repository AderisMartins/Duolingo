import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit {

  /**Property Binding */
  public coracaoVazio: String = '/assets/coracao_vazio.png'
  public coracaoCheio: String = '/assets/coracao_cheio.png'

  constructor() { }

  ngOnInit() {
  }

}
