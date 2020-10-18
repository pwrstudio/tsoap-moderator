<script>
  // # # # # # # # # # # # # #
  //
  //  TSoaP Moderator
  //
  // # # # # # # # # # # # # #
  // *** IMPORT
  import { Tile } from "carbon-components-svelte"

  // COMPONENTS
  import VideoPlayer from "./VideoPlayer.svelte"

  export let currentStream = false
  // console.dir(currentStream)
</script>

<style lang="scss">
  @import "./variables.scss";

  .video-container {
    width: 600px;
    max-width: 90%;
  }
</style>

<Tile>
  <h1>Active livestreams</h1>
</Tile>

{#if currentStream}
  <Tile>
    <div class="video-container">
      <VideoPlayer streamUrl={currentStream.streamURL} />
    </div>
    <p>Event: {currentStream.title}</p>
  </Tile>
{:else}
  <Tile>No active live stream</Tile>
{/if}
