<script>
  // # # # # # # # # # # # # #
  //
  //  User list
  //
  // # # # # # # # # # # # # #

  // COMPONENTS
  import UserItem from "./UserItem.svelte";

  // PROPS
  export let playerList = [];
</script>

<style lang="scss">
  @import "./variables.scss";

  .user-list {
    width: 100%;

    // @include screen-size("small") {
    //   width: 100vw;
    //   height: 100vh;
    //   pointer-events: none;
    //   opacity: 0;
    //   transition: opacity 0.5 ease-out;
    //   padding-top: 80px;
    // }
  }
</style>

<div class="user-list">
  <UserItem header={true} />
  {#each Object.entries(playerList) as player (player[1].uuid)}
    <UserItem player={player[1]} />
  {/each}
</div>
