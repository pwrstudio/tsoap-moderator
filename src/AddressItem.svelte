<script>
  // # # # # # # # # # # # # #
  //
  //  IP ADDRESS
  //
  // # # # # # # # # # # # # #

  // IMPORTS
  import { fade } from "svelte/transition"
  import { Button, Tag } from "carbon-components-svelte"

  // PROPS
  export let address = {}

  console.dir(address)

  let unbanned = false

  // STORES
  import { gameRoom, chatRoom } from "./stores.js"

  const removeFromBlackList = () => {
    $gameRoom.send("whitelist", {
      address: address.address,
    })
    unbanned = true
  }

  //   console.dir(player);
</script>

<style lang="scss">
  @import "./variables.scss";

  .address-item {
    width: 100%;
    display: flex;
    margin-bottom: 5px;
    border-bottom: 1px solid grey;
    line-height: 1em;
    font-size: 0.75rem;
    text-align: left;
    display: flex;
    justify-content: space-between;

    opacity: 1;

    &.active {
      opacity: 1;
    }

    div {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 3em;
      padding-top: 6px;

      &.marked {
        font-weight: bold;
      }
    }

    &.header {
      font-size: $font_size_small;
      font-weight: bold;
    }
  }
</style>

<div class="address-item" transition:fade|fade>
  <div class="marked">{address.address}</div>
  <div>
    <Button size="small" kind="primary" on:click={removeFromBlackList}>
      Unban IP address
    </Button>
  </div>
</div>
