// scroll animation control
new WOW().init();

//Skills Progress meter
$(document).ready(function(){
    $("#dsa").animate({"width":"60%"},1000,function(){
        $("#html").animate({"width":"70%"},1000,function(){
            $("#css").animate({"width":"80%"},1000,function(){
                $("#js").animate({"width":"60%"},1000,function(){
                    $("#jquery").animate({"width":"80%"},1000,function(){
                        $("#bootstrap").animate({"width":"70%"},1000,function(){
                            $("#ajax").animate({"width":"80%"},1000,function(){
                                $("#sql").animate({"width":"90%"},1000,function(){
                                    $("#php").animate({"width":"70%"},1000,);
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});