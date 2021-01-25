<template>
  <div>
    <nav>
      <div class="logo">
        <img class="img_logo" src="../assets/logo_white.png" alt="logo" />
      </div>
      <ul class="menu_deroulant">
        <li>
          <a class="link-page">Recettes</a>
          <ul class="menu_deroulant_recette">
            <li>
              <a href="/myallrecette">Toutes les recettes</a>
            </li>
            <li>
              <a href="/myexpress/2">Express</a>
            </li>
            <li>
              <a href="/mylight/1">Light</a>
            </li>
            <li>
              <a href="/myvege/3">Végétariennes</a>
            </li>
            <li>
              <a href="/myfamilial/4">Familiales</a>
            </li>
          </ul>
        </li>
        <li>
          <a class="link-page">Meal Prep</a>
        </li>

        <li>
          <a class="link-page"><i class="fas fa-user"></i></a>
          <ul class="menu_deroulant_user">
            <li>
              <a href="/myparametreUser">Mon compte</a>
            </li>
            <li>
              <a href="/myaccueilUser">Mes recettes</a>
            </li>
            <li>
              <a href="/all_recette">Déconnexion</a>
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
  width: 640px;
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
.menu_deroulant_recette {
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
  transform: translateX(190px);
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
  transform: translateX(630px);
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
.menu_deroulant_recette li:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
}
</style>
