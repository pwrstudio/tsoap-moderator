<script>
  // # # # # # # # # # # # # #
  //
  //  TSoaP Client
  //
  // # # # # # # # # # # # # #

  // IMPORTS
  import { Router, Route } from "svelte-routing";

  // ROUTES
  import Dashboard from "./Dashboard.svelte";
</script>

<style lang="scss" global>
  @import "./variables.scss";
  * {
    box-sizing: border-box;
  }
</style>

<Router>
  <Route path="/">
    <Dashboard />
  </Route>
</Router>
