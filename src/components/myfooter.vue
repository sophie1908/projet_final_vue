<template>
    <div class="body">
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
    
<style scoped>
footer{
    background-color: black;
    display: flex;
    justify-content: space-between;
    height: 100px;
    align-items: center;
    padding: 20px;
    margin-top: 50px
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