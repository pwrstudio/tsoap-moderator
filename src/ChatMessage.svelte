<script>
  // # # # # # # # # # # # # #
  //
  //  Chat Message
  //
  // # # # # # # # # # # # # #

  // IMPORTS
  import { fade } from 'svelte/transition'
  import get from 'lodash/get'

  // GLOBALS
  import { formattedDate } from './global.js'

  // PROPS
  export let message = {}

  // STORES
  import { gameRoom } from './stores.js'

  console.dir(message)

  // VARIABLES
  let removed = false

  const removeMessage = () => {
    console.dir(message.msgId)
    $gameRoom.send('removeChatMessage', {
      msgId: message.msgId,
    })
    removed = true
  }
</script>

<style lang="scss">
  @import './variables.scss';

  .chat-message {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid $lightgrey;
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

      .color-code {
        height: 1em;
        width: 1em;
        border-radius: 1em;
        margin-right: 0.35em;
        float: left;
      }
    }

    .body {
      font-size: $font_size_normal;
    }
  }

  .remove {
    font-size: $font_size_small;
    margin-left: 10px;
    background: lightcoral;
    cursor: pointer;
  }

  .removed {
    background: lightgreen;
  }
</style>

<div class="chat-message" transition:fade>
  <div class="meta">
    <span
      class="color-code"
      style={'background-color:' + get(message, 'tint', '0XFF0000').replace('0X', '#')} />
    <span class="name">{message.name}</span>
    <span class="date">{formattedDate()}</span>
    <button class="remove" class:removed on:click={removeMessage}>
      {#if removed}Done{:else}Remove{/if}
    </button>

  </div>
  <div class="body">{message.text}</div>
</div>
