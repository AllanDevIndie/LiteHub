# LiteHub OS

Protótipo interno da LiteHub para organizar a operação comercial, metodológica e operacional de clientes.

## Acesso online

Você pode acessar o projeto publicado em:

**[Abrir LiteHub OS](https://allandevindie.github.io/LiteHub/)**

## Sobre o projeto

O LiteHub OS é uma aplicação web estática criada para validar processos antes da construção de um sistema completo. A ferramenta centraliza informações de clientes, etapas do funil, metodologia SALTO, documentos operacionais e rotinas de backup.

## Funcionalidades

- Visão geral com indicadores de clientes, ciclos, oportunidades comerciais e riscos.
- Cadastro e edição de clientes.
- Classificação por status, estágio, complexidade, saúde e produto.
- Registro de Ponto A, Ponto B, módulos ativos e links úteis.
- Referência rápida da metodologia SALTO.
- Templates operacionais vinculados a cada cliente.
- Fluxo do cliente, da prospecção ao offboarding.
- Exportação e importação de dados em JSON.
- Documentação completa da operação em uma página separada.
- Persistência local usando `localStorage`.

## Metodologia SALTO

O projeto organiza a operação a partir de cinco pilares:

- **S — Situação:** entender o cenário atual e os principais gargalos.
- **A — Atração:** trabalhar mensagem, oferta, posicionamento e criativos.
- **L — Leads & Aquisição:** definir como novas oportunidades chegam.
- **T — Tecnologia:** estruturar CRM, tracking, WhatsApp, automações e integrações.
- **O — Otimização:** analisar resultados e definir o próximo movimento.

## Estrutura do projeto

```text
LiteHub/
├── index.html          # Aplicação principal
├── style.css           # Estilos da aplicação principal
├── script.js           # Navegação, clientes, templates e persistência local
├── documentacao.html   # Manual operacional e metodológico
├── styledoc.css        # Estilos da página de documentação
└── README.md           # Documentação do projeto
```

## Como executar localmente

Como o projeto utiliza apenas HTML, CSS e JavaScript, não é necessário instalar dependências.

1. Clone ou baixe este repositório.
2. Abra a pasta do projeto no VS Code.
3. Abra o arquivo `index.html` no navegador.

Para uma experiência melhor, também é possível usar uma extensão como **Live Server** no VS Code.

## Dados e backup

Os dados são armazenados localmente no navegador por meio de `localStorage`. Isso significa que eles não são compartilhados automaticamente entre dispositivos ou navegadores.

Recomendações:

- Faça backups frequentes pela aba **Backup & Dados**.
- Guarde os arquivos JSON exportados em um local seguro.
- Importe um backup para restaurar os dados em outro navegador.
- Evite limpar os dados do site sem possuir um backup atualizado.

## Tecnologias

- HTML5
- CSS3
- JavaScript puro
- `localStorage` para persistência local
- GitHub Pages para publicação

## Status

O projeto está em fase de prototipação e validação interna. Os processos, templates e critérios podem ser ajustados conforme o uso real com clientes e dados operacionais.

## Licença

Projeto de uso interno da LiteHub.
