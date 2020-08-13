<script>
  // # # # # # # # # # # # # #
  //
  //  Chat
  //
  // # # # # # # # # # # # # #

  // IMPORTS

  // COMPONENTS
  import ChatMessage from "./ChatMessage.svelte";

  // PROPS
  export let chatMessages = [];
</script>

<style lang="scss">
  @import "./variables.scss";

  .chat {
    width: 100%;
    font-size: 12px;
  }
</style>

<div class="chat">
  {#each chatMessages as message (message.msgId)}
    <ChatMessage {message} />
  {/each}
</div>
