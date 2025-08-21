# Prostore

O projeto Prostore se trata de um website desenvolvido para o curso de <b>'Next.js Ecommerce 2025 - Shopping Platform From Scratch'</b>. O sistema contempla um e-commerce completo, com gateways de pagamento, promoções, gerenciamento de produtos e usuários e muitas outras utilidades.

## Tecnologias Utilizadas :hammer:
* [Typescript](https://www.typescriptlang.org/) - Linguagem
* [NextJS](https://nextjs.org/) - Framework fullstack
* [Tailwind](https://styled-components.com/) - Framework CSS
* [Neon](https://neon.com/) - Base de dados
* [Vercel](https://vercel.com/) - Serviço de hospedagem
* [Uploadthing](https://uploadthing.com/) - Hospedagem de upload de arquivos
* [Resend](https://resend.com/) - Ferramenta de envio de emails 


## Dependências :arrow_up:
    Node - Versão: ^v22.14.0
    Npm - Versão: ^10.9.2

Bibliotecas utilizadas: [package.json](./package.json)

## Como executar o projeto :mortar_board:

Certifique-se de possuir o <b>git</b> instalado e configurado, além de um editor de texto compatível, recomendamos o <b>Visual Studio Code</b>.

#### 🔴 1. Clonar Repositório
No terminal, primeiro selecione um diretório o qual você irá adicionar o projeto, então execute o seguinte comando abaixo. Em seguida você pode abrir o projeto com o editor de sua preferência.

    git clone https://github.com/daniwells/Prostore_Course.git

#### 🔴 2. Instalar dependências
Certifique-se de possuir o NPM e o Node configurados. Na raiz do proejeto navegue até o diretório frontend e realize a instalação das dependências.

    npm install --legacy-peer-deps

#### 🔴 3. Configurar Ambientes Terceiros
O sistema Arquiteto do Brownie está integrando com três ferramentas necessárias para o seu funcionamento, sendo elas:
* Vercel - Para a hospedagem e gerenciamento do app;
* Neon - Para a base de dados na nuvem;
* Uploadthing - Para o gerenciamento das imagens dos produtos;
* Resent - Para envio de emails.

Para seguir em frente você deverá configurar as ferramentas acima, é possível seguindo as documentações oficiais de cada uma. Após feita as configurações necessárias, você deve preencher as variáveis de ambiente com as informações requeridas.

<img width="772" height="862" alt="image" src="https://github.com/user-attachments/assets/a82837d8-7aca-460f-bd64-96af6c10e4b9" />

#### 🔴 4. Executar localhot
Depois de tudo, você pode executar o sistema, então garanta que esteja na raiz do projeto e execute o comando:

    npm run dev

Com isso você pode conferir o site em execução localhost.

## Licença :page_with_curl:

Esta minha versão do sistema Prostore está sob a licença [MIT LICENSE](LICENCE).

