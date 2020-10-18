<script>
  // # # # # # # # # # # # # #
  //
  //  USERLIST
  //
  // # # # # # # # # # # # # #

  // COMPONENTS
  import { DataTable, Tile, Tag } from "carbon-components-svelte"

  // *** PROPS
  export let blackList = []
  console.dir(blackList)
</script>

<style lang="scss">
  @import "./variables.scss";
</style>

<div class="users">
  <Tile>
    <Tag type="red">Banned IPs: {blackList.length}</Tag>
  </Tile>
  <DataTable
    sortable
    headers={[{ key: 'ip', value: 'IP' }]}
    rows={blackList.map(ip => {
      return { ip: ip }
    })} />
</div>
