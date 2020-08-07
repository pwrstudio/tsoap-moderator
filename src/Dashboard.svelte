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
  import BlackList from "./BlackList.svelte";

  let localPlayers = {};
  let blackList = [];
  let chatMessages = [];
  let moveQ = [];

  // STORES
  import { gameRoom, chatRoom } from "./stores.js";

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
    gameRoom.set(
      await client.joinOrCreate("game", {
        moderator: true,
        uuid: chance.guid(),
        name: "Moderator",
        avatar: 0,
        tint: "0x000000"
      })
    );

    // GAME ROOM: REMOVE
    $gameRoom.state.players.onRemove = function(player, sessionId) {
      console.log("REMOVE");
      console.dir(localPlayers[sessionId]);
      delete localPlayers[sessionId];
      // FORCE RENDER
      localPlayers = localPlayers;
    };

    // GAME ROOM: ADD
    $gameRoom.state.players.onAdd = function(player, sessionId) {
      localPlayers[sessionId] = createPlayer(player, sessionId);
    };

    // GAME ROOM: PLAYER STATE CHANGE
    $gameRoom.state.players.onChange = function(player, sessionId) {
      if (player.path.waypoints.length > 0) {
        moveQ[sessionId] = player.path.waypoints;
      }
    };

    // GAME ROOM: Blacklist STATE CHANGE
    $gameRoom.state.blacklist.onAdd = function(bannedIP, sessionId) {
      blackList = [...blackList, bannedIP];
    };

    // GAME ROOM: Blacklist STATE CHANGE
    $gameRoom.state.blacklist.onRemove = function(unBannedIP, sessionId) {
      blackList = blackList.filter(ip => ip.address !== unBannedIP.address);
    };

    // GAME ROOM: ERROR
    $gameRoom.onError((code, message) => {
      console.error("!!! COLYSEUS ERROR:");
      console.error(message);
    });

    // => CHAT ROOM
    chatRoom.set(await client.joinOrCreate("chat"));

    // CHAT ROOM: CHANGE
    $chatRoom.onStateChange(state => {
      chatMessages = state.messages;
    });

    // CHAT ROOM: ERROR
    $chatRoom.onError((code, message) => {
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
  });
</script>

<style lang="scss" global>
  @import "./variables.scss";

  * {
    box-sizing: border-box;
  }

  .dashboard {
    display: flex;
    flex-wrap: wrap;
  }

  .userlist-container {
    width: 100%;
    height: 50vh;
    border-bottom: 1px solid grey;
    padding: 20px;
    background: lightgray;
  }

  .chat-container {
    border-right: 1px solid grey;
    width: 50%;
    height: 50vh;
    padding: 20px;
    background: #e4e4e4;
  }

  .blacklist-container {
    width: 50%;
    height: 50vh;
    padding: 20px;
    background: #e4e4e4;
  }
</style>

<div class="dashboard">

  <!-- USER LIST -->
  <div class="userlist-container">
    <UserList playerList={localPlayers} />
  </div>

  <!-- CHAT -->
  <div class="chat-container">
    <Chat {chatMessages} />
  </div>

  <!-- BLACKLIST -->
  <div class="blacklist-container">
    <BlackList {blackList} />
  </div>

</div>
