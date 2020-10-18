<script>
  // # # # # # # # # # # # # #
  //
  //  TSoaP Moderator
  //
  // # # # # # # # # # # # # #
  //   *** IMPORT
  import { Tabs, Tab, TabContent } from "carbon-components-svelte"
</script>

<style lang="scss">
  @import "./variables.scss";
</style>

<Tabs type="container">
  <Tab label="1" />
  <Tab label="2" />
  <Tab label="3" />
  <Tab label="4" />
  <Tab label="5" />
  <Tab label="6" />
  <Tab label="7" />
  <div slot="content">
    <TabContent>Content 1</TabContent>
    <TabContent>Content 2</TabContent>
    <TabContent>Content 3</TabContent>
    <TabContent>Content 4</TabContent>
    <TabContent>Content 5</TabContent>
    <TabContent>Content 6</TabContent>
    <TabContent>Content 7</TabContent>
  </div>
</Tabs>
