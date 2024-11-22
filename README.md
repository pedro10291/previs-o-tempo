![Captura de Tela 2024-11-21 às 17 46 28](https://github.com/user-attachments/assets/56d4d6d3-0c97-4975-9f56-089a138002e9)
### Descrição
Este projeto web utiliza a API da OpenWeatherMap para fornecer informações detalhadas sobre a previsão do tempo para qualquer cidade do mundo. O usuário pode inserir o nome da cidade e obter dados como temperatura, umidade, condição do tempo e muito mais.

### Tecnologias Utilizadas
* HTML
* CSS
* JavaScript
* OpenWeatherMap API

### Como Funciona
1. **Busca da Cidade:** O usuário digita o nome da cidade no campo de entrada e clica no botão de busca.
2. **Requisição à API:** O JavaScript envia uma requisição à API da OpenWeatherMap para obter os dados meteorológicos da cidade especificada.
3. **Exibição dos Resultados:** Os dados recebidos da API são processados e exibidos na interface do usuário de forma clara e concisa.

### HTML
```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <script src="script.js"></script>
    <link
      href="[https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css](https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css)"   

      rel="stylesheet"
    />
    <link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)"   
 />
    <link rel="preconnect" href="[https://fonts.gstatic.com](https://fonts.gstatic.com)"   
 crossorigin />
    <link
      href="[https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap](https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap)"   

      rel="stylesheet"
    />
    <title>Previsão do tempo</title>
  </head>
  <body>
    </body>
</html>
```
### <HTML>
## Análise Detalhada

* **`<meta charset="UTF-8" />`:** Garante que a página possa exibir caracteres especiais.
* **`<meta name="viewport" ...>`:** Ajusta a página para diferentes tamanhos de tela, tornando-a responsiva.
* **`<link rel="stylesheet" href="style.css" />`:** Conecta um arquivo CSS externo para estilizar a página.
* **`<script src="script.js"></script>`:** Conecta um arquivo JavaScript externo para adicionar interatividade.
* **`<link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />`:** Importa ícones da biblioteca Boxicons.
* **`<link rel="preconnect" href="https://fonts.googleapis.com" />`:** Pré-conecta ao servidor de fontes do Google para melhorar o carregamento.
* **`<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />`:** Importa a fonte Open Sans.

## Funcionalidades

* **Busca por cidade:** O usuário pode digitar o nome da cidade e clicar no botão para obter as informações meteorológicas.
* **Exibição dos resultados:** A página mostra a temperatura mínima, máxima, umidade e uma imagem relacionada às condições climáticas.
* **Personalização:** A aparência da página é definida pelo arquivo CSS, e a lógica da busca e exibição dos dados é implementada no JavaScript.

A seção de resultados é composta por:

* **Temperatura:**
    * Mínima
    * Máxima
* **Umidade:** Valor numérico com o símbolo de porcentagem.
* **Condição climática:** Imagem representativa e descrição textual (ex: "Nublado", "Ensolarado").

======================================================================================================


### CSS    
```CSS
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
}
body{
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    background-size: 1920px;
}
.caixa-maior{
    background-color: #000000;
    opacity: 0.8;
    border-radius: 25px;
    padding: 20px;
    width: 95%;
    max-width: 450px;
}
input{
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 25px;
    font-size: 20px;
    background-color: rgba(42, 43, 10, 0.439);
    color: white;
    width: calc(100% - 100px);
}
button{
    border-radius: 50px;
    border: none;
    outline: none;
    padding: 9px ;
    cursor: pointer;
    float: right;
    background-color: #000000;
    opacity: 0.8;
}
i{
    background-color: #000000;
    opacity: 0.8;
    font-size: 30px;
    color: rgb(255, 255, 255);
}
.caixa-media{
    margin-top: 30px;
}
.altera{
    color: white;
    font-size: 25px;
    font-weight: 300;
}
.container{
    display: flex;
    justify-content: space-around;
    gap: 20px
}
.tempmin{
    font-size: 20px;
    color: white;
    margin-top: 20px;
}
.tempmax{
    font-size: 20px;
    color: white;
    margin-top: 20px;
}
.caixa-menor{
    display: flex;
    align-items: center;
    margin-top: 20px;
}
.txt-previsao{
    color: white;
    margin-left: 20px;
    text-transform: capitalize;
}
.umidade{
    color: white;
    margin-top: 20px;
}
```

## Análise Detalhada do CSS

### Estilos Globais
* **Reset:** Zera as margens, preenchimentos e define o modelo de caixa para todos os elementos, garantindo um ponto de partida consistente.
* **Fonte:** Define a fonte padrão para todo o documento, proporcionando uma aparência uniforme.

### Estilo do Corpo
* **Dimensões:** Define a altura e largura do corpo para ocupar toda a viewport.
* **Flexbox:** Utiliza Flexbox para centralizar o conteúdo.
* **Fundo:** Aplica uma imagem de fundo e define seu tamanho.

### Estilos de Componentes
* **Containers:** Agrupa seletores para definir estilos comuns a vários elementos (`.caixa-maior`, `.caixa-media`, etc.).
* **Elementos Específicos:** Define estilos específicos para cada elemento, como cores, tamanhos e posicionamento.

======================================================================================================

### JavaScritpt
```javascript
const key= "392cca6b3d2eacb9d20e8bfaf2434a"
window.onload = function() {
    buscarCidade('Itapevi'); 


};

function DadosNaTela(dados){
    console.log(dados)
    document.querySelector(".altera").innerHTML = `Tempo em ${dados.name} ${Math.floor(dados.main.temp)}°C`;
    document.querySelector(".tempmin").innerHTML = "Min " + Math.floor(dados.main.temp_min) + "°C";
    document.querySelector(".tempmax").innerHTML = "Max " + Math.floor(dados.main.temp_max) + "°C";
    document.querySelector(".txt-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    
}

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())  

    
    DadosNaTela(dados)
}

function lupa(){
    const cidade = document.querySelector(".cidade").value

    buscarCidade(cidade)
}
```
## Análise do Código JavaScript

**Objetivo:**
O código busca informações meteorológicas de uma cidade específica utilizando a API OpenWeatherMap e exibe os dados na página HTML.

**Funcionamento:**
1. **Chave API:** A constante `key` armazena a chave de acesso à API OpenWeatherMap.
2. **Carregamento da Página:** Ao carregar a página, a função `buscarCidade` é chamada com a cidade "Itapevi" como padrão.
3. **Busca da Cidade:** A função `buscarCidade` realiza uma requisição à API utilizando a função `fetch` e exibe os dados na tela.
4. **Atualização da Interface:** A função `DadosNaTela` atualiza os elementos HTML com os dados da previsão do tempo.

**Pontos Chave:**
* **Async/Await:** O uso de `async/await` torna o código mais legível e fácil de entender.
* **Manipulação de Dados:** Os dados da API são parseados e exibidos de forma clara na interface.
* **Eventos:** O evento `onload` é utilizado para executar a busca inicial.

![Animação legal](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTdhOWVpb20xYnlqZzIwNXN5MjVqcGxmMDVlc2NhZHlzMTJyYm5rZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CTX0ivSQbI78A/giphy.gif)
