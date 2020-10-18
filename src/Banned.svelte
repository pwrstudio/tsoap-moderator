<script>
  // # # # # # # # # # # # # #
  //
  //  BLACKLIST
  //
  // # # # # # # # # # # # # #

  // COMPONENTS
  import { Tile, Tag } from "carbon-components-svelte"
  import AddressItem from "./AddressItem.svelte"

  // *** PROPS
  export let blackList = []
  // console.dir(blackList)
</script>

<style lang="scss">
  @import "./variables.scss";
</style>

<div class="users">
  <Tile>
    <h1>Banned IP addresses</h1>
  </Tile>
  <Tile>
    <Tag type="red">Banned IPs: {blackList.length}</Tag>
  </Tile>
  {#each blackList as address}
    <AddressItem {address} />
  {/each}
</div>
