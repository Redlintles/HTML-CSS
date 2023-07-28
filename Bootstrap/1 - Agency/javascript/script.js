$(document).ready(function() {

    //Progress Bar

    function PBS(element,ad,data) {

        let container = document.getElementById(element)
        let dataAreaOffset = $("#data-area").offset();
        let stop = true;

        let circle = new ProgressBar.Circle(container, {
            
            color: "#64DAF9",
            strokeWidth: 8,
            duration: ad,
            from: { color: "#AAA" },
            to: { color: "#65DAF9" },

            step: function(state,circle) {
                circle.path.setAttribute("stroke",state.color);
                let value = Math.round(circle.value() * data);
                circle.setText(value);
            }
        })

        $(window).scroll(function() {
            let scroll= $(window).scrollTop();

            if(scroll > (dataAreaOffset.top - 500) && stop) {
                
                circle.animate(1.0);               
                stop = false;
            }
        })
    };

    PBS("circleA",1400,60);
    PBS("circleB",1600,254);
    PBS("circleC",2000,32);
    PBS("circleD",2200,5243);

    //Parallax

    setTimeout(function() {

        $("#data-area").parallax({imageSrc: "img/cidadeparallax.png"});
        $("#apply-area").parallax({imageSrc: "img/pattern.png"});
    
    },250);

    //Filtro do portfólio

    function eachBoxes(type) {
        let boxes = $(".project-box");
        $(boxes).fadeOut()
        if(type=="all") {
            $(boxes).fadeIn();
        } else {
            $('.'+type).fadeIn();
        };
    };

    $(".filter-btn").on("click", function() {

        let type = $(this).attr("id");
        let l1 = ["dsg","all","dev","seo"];

        $(".main-btn").removeClass("active");
        $(this).addClass("active");

        for(let i=0; i<l1.length; i++) {
            if(type.indexOf(l1[i])!= -1) {
                eachBoxes(l1[i]);
            };
        };
    });

    // Scroll para seções

    let allSections = [$("#slider-area"),$("#about-area"),$("#services-area"),$("#team-area"),$("#portfolio-area"),$("#contact-area")]

    $('.nav-item').click(function () {

        var section = $(this)
            .attr("id")
            .split("-")[0];
        
        for(let i=0; i < allSections.length; i++) {

            let st = allSections[i].attr("id");

            if(st.indexOf(section) == 0) {
                var scrollTo = allSections[i];
            };
        };

        $([document.documentElement, document.body]).animate({
            scrollTop: scrollTo.offset().top-70
        },500);

    });
    
});