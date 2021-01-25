<template>
  <div class="container">
    <form action="">
      <div class="formulaire">
        <div class="ajout_photo">
          <label for="file" class="label-file">Choisir une image</label>
          <input
            id="file"
            class="input-file"
            type="file"
            accept="image/png, image/jpeg"
          />
        </div>

        <div class="nom">
          <label for="name_recette">Nom de la recette :</label>
          <input type="text" id="name_recette" />
        </div>

        <div class="categorie">
          <fieldset>
            <legend>Cat_recette :</legend>
            <div>
              <input type="checkbox" id="nouveaute" value="nouveaute" />
              <label for="nouveaute">Nouveautées</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="healthy"
                name="interest"
                value="healthy"
              />
              <label for="healthy">Healthy</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="vegetarien"
                name="interest"
                value="vegetarien"
              />
              <label for="vegetarien">Végétarien</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="plat_rapide"
                name="interest"
                value="plat_rapide"
              />
              <label for="plat_rapide">Plat Rapide</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="repas-famille"
                name="interest"
                value="repas-famille"
              />
              <label for="repas-famille">Repas de Famille</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="dessert"
                name="interest"
                value="dessert"
              />
              <label for="dessert">Dessert</label>
              <div>
                <input
                  type="checkbox"
                  id="petit_dej"
                  name="interest"
                  value="petit_dej"
                />
                <label for="petit_dej">Petit Déjeuner</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="apéro"
                  name="interest"
                  value="apéro"
                />
                <label for="apéro">Apéro</label>
              </div>
            </div>
          </fieldset>
        </div>

        <div class="ingredient">
          <ul>
            <!-- key id de la ligne -->
            <li v-for="item in ingredients" :key="item.id">
              <input
                type="checkbox"
                :id="'myCheckbox1' + item.id"
                :value="item.id"
                v-model="Ingredients"
              />
              <label class="label_container" :for="'myCheckbox1' + item.id">
                {{ item.nom }}</label
              >
            </li>
          </ul>
        </div>
        <div class="temps">
          <label for="appt">Temps:</label>

          <input
            type="time"
            id="appt"
            name="appt"
            min="00:05"
            max="18:00"
            required
          />
        </div>
        <div class="materiel">
          <fieldset>
            <legend>Matériel :</legend>
            <div>
              <input type="checkbox" id="friteuse" />
              <label for="friteuse">Friteuse</label>
            </div>
            <div>
              <input type="checkbox" id="four" />
              <label for="four">Four</label>
            </div>
            <div>
              <input type="checkbox" id="micro_onde" />
              <label for="micro_onde">Micro onde</label>
            </div>
            <div>
              <input type="checkbox" id="blender" />
              <label for="blender">Blender</label>
            </div>
          </fieldset>
        </div>

        <div class="pdf">
          <label for="pdf">Recette:</label>
          <input type="text" id="pdf" class="input_pdf" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ingredients: [],
    };
  },
};
</script>

<style>
.label-file {
  cursor: pointer;
  color: #00b1ca;
  font-weight: bold;
}
.label-file:hover {
  color: #25a5c4;
}
.input_pdf {
  height: 100px;
  margin: 30px;
  width: 1000px;
}
</style>
