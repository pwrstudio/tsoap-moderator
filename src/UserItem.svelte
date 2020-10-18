<script>
  // # # # # # # # # # # # # #
  //
  //  User list item
  //
  // # # # # # # # # # # # # #

  // IMPORTS
  import { fade } from "svelte/transition"

  // PROPS
  export let player = {}
  export let header = false

  let banned = false

  // STORES
  import { gameRoom, chatRoom } from "./stores.js"

  const addToBlackList = () => {
    // $chatRoom.send("blacklist", {
    //   ip: player.ip
    // });
    $gameRoom.send("blacklist", {
      address: player.ip,
    })
    banned = true
  }

  console.dir(player)
</script>

<style lang="scss">
  @import "./variables.scss";

  .user-item {
    width: 100%;
    display: flex;
    margin-bottom: 5px;
    border-bottom: 1px solid $lightgrey;
    line-height: 1em;
    font-size: $font_size_normal;
    text-align: left;
    padding: 5px;

    opacity: 1;

    &.active {
      opacity: 1;
    }

    div {
      width: 16%;
      white-space: nowrap;
      overflow: hidden;
      padding: 5px;
      text-overflow: ellipsis;

      &.small {
        font-size: $font_size_small;
      }

      &.marked {
        font-weight: bold;
      }

      &.color-code-outer {
        display: flex;
        // justify-content: center;
        // align-items: center;
        width: 40px;

        .color-code {
          padding: 0;
          width: 20px;
          height: 20px;
          border-radius: 20px;
          position: relative;
          top: -4px;
        }
      }
    }

    &.header {
      font-size: $font_size_small;
      font-weight: bold;
    }
  }

  .ban {
    background: lightcoral;
    cursor: pointer;
  }

  .banned {
    background: lightgreen;
  }
</style>

<div class="user-item" class:header transition:fade|local>
  {#if header}
    <div class="color-code-outer" />
    <div>Name</div>
    <div>UUID</div>
    <div>SessionId</div>
    <div>IP</div>
    <div>(x,y)</div>
    <div>Ban IP</div>
  {:else}
    <div class="color-code-outer">
      <div
        class="color-code"
        style={'background-color:' + player.tint.replace('0X', '#')} />
    </div>
    <div class="marked">{player.name}</div>
    <div>{player.uuid}</div>
    <div>{player.id}</div>
    <div>{player.ip}</div>
    <div>{player.x}, {player.y}</div>
    <div>
      <button class="ban" class:banned on:click={addToBlackList}>
        {#if banned}Done{:else}Ban{/if}
      </button>
    </div>
  {/if}
</div>
