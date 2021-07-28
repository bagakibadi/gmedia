import Vue from "vue";

const url = "wss://gmedia-chat.primakom.co.id/websocket";
let socket;

const emitter = new Vue({
  methods: {
    send(message) {
      if (1 === socket.readyState) socket.send(message);
    },
    close() {
      if (1 === socket.readyState) {
        emitter.$emit("message", "Closing Socket.");
        socket.close();
        socket = null; // prevent memory leak
      }
    },
    connect() {
      socket = new WebSocket(url);
      socket.onmessage = function(msg) {
        emitter.$emit("message", msg.data);
      };
      socket.onerror = function(err) {
        emitter.$emit("error", err);
      };
      emitter.$emit("message", "Openning Socket.");
    }
  }
});

emitter.connect();

export default emitter;