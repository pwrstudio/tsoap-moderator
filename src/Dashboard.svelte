<script>
  // # # # # # # # # # # # # #
  //
  //  TSoaP Moderator
  //
  // # # # # # # # # # # # # #

  // IMPORTS
  import { onMount } from "svelte"
  import * as Colyseus from "colyseus.js"
  import get from "lodash/get"
  import { fade, fly } from "svelte/transition"
  import {
    Header,
    HeaderNav,
    HeaderNavItem,
    HeaderNavMenu,
    SideNav,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    SideNavLink,
    SkipToContent,
    Content,
    Grid,
    Row,
    Column,
    Tabs,
    Tab,
    TabContent,
    Tile,
    Tag,
    ClickableTile,
  } from "carbon-components-svelte"

  // *** PROPS
  export let users = {}
  export let blackList = []
  export let chatMessages = []
</script>

<style lang="scss">
  @import "./variables.scss";
</style>

<Tile>
  <h1>The Shape of a Practice</h1>
</Tile>

<!-- USERS -->
<ClickableTile href="/users">
  <Tag type="green">Users: {Object.values(users).length}</Tag>
  <Tag type="grey">
    Accredited:
    {Object.values(users).filter(u => u.authenticated).length}
  </Tag>
  <Tag type="grey">
    Guests:
    {Object.values(users).filter(u => !u.npc && !u.authenticated).length}
  </Tag>
  <Tag type="grey">NPCs: {Object.values(users).filter(u => u.npc).length}</Tag>
</ClickableTile>

<!-- BLACKLIST -->
<ClickableTile href="/banned">
  <Tag type="red">Banned IPs: {blackList.length}</Tag>
</ClickableTile>

<!-- LIVESTREAM -->
<ClickableTile href="/livestreams">
  <Tag type="magenta">Livestream: No</Tag>
</ClickableTile>

<!-- TEXTCHAT -->
<ClickableTile href="/textchat">
  <Tag type="blue">Chat messages: {chatMessages.length}</Tag>
  <Tag type="gray">Room 1: {chatMessages.filter(m => m.room === 1).length}</Tag>
  <Tag type="gray">Room 2: {chatMessages.filter(m => m.room === 2).length}</Tag>
  <Tag type="gray">Room 3: {chatMessages.filter(m => m.room === 3).length}</Tag>
  <Tag type="gray">Room 4: {chatMessages.filter(m => m.room === 4).length}</Tag>
</ClickableTile>

<!-- AUDIOCHAT -->
<ClickableTile href="/audiochat">
  <Tag type="purple">Audiochat</Tag>
  <Tag type="gray">Room 1: {chatMessages.filter(m => m.room === 1).length}</Tag>
  <Tag type="gray">Room 2: {chatMessages.filter(m => m.room === 2).length}</Tag>
  <Tag type="gray">Room 3: {chatMessages.filter(m => m.room === 3).length}</Tag>
  <Tag type="gray">Room 4: {chatMessages.filter(m => m.room === 4).length}</Tag>
  <Tag type="gray">Room 5: {chatMessages.filter(m => m.room === 4).length}</Tag>
  <Tag type="gray">Room 6: {chatMessages.filter(m => m.room === 4).length}</Tag>
  <Tag type="gray">Room 7: {chatMessages.filter(m => m.room === 4).length}</Tag>
</ClickableTile>
