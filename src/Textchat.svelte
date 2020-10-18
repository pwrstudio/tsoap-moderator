<script>
  // # # # # # # # # # # # # #
  //
  //  TSoaP Moderator
  //
  // # # # # # # # # # # # # #
  //   *** IMPORT
  import { Tabs, Tab, TabContent, DataTable } from "carbon-components-svelte"

  import ChatMessage from "./ChatMessage.svelte"

  // *** PROPS
  export let chatMessages = []

  $: {
    console.log("chatm", chatMessages)
  }
</script>

<style lang="scss">
  @import "./variables.scss";
</style>

<Tabs type="container">
  <Tab label="All" />
  <Tab label="1" />
  <Tab label="2" />
  <Tab label="3" />
  <Tab label="4" />
  <div slot="content">
    <TabContent>
      {#each chatMessages as message}
        <ChatMessage {message} />
      {/each}
    </TabContent>
    <TabContent>
      {#each chatMessages.filter(m => m.room === 1) as message}
        <ChatMessage {message} />
      {/each}
    </TabContent>
    <TabContent>
      {#each chatMessages.filter(m => m.room === 2) as message}
        <ChatMessage {message} />
      {/each}
    </TabContent>
    <TabContent>
      {#each chatMessages.filter(m => m.room === 3) as message}
        <ChatMessage {message} />
      {/each}
    </TabContent>
    <TabContent>
      {#each chatMessages.filter(m => m.room === 4) as message}
        <ChatMessage {message} />
      {/each}
    </TabContent>
  </div>
</Tabs>
