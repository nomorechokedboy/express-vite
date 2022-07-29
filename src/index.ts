import { createServer, Server } from 'http';
import { app, NODE_ENV, PORT } from './configs';

if (import.meta.env.PROD) {
  const http: Server = createServer(app);

  http.on('error', (e: Error) => {
    if (e) throw e;
  });

  http.listen(PORT || 5000, () => {
    const isDev = NODE_ENV === 'development';
    const domain = `http${!isDev ? 's' : ''}://${
      isDev ? 'localhost' : 'slearning.tk'
    }`;

    console.log(`Slearning backend is running on ${domain}:${PORT}`);
  });
}

export const viteNodeApp = app;
