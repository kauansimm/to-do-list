const pages = import.meta.glob('../pages/**/page.tsx', { eager: true });

const routesconfig = Object.keys(pages).map((path) => {
  const match = path.match(/\/pages\/(.*?)\/page.tsx/); // Extrai o nome da pasta
  const routePath = match ? `/${match[1]}` : '/'; // Define a rota a partir da pasta

  return {
    path: routePath.toLowerCase(), // Ex: /cadastro, /dashboard, /home
    component: (pages[path] as any).default, // Importa o componente
  };
});

export default routesconfig;
