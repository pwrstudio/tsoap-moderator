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

  * {
    box-sizing: border-box;
  }

  * {
    box-sizing: border-box;
  }

  .quadrant {
    position: fixed;
    height: 50vh;
    width: 50vw;
    // background: black;
    &.top-left {
      top: 0;
      left: 0;
      // background: red;
    }
    &.top-right {
      top: 0;
      right: 0;
      // background: blue;
    }
    &.bottom-left {
      bottom: 0;
      left: 0;
      // background: yellow;
    }
    &.bottom-right {
      bottom: 0;
      right: 0;
      // background: purple;
    }
  }

  // .userlist-container {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 50vh;
  //   border-bottom: 1px solid grey;
  //   padding: 20px;
  //   background: lightgray;
  //   overflow-y: scroll;
  // }

  // .chat-container {
  //   position: fixed;
  //   top: 50%;
  //   left: 0;
  //   float: left;
  //   border-right: 1px solid grey;
  //   width: 50%;
  //   height: 50vh;
  //   padding: 20px;
  //   background: #e4e4e4;
  //   overflow-y: scroll;
  // }

  // .blacklist-container {
  //   position: fixed;
  //   top: 50%;
  //   left: 50%;
  //   float: left;
  //   width: 50%;
  //   height: 50vh;
  //   padding: 20px;
  //   background: #e4e4e4;
  //   overflow-y: scroll;
  // }

  // .header {
  //   font-weight: bold;
  //   border-bottom: 1px solid #f5f5f5;
  //   font-size: 12px;
  //   padding-bottom: 5px;
  // }
</style>

<!-- USERS -->
<Grid>
  <Row>
    <Column>
      <ClickableTile href="/users">
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
      </ClickableTile>
    </Column>
  </Row>

  <!-- BLACKLIST -->
  <Row>
    <Column>
      <ClickableTile href="/banned">
        <Tag type="red">Banned IPs: {blackList.length}</Tag>
      </ClickableTile>
    </Column>
  </Row>

  <!-- TEXTCHAT -->
  <Row>
    <Column>
      <ClickableTile href="/textchat">
        <Tag type="magenta">Chat messages: {chatMessages.length}</Tag>
        <Tag type="gray">
          Room 1:
          {chatMessages.filter(m => m.room === 1).length}
        </Tag>
        <Tag type="gray">
          Room 2:
          {chatMessages.filter(m => m.room === 2).length}
        </Tag>
        <Tag type="gray">
          Room 3:
          {chatMessages.filter(m => m.room === 3).length}
        </Tag>
        <Tag type="gray">
          Room 4:
          {chatMessages.filter(m => m.room === 4).length}
        </Tag>
      </ClickableTile>
    </Column>
  </Row>
</Grid>

<!-- <Grid>
  <Row>
    <Tabs>
      <Tab label="Userlist" />
      <Tab label="Blacklist" />
      <div slot="content">
        <TabContent>
          <UserList playerList={localPlayers} />
        </TabContent>
        <TabContent>
          <BlackList {blackList} />
        </TabContent>
      </div>
    </Tabs>
  </Row>
  <Row>
    <Chat {chatMessages} />
  </Row>
  <Row>
    <Tabs>
      <Tab label="Userlist" />
      <Tab label="Blacklist" />
      <div slot="content">
        <TabContent>
          <UserList playerList={localPlayers} />
        </TabContent>
        <TabContent>
          <BlackList {blackList} />
        </TabContent>
      </div>
    </Tabs>
  </Row>
  <Row>
    <Chat {chatMessages} />
  </Row>
</Grid> -->
