import { GameManager } from './GameManager';
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

const gameManager = new GameManager();

wss.on('connection', function connection(ws) {
  gameManager.addUser(ws);

  // ws.on('message', function message(data) {
  //   console.log('received: %s', data);
  // });

  ws.on("disconnect", () => {
    gameManager.removeUser(ws);
  })
  
  ws.send('something');

});