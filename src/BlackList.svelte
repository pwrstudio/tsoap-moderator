<script>
  // # # # # # # # # # # # # #
  //
  //  Blacklist
  //
  // # # # # # # # # # # # # #

  // COMPONENTS
  import AddressItem from "./AddressItem.svelte";

  // PROPS
  export let blackList = [];

  console.dir(blackList);
</script>

<style lang="scss">
  @import "./variables.scss";

  .black-list {
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

<div class="black-list">
  {#each blackList as address}
    <AddressItem {address} />
  {/each}
</div>
