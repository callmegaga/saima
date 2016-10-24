/**
 * Created by wy on 16-10-24.
 */
$("#showThemenu").mouseover(function () {
    $("#accordion_element_71935").toggle(200)
});

$("#menu1").click(function () {
    $("#wanfatitle").html("独赢");
    $("#wanfajieshao").html("选中一场赛事中的第1名马匹");
    $("div[name=menuelement]").removeClass("this")
    $(this).addClass("this")
});

$("#menu2").click(function () {
    $("#wanfatitle").html("位置");
    $("#wanfajieshao").html("(6匹马以上)选中前三名任意一匹马;（4至6匹马）选中前二名任意一匹马");
    $("div[name=menuelement]").removeClass("this")
    $(this).addClass("this")
});

$("#menu3").click(function () {
    $("#wanfatitle").html("连赢");
    $("#wanfajieshao").html("选中一场赛事中的第1名及第2名马匹，毋须顺序");
    $("div[name=menuelement]").removeClass("this")
    $(this).addClass("this")
});

$("#menu4").click(function () {
    $("#wanfatitle").html("位置Q");
    $("#wanfajieshao").html("选中一场赛事中前3名马匹中的任何两匹，毋须顺序");
    $("div[name=menuelement]").removeClass("this")
    $(this).addClass("this")
});

$("#menu5").click(function () {
    $("#wanfatitle").html("三重彩");
    $("#wanfajieshao").html("在一场赛事中，按顺序拣中前3名马匹，注意需按排名顺序选中");
    $("div[name=menuelement]").removeClass("this")
    $(this).addClass("this")
});

$("#menu6").click(function () {
    $("#wanfatitle").html("单T");
    $("#wanfajieshao").html("在一场赛事中，拣中前3名马匹即可，毋须顺序");
    $("div[name=menuelement]").removeClass("this")
    $(this).addClass("this")
});

$("#menu7").click(function () {
    $("#wanfatitle").html("四连环");
    $("#wanfajieshao").html("在一场赛事中，拣中前4名马匹即可，毋须顺序");
    $("div[name=menuelement]").removeClass("this")
    $(this).addClass("this")
});

function getUserInfo() {
    $.get("/bbs/template/saima/jc/getUserInfo.php",function (data) {
        var data = JSON.parse(data);
        $("#username").html(data.userName);
        $("#money").html(data.credits)
    })
}
getUserInfo();

var NowRace=0;
function getRaceInfo() {
    $.get("/bbs/template/saima/jcadmin/getRaceInfo.php",function (data) {
        var data = JSON.parse(data);
        for(var i in data){
            var count = i*1+1;
;
            $("#groud"+count).show();
        }
        for (var n in data[0]){
            if(n < data[0].length-2){
                var num = data[0][n]['num'];
                var name = data[0][n]['maming'];
                var knight = data[0][n]['knight'];
                var trainer = data[0][n]['trainer'];
                var count = n*1+1;

                $("#name"+count).html(name);
                $("#name_"+count).html(knight);
                $("#name__"+count).html(trainer);
                $("td[name=t2]").hide();
                $("td[name=t3]").hide();
                $("td[name=t4]").hide();
                $("#Rrname"+count).show()
            }
            console.log(data[0].length)
            if(n == data[0].length-2){
                $("#memo").html(data[0][n])
            }
        }

        $(".chooseRace").click(function () {
            getNowTime()
            $(".detailContainer").hide();
            var id =parseInt(this.id.split("d")[1])-1;
            NowRace = id;
            for (var n in data[id]){
                if(n < data[id].length-2){
                    var num = data[id][n]['num'];
                    var name = data[id][n]['maming'];
                    var knight = data[id][n]['knight'];
                    var trainer = data[id][n]['trainer'];
                    var count = n*1+1;

                    $("#name"+count).html(name);
                    $("#name_"+count).html(knight);
                    $("#name__"+count).html(trainer);
                    $("#Rrname"+count).show()
                }
                console.log(data[id].length);
                if(n == data[id].length-2){
                    $("#memo").html(data[id][n])
                }
            }
        })

    })
}
getRaceInfo();

var NowTime;

function getNowTime() {
    $.get("/bbs/template/saima/jc/getTime.php",function (data) {
        var data = JSON.parse(data);
        NowTime = data;
        if(NowTime[NowRace]>0){
            $("#time7").show();
            $("#dd2").html(parseInt(NowTime[NowRace]/86400));
            $("#hh2").html(parseInt(NowTime[NowRace]%86400/3600));
            $("#mm2").html(parseInt(NowTime[NowRace]%86400%3600/60));
            $("#ss2").html(parseInt(NowTime[NowRace]%86400%3600%60));
        }else {
            $("#time7").hide();
            $("#time8").show();
        }
    })
}
getNowTime();
setInterval(getNowTime,1000);