

function navigationButton(){
    $('.navigation-button').click(function(){
        $(".navigation-list-outer-wrapper").slideToggle(400);
    });
}

function hideMenu(){
    $(".about-link").click(function(){
        $(".navigation-list-outer-wrapper").hide();
    })
}

function styling(){

    let window_width = window.outerWidth;
    let window_height = window.outerHeight;

    if(window_height <= 568){
        let section = document.getElementsByClassName("background-img-wrapper");
        let mask = document.getElementsByClassName("bg-image-mask");
        mask[0].style.height = "290vh";
        section[0].style.height ="290vh";
        //welcome_caption[0].style.fontSize = "14pt";
    }
   
}



navigationButton();
styling();
//cardButtons();