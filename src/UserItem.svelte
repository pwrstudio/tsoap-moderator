<script>
  // # # # # # # # # # # # # #
  //
  //  User list item
  //
  // # # # # # # # # # # # # #

  // IMPORTS
  import { fade } from "svelte/transition"
  import Bot20 from "carbon-icons-svelte/lib/Bot20"
  import User20 from "carbon-icons-svelte/lib/User20"
  import UserAdmin20 from "carbon-icons-svelte/lib/UserAdmin20"
  import Checkmark20 from "carbon-icons-svelte/lib/Checkmark20"
  import ShoppingBag20 from "carbon-icons-svelte/lib/ShoppingBag20"

  import { Button, Tag } from "carbon-components-svelte"

  // PROPS
  export let user = {}
  export let areas = []

  // STORES
  import { gameRoom } from "./stores.js"

  const addToBlackList = () => {
    $gameRoom.send("blacklist", {
      address: user.ip,
    })
  }

  // console.dir(user)
  // console.dir(areas)

  let userArea = ""

  $: {
    let tempArea = areas.find(a => a.areaIndex === user.area)
    // console.log(tempArea)
    userArea = tempArea && tempArea.title ? tempArea.title : ""
  }
</script>

<style lang="scss">
  @import "./variables.scss";

  .user-item {
    width: 100%;
    display: flex;
    margin-bottom: 5px;
    border-bottom: 1px solid grey;
    line-height: 1em;
    font-size: 0.75rem;
    text-align: left;
    // padding: 5px;

    opacity: 1;

    &.active {
      opacity: 1;
    }

    div {
      float: left;
      width: 15%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 3em;
      padding-top: 6px;

      &.marked {
        font-weight: bold;
      }

      &.large {
        width: 20%;
      }
      &.small {
        padding-left: 15px;
      }
    }
  }
</style>

<div class="user-item" transition:fade|local>
  <div class="small">
    {#if user.npc}
      <Tag type="grey">
        <Bot20 style="fill: grey" />
      </Tag>
    {:else if user.authenticated}
      <Tag type="grey">
        <UserAdmin20 style="fill: grey" />
      </Tag>
    {:else}
      <Tag type="grey">
        <User20 style="fill: grey" />
      </Tag>
    {/if}
  </div>
  <div class="marked large">{user.name}</div>
  <div>{user.x}, {user.y}</div>
  <div>{userArea}</div>
  <!-- <div>
    {#if user.npc}
      <Tag type="grey">
        <ShoppingBag20 style="fill: grey" />
      </Tag>
    {/if}
  </div> -->
  <div>{user.ip.replace('::ffff:', '')}</div>
  <div class="large">
    {#if !user.npc}
      <Button size="small" kind="danger" on:click={addToBlackList}>
        Ban IP address
      </Button>
    {/if}
  </div>
</div>
