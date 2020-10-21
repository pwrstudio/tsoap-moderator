<script>
  // # # # # # # # # # # # # #
  //
  //  TSoaP Moderator
  //
  // # # # # # # # # # # # # #
  // *** IMPORT
  import {
    Tabs,
    Tab,
    TabContent,
    Tile,
    Form,
    FormGroup,
    Select,
    SelectItem,
    Button,
    TextArea,
    InlineNotification 
  } from "carbon-components-svelte"
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  import ChatMessage from "./ChatMessage.svelte"

  // *** PROPS
  export let chatMessages = []
  export let users = []

  // *** VARIBALES
  let message = ''
  let messageSent = false
  let recipient = "all"

  console.dir(users)

  const sendMessage = () => {
    console.log(recipient +  ': ' + message)
    dispatch('message', {
      message: message,
      recipient: recipient
    });
    messageSent = true
    setTimeout(() => {
      messageSent = false
    }, 5000)
  }
</script>

<style lang="scss">
  @import "./variables.scss";
</style>


<Tile>
  <h1>Send message</h1>  
  <Form on:submit={sendMessage}>
    <FormGroup>
      <Select id="select-1" labelText="Recipient" bind:selected={recipient}>
        <SelectItem value="all" text="All accredited users" />
        {#each users as user (user._id)}
          <SelectItem value={user.username} text={user.name} />
        {/each}
      </Select>
    </FormGroup>
    <FormGroup>
      <TextArea bind:value={message} labelText="Message" placeholder="Enter a message..." />
    </FormGroup>
    <Button type="submit">Send</Button>
    {#if messageSent}
      <InlineNotification
          kind="success"
          title="Message sent"
        />
    {/if}
  </Form>
</Tile>
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
