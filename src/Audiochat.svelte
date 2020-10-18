<script>
  // # # # # # # # # # # # # #
  //
  //  AUDIOCHAT
  //
  // # # # # # # # # # # # # #
  // *** IMPORT
  import { Tabs, Tab, TabContent, Tile } from "carbon-components-svelte"
</script>

<style lang="scss">
  @import "./variables.scss";
</style>

<Tile>
  <h1>Chatrooms (audio)</h1>
</Tile>

<Tabs type="container">
  <Tab label="1" />
  <Tab label="2" />
  <Tab label="3" />
  <Tab label="4" />
  <Tab label="5" />
  <Tab label="6" />
  <Tab label="7" />
  <div slot="content">
    <TabContent>
      <Tile>Audioroom 1</Tile>
    </TabContent>
    <TabContent>
      <Tile>Audioroom 2</Tile>
    </TabContent>
    <TabContent>
      <Tile>Audioroom 3</Tile>
    </TabContent>
    <TabContent>
      <Tile>Audioroom 4</Tile>
    </TabContent>
    <TabContent>
      <Tile>Audioroom 5</Tile>
    </TabContent>
    <TabContent>
      <Tile>Audioroom 6</Tile>
    </TabContent>
    <TabContent>
      <Tile>Audioroom 7</Tile>
    </TabContent>
  </div>
</Tabs>
