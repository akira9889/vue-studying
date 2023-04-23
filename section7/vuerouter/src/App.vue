<template>
  <div id="app">
    <nav>
      <router-link to="/" exact active-class="link--active">Home</router-link> |
      <router-link to="/about" exact active-class="link--active">About</router-link> |
      <router-link to="/book" exact active-class="link--active">BookList</router-link> |
      <router-link to="/item/1" exact active-class="link--active">Item</router-link> |
      <router-link to="/user/profile" exact active-class="link--active">User</router-link> |
    </nav>
    <div class="blue-b">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <router-view name="sub"/>
  </div>
</template>

<style lang="scss">
.blue-b {
  border: 1px solid blue;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #03ff18;
}

.fade {
  &-enter {
    transform: translate(-100px, 0);
    opacity: 0;
    &-to {
      opacity: 1;
    }
    &-active {
      transition : all 1s 0s ease;
    }
  }

  &-leave {
    transform: translate(0, 0);
    opacity: 1;
    &-to {
      transform: translate(100px, 0);
      opacity: 0;
    }
    &-active {
      transition: all .5s 0s ease;
    }
  }
}
</style>
