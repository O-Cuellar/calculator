//-------CRIAR UMA CALCULADORA INTERATIVA--------
//1-Ter uma interface gráfica com os números de 0 a 9 que quando selecionados ou digitados sejam atualizados em uma tela de exibição da operação
//2-ter uma interface gráfica que juntamente com os números sejam exibidas as operações que são possíveis de serem realizadas e assim com em uma calculadora normal sejam exibidas as opções escolhidas na tela de exibição
//3-Devem ser toleradas operações com números de pontos flutuantes
//4-Após o usúario selecionar as operações desejadas e selecionar o sinal de igual após as operações deve ser exibido o resultado da operação ou operações feitas, SEM ERROS

import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  return (
    <>
      <div>
        <Calculator />
      </div>
    </>
  );
}

export default App;