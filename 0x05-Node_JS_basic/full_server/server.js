import express from 'express';
import allRoutes from './routes';

/**
 * Small Express server
 */

const PORT = 1245;
const app = express();

allRoutes(app);

app.listen(PORT, () => {
  console.log(`************🖥 HTTP server listening on port ${PORT} 💻************`);
});

export default app;
