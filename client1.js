const NATS = require('./nats');
// const servers = ['nats://nats.io:4222', 'nats://nats.io:5222', 'nats://nats.io:6222']
const nats = NATS.connect({json: true});

nats.on('error', (e) => {
  console.error('Error [' + nats.currentServer + ']: ' + e)
  //process.exit()
});

nats.on('connect', () => {
  console.log("Client1 is running...");
  global.setInterval(() => nats.publish("ping", "Hello from client1"), 3000);
  nats.subscribe("pong", (msg)=>{
    console.log("Client1 got a pong:", msg);
  });
});

