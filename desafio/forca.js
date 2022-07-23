class Forca {
  constructor (palavra){   // função construtora
    this.palavraSecreta =  palavra.split("");
    this.palavraEsperada = this.palavraSecreta.map(letra =>{return "_"});
    this.vidas = 6; 
    this.letrasChutadas = []; 
  }; 

  chutar(letra) { 
     letra = letra.toLowerCase();

    if (letra.length > 1) {   //Validação do chute
      return console.log("inserção invalida! Digite apenas uma letra"); 
    } else if (this.letrasChutadas.includes(letra)){
      return console.log("Letra ja chutada! Digite novamente."); 
    }; 
    
    for(let i = 0; i < this.palavraSecreta.length; i++) {  //Letra certa ? inserida em seu local 
      if (this.palavraSecreta[i] === letra){
       this.palavraEsperada[i] = letra    
      };
    };

    if (this.palavraSecreta.includes(letra)){  //Incluir chutes na lista 
      this.letrasChutadas.push(letra); 
    } else {
      this.letrasChutadas.push(letra);
      this.vidas--; 
    };
  }; 
      
  buscarEstado() { 
    if (this.vidas === 0 ){
      return "perdeu"; 
    } else if (! this.palavraEsperada.includes("_")) {
      return "ganhou";
    };     
  }; 

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavraEsperada // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      };
    };
}; 

module.exports = Forca;
