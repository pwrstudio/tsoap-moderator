<script>
  // # # # # # # # # # # # # #
  //
  //  USERLIST
  //
  // # # # # # # # # # # # # #

  // COMPONENTS
  //   import UserItem from "./UserItem.svelte"
  import { DataTable, Tile, Tag } from "carbon-components-svelte"

  // *** PROPS
  export let users = []

  console.dir(users)
</script>

<style lang="scss">
  @import "./variables.scss";
</style>

<div class="users">
  <Tile>
    <Tag type="green">Users: {Object.values(users).length}</Tag>
    <Tag type="teal">
      Accredited:
      {Object.values(users).filter(u => u.authenticated).length}
    </Tag>
    <Tag type="cyan">
      Guests:
      {Object.values(users).filter(u => !u.npc && !u.authenticated).length}
    </Tag>
    <Tag type="blue">
      NPCs:
      {Object.values(users).filter(u => u.npc).length}
    </Tag>
  </Tile>
  <DataTable
    sortable
    headers={[{ key: 'name', value: 'Name' }, { key: 'npc', value: 'NPC' }, { key: 'authenticated', value: 'Accredited' }, { key: 'area', value: 'Area' }, { key: 'x', value: 'Y' }, { key: 'y', value: 'X' }, { key: 'carrying', value: 'Carrying' }, { key: 'id', value: 'ID' }, { key: 'ip', value: 'IP' }]}
    rows={Object.values(users)} />
</div>
