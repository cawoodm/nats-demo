const NATS = require('nats');
const nats = NATS.connect({json: true});

nats.on('error', (e) => {
  console.error('Error [' + nats.currentServer + ']: ' + e)
  //process.exit()
});

nats.on('connect', () => {
  nats.subscribe("ping", (msg)=>{
    console.log("Server1 got a ping:", msg);
    nats.publish("pong", "Hello from server1");
  });
});
