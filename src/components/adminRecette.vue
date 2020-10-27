<template>
<div class="container">
    <form action="">
        <div class="formulaire">
            
            <div class="ajout_photo">

                <label for="file" class="label-file">Choisir une image</label>
                <input id="file" class="input-file" type="file" accept="image/png, image/jpeg"> 
                
            
            </div>

            <div class="nom">
                <label for="name_recette">Nom de la recette :</label>
                <input type="text" id="name_recette" >
            </div>

            <div class="categorie">
                <fieldset>
                    <legend>Catégorie :</legend>
                    <div>
                        <input type="checkbox" id="ptidej" value="petit_dej">
                        <label for="ptidej">Petit Déjeuner</label>
                    </div>
                    <div>
                        <input type="checkbox" id="dej" name="interest" value="dej">
                        <label for="dej">Déjeuner</label>
                    </div>
                    <div>
                        <input type="checkbox" id="diner" name="interest" value="diner">
                        <label for="diner">Dîner</label>
                    </div>
                </fieldset>
            </div>

            <div class="niveau">
                <fieldset>
                    <legend>Niveau :</legend>
                    <div>
                        <input type="checkbox" id="1" name="interest" value="1">
                        <label for="1">1</label>
                    </div>
                    <div>
                        <input type="checkbox" id="2" name="interest" value="2">
                        <label for="2">2</label>
                    </div>
                    <div>
                        <input type="checkbox" id="3" name="interest" value="3">
                        <label for="3">3</label>
                    </div>
                    <div>
                        <input type="checkbox" id="4" name="interest" value="4">
                        <label for="4">4</label>
                    </div>
                    <div>
                        <input type="checkbox" id="5" name="interest" value="5">
                        <label for="5">5</label>
                    </div>
                </fieldset>
            </div>

            <div class="cout">
                <label for="tentacles">Coût (0-100):</label>
                <input type="number" id="tentacles" name="tentacles"
                min="0" max="100">
            </div>

            <div class="ingredient"></div>

            <div class="materiel">
                <fieldset>
                    <legend>Matériel :</legend>
                    <div>
                        <input type="checkbox" id="friteuse">
                        <label for="friteuse">Friteuse</label>
                    </div>
                    <div>
                        <input type="checkbox" id="four">
                        <label for="four">Four</label>
                    </div>
                    <div>
                        <input type="checkbox" id="micro_onde">
                        <label for="micro_onde">Micro onde</label>
                    </div>
                    <div>
                        <input type="checkbox" id="blender">
                        <label for="blender">Blender</label>
                    </div>
                </fieldset>
            </div>

            <div class="allergene">
                <fieldset>
                    <legend>Allergene :</legend>
                    <div>
                        <input type="checkbox" id="coding" name="interest" value="coding">
                        <label for="coding">Développement</label>
                    </div>
                    <div>
                        <input type="checkbox" id="music" name="interest" value="music">
                        <label for="music">Musique</label>
                    </div>
                </fieldset>
            </div>

            <div class="pref">
                <fieldset>
                    <legend>Choix alimentaire :</legend>
                    <div>
                        <input type="checkbox" id="sans_porc">
                        <label for="sans_porc">Sans porc</label>
                    </div>
                    <div>
                        <input type="checkbox" id="vegetarien">
                        <label for="vegetarien">Végétarien</label>
                    </div>
                    <div>
                        <input type="checkbox" id="vegetalien">
                        <label for="vegetalien">Végétalien</label>
                    </div>
                    <div>
                        <input type="checkbox" id="sans_gluten">
                        <label for="sans_gluten">Sans Gluten</label>
                    </div>
                    <div>
                        <input type="checkbox" id="sans_lactose">
                        <label for="sans_lactose">Sans Lactose</label>
                    </div>
                </fieldset>
            </div>

            <div class="pdf">
                <label for="pdf">Recette:</label>
                <input type="text" id="pdf" class="input_pdf">
            </div>
        </div>
    </form>
</div>




</template>

<script>
export default {

}
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
.input_pdf{
    height: 100px;
    margin: 30px;
    width: 1000px;
}

</style>