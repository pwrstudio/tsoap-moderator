<script>
  // # # # # # # # # # # # # #
  //
  //  TSoaP Moderator
  //
  // # # # # # # # # # # # # #

  // IMPORTS
  import { onMount } from "svelte";
  import * as Colyseus from "colyseus.js";
  import get from "lodash/get";
  import { fade, fly } from "svelte/transition";
  import Chance from "chance";
  const chance = new Chance();

  // GLOBAL
  import { houseList, KEYBOARD, WIDTH, HEIGHT } from "./global.js";

  // COMPONENTS
  import Chat from "./Chat.svelte";
  import UserList from "./UserList.svelte";

  let localPlayers = {};
  let chatMessages = [];
  let moveQ = [];

  // COLYSEUS
  // const client = new Colyseus.Client("ws://localhost:2567");
  const client = new Colyseus.Client("ws://18.194.21.39:2567");

  const colorTrans = ["WHITE", "BLACK", "YELLOW", "RED", "GREEN", "BLUE"];

  // FUNCTIONS
  let submitChat = () => {};

  // CREATE PLAYER
  const createPlayer = (player, sessionId) => {
    let avatar = {};
    avatar.x = player.x;
    avatar.y = player.y;
    avatar.waypoints = [];
    avatar.area = player.area;
    avatar.tint = player.tint;
    avatar.name = player.name;
    avatar.uuid = player.uuid;
    avatar.ip = player.ip;
    avatar.connected = player.connected;
    avatar.id = sessionId;
    return avatar;
  };

  onMount(async () => {
    // => GAME ROOM
    client
      .joinOrCreate("game", {
        moderator: true,
        uuid: chance.guid(),
        name: "Moderator",
        avatar: 0,
        tint: "0x000000"
      })
      .then(gameRoom => {
        // REMOVE
        gameRoom.state.players.onRemove = function(player, sessionId) {
          console.log("REMOVE");
          console.dir(localPlayers[sessionId]);
          delete localPlayers[sessionId];
          // FORCE RENDER
          localPlayers = localPlayers;
        };

        // ADD
        gameRoom.state.players.onAdd = function(player, sessionId) {
          localPlayers[sessionId] = createPlayer(player, sessionId);
        };

        // STATE CHANGE
        gameRoom.state.players.onChange = function(player, sessionId) {
          if (player.path.waypoints.length > 0) {
            moveQ[sessionId] = player.path.waypoints;
          }
        };

        // ERROR
        gameRoom.onError((code, message) => {
          console.error("!!! COLYSEUS ERROR:");
          console.error(message);
        });
      })
      .catch(e => {
        console.log("GAME ROOM: JOIN ERROR", e);
      });

    // => CHAT ROOM
    client
      .joinOrCreate("chat")
      .then(chatRoom => {
        // CHANGE
        chatRoom.onStateChange(state => {
          chatMessages = state.messages;
        });

        // ERROR
        chatRoom.onError((code, message) => {
          console.error(message);
        });

        // SUBMIT CHAT
        // submitChat = event => {
        //   chatRoom.send("submit", {
        //     msgId: chance.guid(),
        //     uuid: $localUserUUID,
        //     name: $localUserName,
        //     text: event.detail.text,
        //     tint: $localUserTint
        //   });
        // };
      })
      .catch(e => {
        console.log("CHAT ROOM: JOIN ERROR", e);
      });
  });
</script>

<style lang="scss" global>
  @import "./variables.scss";

  * {
    box-sizing: border-box;
  }

  .userlist-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    padding: 20px;
    background: lightgray;
  }

  .chat-container {
    position: fixed;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    padding: 20px;
    background: #e4e4e4;
  }
</style>

<!-- USER LIST -->
<div class="userlist-container">
  <UserList playerList={localPlayers} />
</div>

<!-- CHAT -->
<div class="chat-container">
  <Chat {chatMessages} />
</div>
