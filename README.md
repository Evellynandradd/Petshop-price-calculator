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

1. **React:**
   - Utilizei React para a construção do front-end como instruido.

2. **Estado Local:**
   - Gerenciei o estado local do React (`useState`) para controlar os dados do formulário e os resultados do cálculo.

3. **Axios:**
   - Utilizei a biblioteca axios para fazer chamadas à API do servidor back-end pela sua simplicidade e suporte a Promises.

4. **Formulário:**
   - Organizei os campos de entrada em um formulário para facilitar a submissão e evitar recargas da página.

## O que mais é importante compartilhar sobre o projeto

1. **Estrutura do Projeto:**
   - Segui a estrutura padrão do Create React App, com componentes em `src/components`.

2. **Estilo:**
   - Optei por adotar um estilo mais simples para a interface de usuário. A simplicidade visa garantir uma implementação rápida e funcional, concentrando-se na eficácia das funcionalidades.
