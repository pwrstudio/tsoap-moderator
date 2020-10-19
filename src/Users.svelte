<script>
  // # # # # # # # # # # # # #
  //
  //  USERLIST
  //
  // # # # # # # # # # # # # #

  // COMPONENTS
  import UserItem from "./UserItem.svelte"
  import { Tile, Tag } from "carbon-components-svelte"

  // *** PROPS
  export let users = []
  export let areas = []

  // console.dir(users)
</script>

<style lang="scss">
  @import "./variables.scss";

  .header {
    background: lightgrey;
    display: inline-block;
    width: 100%;
    height: 3em;
    line-height: calc(3em - 10px);

    .header-item {
      font-weight: bold;
      text-align: left;
      float: left;
      width: 14%;
      font-size: 0.75rem;
      // padding: 5px;
      // padding-left: 10px;

      &.small {
        width: 62px;
      }
    }
  }
</style>

<div class="users">
  <Tile>
    <h1>Users</h1>
  </Tile>
  <Tile>
    <Tag type="green">Users: {Object.values(users).length}</Tag>
    <Tag type="gray">
      Accredited:
      {Object.values(users).filter(u => u.authenticated).length}
    </Tag>
    <Tag type="gray">
      Guests:
      {Object.values(users).filter(u => !u.npc && !u.authenticated).length}
    </Tag>
    <Tag type="gray">
      NPCs:
      {Object.values(users).filter(u => u.npc).length}
    </Tag>
  </Tile>
  {#each Object.values(users).reverse() as user}
    <UserItem {user} {areas} />
  {/each}
</div>
