<script>
  // # # # # # # # # # # # # #
  //
  //  CHAT MESSAGE
  //
  // # # # # # # # # # # # # #

  // IMPORTS
  import { fade } from "svelte/transition"
  import get from "lodash/get"

  import { Button, Tile } from "carbon-components-svelte"

  // GLOBALS
  import { formattedDate } from "./global.js"

  // PROPS
  export let message = {}

  // STORES
  import { gameRoom } from "./stores.js"

  // console.dir(message)

  // VARIABLES
  let removed = false

  const removeMessage = () => {
    // console.log("__ CLICKED TO REMOVE REMOVE =>", message.msgId, message)
    $gameRoom.send("removeChatMessage", {
      msgId: message.msgId,
    })
    removed = true
  }
</script>

<style lang="scss">
  @import "./variables.scss";

  .chat-message {
    margin-bottom: 10px;
    padding-bottom: 10px;
    font-size: $font_size_normal;

    .meta {
      width: 100%;
      display: inline-block;

      .name {
        font-weight: bold;
        float: left;
      }

      .date {
        float: right;
        color: black;
      }
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid grey;
    padding-bottom: 2em;

    .body {
      margin-top: 1em;
      // font-size: 1.2rem;
    }
  }

  code {
    font-size: 0.65rem;
  }

  .broadcast {
    background: lightyellow;
  }

  .narrowcast {
    background: lightgreen;
  }
</style>

<div transition:fade|local>
  <Tile>
    <div class="container" class:broadcast={message.directed && message.directedTo === 'all'} class:narrowcast={message.directed && message.directedTo !== 'all'} >
      <div class="meta">
        <div class="date">
          <code>{formattedDate(message.timestamp)} => Room {(message.directed && message.directedTo !== 'all') ? message.directedTo : message.room}</code>
        </div>
        <div class="name"><strong>{message.name}</strong></div>
        <div class="body">{message.text}</div>
      </div>
      <div>
        <Button size="small" kind="danger" on:click={removeMessage}>
          Remove
        </Button>
      </div>
    </div>
  </Tile>
</div>
