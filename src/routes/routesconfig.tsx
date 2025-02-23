const pages = import.meta.glob('../pages/**/page.tsx', { eager: true });

const routesconfig = Object.keys(pages).map((path) => {
  const match = path.match(/\/pages\/(.*?)\/page.tsx/);
  const routePath = match ? `/${match[1]}` : '/';

  return {
    path: routePath.toLowerCase(),
    component: (pages[path] as any).default,
  };
});

export default routesconfig;
