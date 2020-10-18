<script>
  // # # # # # # # # # # # # #
  //
  //  TSoaP Moderator
  //
  // # # # # # # # # # # # # #
  //   *** IMPORT
  import {
    Tabs,
    Tab,
    TabContent,
    Tile,
    DataTable,
  } from "carbon-components-svelte"

  import ChatMessage from "./ChatMessage.svelte"

  // *** PROPS
  export let chatMessages = []

  // $: {
  //   console.log("chatm", chatMessages)
  // }
</script>

<style lang="scss">
  @import "./variables.scss";
</style>

<Tile>
  <h1>Chatrooms (text)</h1>
</Tile>
<Tabs type="container">
  <Tab label="All" />
  <Tab label="1" />
  <Tab label="2" />
  <Tab label="3" />
  <Tab label="4" />
  <div slot="content">
    <TabContent>
      {#if chatMessages.length > 0}
        {#each chatMessages as message}
          <ChatMessage {message} />
        {/each}
      {:else}
        <Tile>No messages</Tile>
      {/if}
    </TabContent>
    <TabContent>
      {#if chatMessages.filter(m => m.room === 1).length > 0}
        {#each chatMessages.filter(m => m.room === 1) as message}
          <ChatMessage {message} />
        {/each}
      {:else}
        <Tile>No messages in <strong>Room 1</strong></Tile>
      {/if}
    </TabContent>
    <TabContent>
      {#if chatMessages.filter(m => m.room === 2).length > 0}
        {#each chatMessages.filter(m => m.room === 2) as message}
          <ChatMessage {message} />
        {/each}
      {:else}
        <Tile>No messages in <strong>Room 2</strong></Tile>
      {/if}
    </TabContent>
    <TabContent>
      {#if chatMessages.filter(m => m.room === 3).length > 0}
        {#each chatMessages.filter(m => m.room === 3) as message}
          <ChatMessage {message} />
        {/each}
      {:else}
        <Tile>No messages in <strong>Room 3</strong></Tile>
      {/if}
    </TabContent>
    <TabContent>
      {#if chatMessages.filter(m => m.room === 4).length > 0}
        {#each chatMessages.filter(m => m.room === 4) as message}
          <ChatMessage {message} />
        {/each}
      {:else}
        <Tile>No messages in <strong>Room 4</strong></Tile>
      {/if}
    </TabContent>
  </div>
</Tabs>
