import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import axios from 'axios';





// Init VK  Mini App
bridge.send("VKWebAppInit");

function tick() {

  // highlight-next-line
  ReactDOM.render(<App />, document.getElementById("root"));
  if (process.env.NODE_ENV === "development") {
    import("./eruda").then(({ default: eruda }) => {}); //runtime download
  }
}

setInterval(tick, 1000);



bridge.send("VKWebAppGetPhoneNumber", {

  
});





  // highlight-next-line