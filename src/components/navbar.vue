<template>
  <div>
    <nav>
      <div class="logo">
        <img class="img_logo" src="../assets/logo_white.png" alt="logo" />
      </div>
      <ul class="menu_deroulant">
        <li>
          <a href="/" class="link-page"><i class="fas fa-home"></i></a>
        </li>
        <li>
          <a href="/mydecouvrir" class="link-page">Nous découvrir</a>
        </li>
        <li>
          <a class="link-page"><i class="fas fa-user"></i></a>
          <ul class="menu_deroulant_user">
            <li>
              <a href="/myregister">S'inscrire</a>
            </li>
            <li>
              <a href="/mylogin">S'identifier</a>
            </li>
          </ul>
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
  width: 420px;
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
.menu_deroulant_user {
  position: absolute;
  left: -999em;
  text-align: left;
  z-index: 1000;
  width: 117px;
  text-align: center;
  top: 55px;
  background: #d93d3d;
  display: inherit;
  border-radius: 0px 0px 5px 5px;
  transform: translateX(635px);
}
.menu_deroulant li {
  height: 64px;
  display: flex;
  align-items: center;
}
.menu_deroulant li:hover ul {
  left: auto;
  left: 670px;
}
.menu_deroulant ul {
  display: flex;
  flex-direction: column;
}

.menu_deroulant a {
  background-color: transparent;
  color: white !important;
  font-weight: 600;
}
.menu_deroulant_user li:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
}
</style>
