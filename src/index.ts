import { createServer, Server } from 'http';
import { app, PORT } from './configs';

const http: Server = createServer(app);

http.on('error', (e: Error) => {
  if (e) throw e;
});

http.listen(PORT || 5000, () => {
  console.log(`Slearning backend is running on http://localhost:${PORT}`);
});
