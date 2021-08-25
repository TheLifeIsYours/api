import app from './app';
import http from 'http'

const httpServer = http.createServer(app);
httpServer.listen(process.env.PORT);