<script>
  // # # # # # # # # # # # # #
  //
  //  User list item
  //
  // # # # # # # # # # # # # #

  // IMPORTS
  import { fade } from "svelte/transition";

  // PROPS
  export let address = {};

  console.dir(address);

  let unbanned = false;

  // STORES
  import { gameRoom, chatRoom } from "./stores.js";

  const removeFromBlackList = () => {
    // $chatRoom.send("blacklist", {
    //   ip: player.ip
    // });
    $gameRoom.send("whitelist", {
      address: address.address
    });
    unbanned = true;
  };

  //   console.dir(player);
</script>

<style lang="scss">
  @import "./variables.scss";

  .address-item {
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
      width: 50%;
      white-space: nowrap;
      overflow: hidden;
      padding: 5px;
      text-overflow: ellipsis;

      //   &.small {
      //     font-size: $font_size_small;
      //   }

      //   &.marked {
      //     font-weight: bold;
      //   }

      //   &.color-code-outer {
      //     display: flex;
      //     // justify-content: center;
      //     // align-items: center;
      //     width: 40px;

      //     .color-code {
      //       padding: 0;
      //       width: 20px;
      //       height: 20px;
      //       border-radius: 20px;
      //       position: relative;
      //       top: -4px;
      //     }
      //   }
    }

    &.header {
      font-size: $font_size_small;
      font-weight: bold;
    }
  }

  .unban {
    background: lightcoral;
    cursor: pointer;
  }

  .unbanned {
    background: lightgreen;
  }
</style>

<div class="address-item" transition:fade>
  <!-- 
  {#if header}
    <div class="color-code-outer" />
    <div>Name</div>
    <div>UUID</div>
    <div>SessionId</div>
    <div>IP</div>
    <div>(x,y)</div>
    <div>Ban IP</div>
  {:else} -->
  <div class="marked">{address.address}</div>
  <div>
    <button class="unban" class:unbanned on:click={removeFromBlackList}>
      {#if unbanned}Done{:else}Unban{/if}
    </button>
  </div>
  <!-- {/if} -->
</div>
