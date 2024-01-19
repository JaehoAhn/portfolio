<script>


</script>

<template>
    <div id="jaehoMain">
        <div id="container">
            <div id="items">
                <div id="images">
                    <div class="column">
                        <img src="../img/img1.jpg">
                        <img src="../img/img2.jpg">
                        
                    </div>

                    <div class="column">
                        <img src="../img/img3.jpg">
                        <img src="../img/img4.jpg">
                        
                    </div>
                </div>

                <div id="intro">
                    <h1>
                        Jaeho Ahn
                    </h1>

                    <p>
                        Client Developer
                    </p>
                </div>

            </div>
        </div>
    </div>


</template>

<style>
    #jaehoMain {
        position: absolute;
        width: 100vw;
        height: 80vh;
        top: 10vh;
        text-align: center;


    }

    #jaehoMain #container {
        width: 50%;
        display: inline-block;
    }

    #container #items {
        display: flex;
    }



    #images {
        display: flex;
        width: 100%;
        padding: 0 4px;
        text-align: right;
        margin-top: 10vh;
    }

    .column {
        padding: 0 4px;
    }

    .column img {
        width: 100%;
    }

    #jaehoMain #intro {
        width: 20%;
        margin-top: 10vh;
        margin-right: 15%;
        text-align: right;

        border: 2px;
    }

    #jaehoMain #intro h1 {
        font-size: 15px;
    }

    #jaehoMain #intro p {
        font-size: 15px;

        color: gray;
    }

</style>