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

//bridge.send("VKWebAppJoinGroup", {"group_id": 198236346});
//bridge.send("VKWebAppAllowMessagesFromGroup", {"group_id": 198236346, "key": "cc964fabb0e1d70924a92e4e8b513dbff7cc10a9"});

bridge.send("VKWebAppDenyMessagesFromGroup", {"group_id": 198236346});

//bridge.send("VKWebAppLeaveGroup", {"group_id": 198236346});

  // highlight-next-line
