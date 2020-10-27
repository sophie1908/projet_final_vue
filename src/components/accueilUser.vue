<template>
<div>
    
    <div class="header">
   
<img src="../assets/fond_head1.jpg" alt="fond">
    </div>
    

    <div class="icone">
        <div class="barreDeRecherche">
            <b-input-group size="sm" class="mb-2">
            <b-input-group-prepend is-text>
            <b-icon icon="search"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="search" placeholder="Recette ou ingrédient"></b-form-input>
            </b-input-group>
        </div>
    </div>

   

   
    
    
    <footer>
        <p class="copy">@Copyright by Sophie Boitelle</p>
        <div class="reseaux">
            <img src="../assets/Image instagram.png" alt="fond" class="res">
            <img src="../assets/Image youtube (1).png" alt="fond" class="res">
            <img src="../assets/Image snapchat.png" alt="fond" class="res">
            <img src="../assets/Image facebook.png" alt="fond" class="res">

        </div>
            
    </footer>

    
    </div>
   
</template>

<script>
export default {
    
}
</script>


<style scoped>
.icone{
    position: relative;
}
.icone a{
    background-color: #e7eded;
    width: 66px;
    height: 68px;
    border-radius: 34px;
    display: flex;
    align-items: center;
    transform: translateY(-85px);
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    background: linear-gradient(145deg, #f7fefe, #d0d5d5);
    box-shadow: 6px 6px 9px #9fa4a4, -6px -6px 9px #ffffff;
     transition: 0.5s;
}
.icone a:hover{
    transform: translateY(-85px) scale(1.1);
     transition: 0.5s;
}

.bi-person{
    position: absolute;
    left: 13px;
    color: black;
    top: 12px;
}

.barreDeRecherche{
    right: 10px;
    position: absolute;
    width: 220px;
}
.embed-responsive::before {
    display: block;
    content: "";
}
.embed-responsive{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.section_video{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}

.maisnan{
    width: 500px !important;
}

.maisnan  .benjaminLeboss {
    width: auto !important;
}
.sosomanes{
    width: 443px;
    height: 430px;
    overflow: hidden;
    border-radius: 240px;
    justify-content: center;
    align-items: center;
    display: flex;
}


.header{
    height: 391px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header img{
    position: absolute;
        width: 100%;
}

.header button{
    position: absolute;
    border: none;
    height: 75px;
    width: 280px;
    font-size: 24px;
    outline:none;
    border-radius: 29px;
background: #accc87;
box-shadow:  18px 18px 29px #596a46, 
             -18px -18px 29px #ffffc8;
             transition: 0.5s;

}
.header button:hover{
transform: scale(1.1);
     transition: 0.5s;
}
.icone{
    font-size: 40px;
    margin: 50px;
   
    
}
.p_first{
    text-align: center;
    font-size: 34px;
    margin: 128px;
}

.bulle{
    position: relative;
    height: 400px;
    width: 100%;
}

.img_1{
    position: absolute;
    left: 201px;
    top: 105px;
}

.img_2{
    position: absolute;
    right: 588px;
}

.img_3{
    position: absolute;
    right: 150px;
    top: 105px;
}

.p_second{
    text-align: center;
    font-size: 34px;
    margin: 60px;
}

.img_assiette{
    width: 100%;
    display: flex;
    flex-direction: column;
    
}

.btn{
    display: flex;
    justify-content: center;
    
}

.btn_commencer{
    background-color: #accc87;
    border: none;
    height: 75px;
    width: 280px;
    font-size: 24px;
    margin: 150px;
    outline:none;
    border-radius: 29px;
background: #accc87;
box-shadow:  18px 18px 29px #596a46, 
             -18px -18px 29px #ffffc8;
            
     transition: 0.5s;
}

.btn_commencer:hover{
   
     transform: scale(1.1);
     transition: 0.5s;
}

.btn_commencer:active{
    background-color: #accc87;
   
}

footer{
    background-color: black;
    display: flex;
    justify-content: space-between;
    height: 100px;
    align-items: center;
    padding: 20px;
}

.copy{
    color: white;
}

.reseaux{
    display: flex;
    justify-content: space-around;
        width: 250px;
}

.res{
    height: 40px;
}




</style>
