# Calculadora de preços de petshop

## Instruções para executar o sistema

1. **Instalação:**
   - Certifique-se de ter o Node.js instalado: [Node.js](https://nodejs.org/)
   - Clone o repositório: `git clone https://seu-repositorio.git`
   - Navegue até o diretório do projeto:
   - Instale as dependências: `npm install`

2. **Configuração do Back-End:**
   - Certifique-se de ter um servidor back-end configurado para lidar com as requisições. Ajuste a URL do back-end em `src/components/InputForm.js` no trecho onde usa o axios: `axios.post('URL_DO_BACKEND/api/calculate', ...)`

3. **Execução do Sistema:**
   - Inicie o servidor de desenvolvimento: `npm start`
   - Abra o navegador e acesse [http://localhost:3000](http://localhost:3000)

## Decisões de Projeto

### React

Utilizei a biblioteca React para a construção do front-end, seguindo as instruções do teste. O React é escolhido por sua eficiência na criação de interfaces de usuário interativas.

### Estado Local

Gerenciei o estado local do React utilizando o hook `useState`. Isso permitiu o controle eficiente dos dados do formulário e dos resultados do cálculo diretamente no componente.

### Requisições HTTP com Axios

Para realizar chamadas à API do servidor back-end, optei por utilizar a biblioteca Axios devido à sua simplicidade e suporte a Promises. Isso facilita a comunicação entre o front-end e o back-end, garantindo uma integração suave.

### Formulário

Organizei os campos de entrada em um formulário para facilitar o envio dos dados ao servidor e evitar recargas da página. O uso de formulários em conjunto com JavaScript facilita a manipulação dinâmica dos dados.

### Linguagem JavaScript

Todo o código foi implementado em JavaScript, aproveitando o ambiente oferecido pelo React.


## O que mais é importante compartilhar sobre o projeto

1. **Estrutura do Projeto:**
   - Segui a estrutura padrão do Create React App, com componentes em `src/components`.

2. **Estilo:**
   - Optei por adotar um estilo mais simples para a interface de usuário. A simplicidade visa garantir uma implementação rápida e funcional, concentrando-se na eficácia das funcionalidades.
