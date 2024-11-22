const apiKey = "392cca6b3d2eacb9d20e8bfaf2434a3c";
const cacheTempoValidade = 30 * 60 * 1000; // 30 minutos em milissegundos
let cachedData = null;

async function buscarPorGeolocalizacao() {
  if (navigator.geolocation) {
    try {
      // Tenta personalizar a mensagem de permissão (pode não funcionar em todos os navegadores)
      const permission = await navigator.permissions.query({ name: 'geolocation' });
      if (permission.state === 'prompt') {
        const userChoice = await new Promise((resolve) => {
          // Exibe sua própria mensagem personalizada aqui
          if (confirm("Este site gostaria de usar sua localização para exibir o clima. Permitir?")) {
            resolve(true);
          } else {
            resolve(false);
          }
        });

        if (!userChoice) {
          exibirMensagemErro("Permissão de localização negada. Para ver o clima da sua localização atual, por favor, permita o acesso à localização nas configurações do seu navegador.");
          return;
        }
      }

      navigator.geolocation.getCurrentPosition(
        (posicao) => {
          const latitude = posicao.coords.latitude;
          const longitude = posicao.coords.longitude;
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=pt_br&units=metric`;

          buscarDadosClimaticos(apiUrl);
        },
        (erro) => {
          console.error("Erro ao obter a localização:", erro);
          if (erro.code === erro.PERMISSION_DENIED) {
            exibirMensagemErro("Permissão de localização negada. Para ver o clima da sua localização atual, por favor, permita o acesso à localização nas configurações do seu navegador.");
          } else {
            exibirMensagemErro("Erro ao obter a localização. Por favor, tente buscar por nome da cidade.");
          }
        }
      );

    } catch (error) {
      console.error("Erro ao solicitar permissão de localização:", error);
      exibirMensagemErro("Erro ao obter a localização. Por favor, tente buscar por nome da cidade.");
    }
  } else {
    console.log("Geolocalização não é suportada por este navegador.");
    exibirMensagemErro("Geolocalização não é suportada por este navegador. Por favor, tente buscar por nome da cidade.");
  }
}

async function buscarCidade(cidade) {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt_br&units=metric`;
    exibirCarregamento();
    const dados = await fetch(apiUrl).then((resposta) => resposta.json());

    if (dados.name) {
      atualizarInterface(dados);
    } else {
      exibirMensagemErro("Cidade não encontrada.");
    }
  } catch (error) {
    console.error("Erro ao buscar a cidade:", error);
    exibirMensagemErro("Ocorreu um erro ao buscar a cidade.");
  } finally {
    ocultarCarregamento();
  }
}

function atualizarInterface(dados) {
  document.querySelector(".altera").innerHTML = `Tempo em ${dados.name} ${Math.floor(dados.main.temp)}°C`;
  document.querySelector(".tempmin").innerHTML = "Min " + Math.floor(dados.main.temp_min) + "°C";
  document.querySelector(".tempmax").innerHTML = "Max " + Math.floor(dados.main.temp_max) + "°C";
  document.querySelector(".txt-previsao").innerHTML = dados.weather[0].description;
  document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + "%";
  document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

function exibirMensagemErro(mensagem) {
  // Lógica para exibir a mensagem de erro na interface
  alert(mensagem);
}

function exibirCarregamento() {
  // Lógica para exibir o indicador de carregamento
}

function ocultarCarregamento() {
  // Lógica para ocultar o indicador de carregamento
}

function lupa() {
  const cidade = document.querySelector(".cidade").value;
  buscarCidade(cidade);
  document.querySelector(".cidade").value = "";
}
