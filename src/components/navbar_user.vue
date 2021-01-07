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
              <a href="/all_recette">Toutes les recette</a>
            </li>
            <li>
              <a href="/all_recette">Mes recettes favorites</a>
            </li>
            <li>
              <a href="/all_recette">Mes dernières recettes</a>
            </li>
          </ul>
        </li>
        <li>
          <a class="link-page">Meal Prep</a>
        </li>
        <li>
          <a class="link-page">A propos</a>
        </li>
        <li>
          <a class="link-page"><i class="fas fa-user"></i></a>
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
  width: 821px;
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
.menu_deroulant ul {
  position: absolute;
  left: -999em;
  text-align: left;
  z-index: 1000;
  width: 117px;
  text-align: center;
  top: 55px;
  background-color: white;
  color: white;
  display: inherit;
  border-radius: 5px;
}
.menu_deroulant li:hover ul {
  /* left: auto; */
  left: 670px;
}
.menu_deroulant_recette li {
  display: inline-block;
  position: relative;
  border-radius: 8px 8px 0 0;
}
.menu_deroulant_recette li:hover {
  left: 670px;
}
</style>
