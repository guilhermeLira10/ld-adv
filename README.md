# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## Envio De Leads

O formulário de contato usa Web3Forms por padrão, com plano gratuito e sem backend próprio. Para testar localmente, crie um `.env` com:

```bash
VITE_LEAD_ENDPOINT=https://api.web3forms.com/submit
VITE_LEAD_ACCESS_KEY=<sua-access-key>
```

Depois rode `npm run dev`, preencha o formulário e envie. Se a access key estiver correta, o lead seguirá para o e-mail configurado na conta Web3Forms.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
