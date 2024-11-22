<template>
  <router-view />
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: fit-content;
}

* {
  margin: 1%;
  border-radius: 10px;
  font-family: 'Courier New', Courier, monospace;
}

.sidebar {
  padding: 5%;
  background-color: lightgray;
}

#leftSidebar {
  margin-left: 0px;
}

#rightSidebar {
  margin-right: 0px;
}

main {
  display: flex;
  flex-grow: 1;
  height: 100%;
  flex-grow: 1;
}

main div { /*Remove this when adding posts as components*/

  flex-grow: 1;
  margin-left: 1%;
  margin-right: 1%;
  margin-top: 0px;

}
</style>
