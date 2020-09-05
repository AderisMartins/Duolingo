import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from "../shared/frase.model";
import { FRASES } from "./frases-mock";

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() { 
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr == this.resposta.toLowerCase()) {

      //trocar pergunta da  rodada
      this.rodada++

      //progresso
      this.progresso = this.progresso + (100/this.frases.length)

      //se a quantidade de acertos for maior que 4 vitoria
      if(this.rodada === 4) {
        this.encerrarJogo.emit('vitoria')
      }
      //atualiza o objeto da rodadaFrase
      this.atualizaRodada()

    } else {
      this.tentativas--
      //alert('A tradução está errada')
      
      //se as tentativas chegarem a 0 derrota
      if(this.tentativas === 0)
        this.encerrarJogo.emit('derrota')

    }
  }

  atualizaRodada(): void {
    //define a frase da rodada com base em alguma lógica
    this.rodadaFrase = this.frases[this.rodada]
    //limpar a resposta
    this.resposta = ''
  }

}