const NATS = require('./nats');
const nats = NATS.connect({json: true});

nats.subscribe("ping", (msg)=>{
  console.log("Server1 got a ping", msg);
  nats.publish("pong", "Hello from server1");
});

console.log("Server1 is running...");
