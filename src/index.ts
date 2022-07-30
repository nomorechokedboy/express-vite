import { createServer, Server } from 'http';
import { app, PORT } from './configs';

if (import.meta.env.PROD) {
  const http: Server = createServer(app);

  http.on('error', (e: Error) => {
    if (e) throw e;
  });

  http.listen(PORT || 5000, () => {
    console.log(`Slearning backend is running on https://slearning.tk:${PORT}`);
  });
}

export const viteNodeApp = app;
