import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from './shared';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jogo-da-velha',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './jogo-da-velha.component.html',
  styleUrl: './jogo-da-velha.component.css',
  providers: [ JogoDaVelhaService ]
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) {}

  ngOnInit(): void {
    this.jogoDaVelhaService.inicializar();
  }

  /**
   * Retorna se a tela de início deve ser exibida.
   * 
   * @return boolean
   */
  get showInicio(): boolean {
    return this.jogoDaVelhaService.showInicio;
  }

  /**
   * Retorna se o tabuleiro deve ser exibido.
   * 
   * @return boolean
   */
  get showTabuleiro(): boolean {
    return this.jogoDaVelhaService.showTabuleiro;
  }

  /**
   * Retorna se a tela de fim de jogo deve ser exibida.
   * 
   * @return boolean
   */
  get showFinal(): boolean {
    return this.jogoDaVelhaService.showFinal;
  }

  /**
   * Inicializa os dados de um novo jogo.
   */
  iniciarJogo(): void {
    this.jogoDaVelhaService.iniciarJogo();
  }

  /**
   * Realiza uma jogada ao clicar em um local no tabuleiro.
   * 
   * @param posX number
   * @param posY number
   */
  jogar(posX: number, posY: number): void {
    this.jogoDaVelhaService.jogar(posX, posY);
  }

  /**
   * Retorna se a peça X deve ser exibida para a
   * coordenada informada.
   * 
   * @param posX number
   * @param posY number
   * @returns boolean
   */
  exibirX(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirX(posX, posY);
  }

  /**
   * Retorna se a peça O deve ser exibida para a
   * coordenada informada.
   * 
   * @param posX number
   * @param posY number
   * @returns boolean
   */
  exibirO(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirO(posX, posY);
  }

  /**
   * Retorna se a marcação de vitória deve ser exibida para a
   * coordenada informada.
   * 
   * @param posX number
   * @param posY number
   * @returns boolean
   */
  exibirVitoria(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirVitoria(posX, posY);
  }

  /**
   * Retorna o número do jogador a jogar.
   * 
   * @returns number
   */
  get jogador(): number {
    return this.jogoDaVelhaService.jogador;
  }

  /**
   * Inicia um novo jogo.
   */
  novoJogo(): void {
    this.jogoDaVelhaService.novoJogo();
  }

}
