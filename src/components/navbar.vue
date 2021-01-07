<template>
  <div>
    <nav>
      <div class="logo">
        <img class="img_logo" src="../assets/logo_white.png" alt="logo" />
      </div>
      <ul>
        <li>
          <a class="link-page">Nous découvrir</a>
        </li>
        <li>
          <a class="link-page" href="/mylogin"><i class="fas fa-user"></i></a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style scoped>
/***************************************nav **********************************************/
nav {
  position: fixed;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 65px;
}

nav ul {
  display: flex;
  list-style: none;
  justify-content: space-around;
  margin: 10px;
  width: 300px;
  align-items: center;
}

.link-page {
  color: white !important;
  font-size: 22px;
  text-decoration: none;
  text-transform: uppercase;
}

.logo {
  display: contents;
}

.img_logo {
  width: 214px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.bi-person {
  position: absolute;
  left: 13px;
  color: black;
  top: 12px;
}
</style>
