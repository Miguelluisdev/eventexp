# EventExperience(EM DESENVOLVIMENTO)

## Descrição do Projeto
EventExperience é uma aplicação web para gerenciamento de eventos, construída utilizando tecnologias modernas para oferecer uma experiência de usuário rica e intuitiva. A plataforma permite a criação, gerenciamento e participação em eventos, com funcionalidades de autenticação, busca, filtragem, categorias, checkout e pagamentos não possui muito foco na estilização , pois o foco é na implementação das funcionalidades requeridas , ao fim do projeto pretendo aplicar metodologias como principios solid e design paterns para melhorar a visibilidade do codigo e manutenção do codigo.

## Tecnologias Utilizadas
- **Next.js 14:** Framework React para produção, com suporte a renderização híbrida estática e dinâmica, roteamento inteligente e muito mais.
- **Tailwind CSS:** Framework de CSS utilitário para estilização rápida e eficiente.
- **Shadcn:** Biblioteca de componentes acessíveis e reutilizáveis para React.
- **React Hook Form:** Biblioteca para gerenciamento de formulários em React, focada em desempenho e facilidade de uso.
- **Zod:** Biblioteca de validação de esquemas para TypeScript e JavaScript.
- **Uploadthing:** Solução para upload de arquivos.
- **React-Datepicker:** Componente de seleção de data para React.
- **Mongoose:** Biblioteca de modelagem de dados para MongoDB e Node.js.
- **Clerk:** Serviço de autenticação e gerenciamento de usuários.
- **Stripe:** Plataforma de pagamentos online.

## Funcionalidades
ao fim do projeto serão preenchidas

## Como Executar o Projeto

### Pré-requisitos
- Node.js v14 ou superior
- Yarn ou npm

### Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/EventExperience.git
   cd EventExperience
   ```

2. Instale as dependências:
   ```bash
   yarn install
   # ou
   npm install
   ```

### Configuração
1. Crie um arquivo `.env.local` na raiz do projeto e configure as variáveis de ambiente necessárias:
   ```env
   # NEXT
   NEXT_PUBLIC_SERVER_URL=

   # CLERK
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_CLERK_WEBHOOK_SECRET=

   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

   # MONGODB
   MONGODB_URI=

   # UPLOADTHING
   UPLOADTHING_SECRET=
   UPLOADTHING_APP_ID=

   # STRIPE
   STRIPE_SECRET_KEY=
   STRIPE_WEBHOOK_SECRET=
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
   ```

2. Preencha as variáveis de ambiente com as informações apropriadas de acordo com suas configurações de API e serviços.

### Executando o Projeto
1. Inicie o servidor de desenvolvimento:
   ```bash
   yarn dev
   # ou
   npm run dev
   ```

2. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação em execução.

## Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
