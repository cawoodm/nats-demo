const NATS = require('./nats');
const nats = NATS.connect({json: true});

nats.publish("ping", "Hello from client1");

nats.subscribe("pong", (msg)=>{
  console.log("Client1 got a pong");
});

console.log("Client1 is running...");
