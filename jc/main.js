/**
 * Created by wy on 16-10-24.
 */
var NowRace=0;
var NowTime;
var NowGameType=1;
var AllGames=[];

$("#add2").click(function () {
    for (var i in $("input[name=q1]")){
        if($("input[name=q1]")[i].checked == true){
            var value1 = $("input[name=q1]")[i].value;
        }
    }
    for (var i in $("input[name=q2]")){
        if($("input[name=q2]")[i].checked == true){
            var value2 = $("input[name=q2]")[i].value;
        }
    }
    for (var i in $("input[name=q3]")){
        if($("input[name=q3]")[i].checked == true){
            var value3 = $("input[name=q3]")[i].value;
        }
    }
    for (var i in $("input[name=q4]")){
        if($("input[name=q4]")[i].checked == true){
            var value4 = $("input[name=q4]")[i].value;
        }
    }
    var money = $("#zhushu").val();
    if((money == 0)||(money%100 != 0)){
        window.alert("请输入100的倍数");
        return
    }
    switch (NowGameType){
        case 1:
            var thisGame = [NowRace*1+1,NowGameType,money,value1];
            AllGames.push(thisGame);
            break;
        case 2:
            var thisGame = [NowRace*1+1,NowGameType,money,value1];
            AllGames.push(thisGame);
            break;
        case 3:
            var tmp = [parseInt(value1),parseInt(value2)].sort().join(",");
            var thisGame = [NowRace*1+1,NowGameType,money,tmp];
            AllGames.push(thisGame);
            break;
        case 4:
            var tmp = [parseInt(value1),parseInt(value2)].sort().join(",");
            var thisGame = [NowRace*1+1,NowGameType,money,tmp];
            AllGames.push(thisGame);
            break;
        case 5:
            var tmp = [parseInt(value1),parseInt(value2),parseInt(value3)].join(",");
            var thisGame = [NowRace*1+1,NowGameType,money,tmp];
            AllGames.push(thisGame);
            break;
        case 6:
            var tmp = [parseInt(value1),parseInt(value2),parseInt(value3)].sort().join(",");
            var thisGame = [NowRace*1+1,NowGameType,money,tmp];
            AllGames.push(thisGame);
            break;
        case 7:
            var tmp = [parseInt(value1),parseInt(value2),parseInt(value3),parseInt(value4)].sort().join(",");
            var thisGame = [NowRace*1+1,NowGameType,money,tmp];
            AllGames.push(thisGame);
            break;
    }
    toShowGames()
});

function toShowGames() {
    var trs ="";
    for(var i in AllGames){
        var num = i*1+1;
        var race = AllGames[1][0];
        var type = AllGames[1][1];
        switch (type){
            case 1:
                type = "单赢";
                break;
            case 2:
                type = "位置";
                break;
            case 3:
                type = "连赢";
                break;
            case 4:
                type = "位置Q";
                break;
            case 5:
                type = "三重彩";
                break;
            case 6:
                type = "单T";
                break;
            case 7:
                type = "四连环";
                break;
        }
        var money = AllGames[1][2];
        var info  = AllGames[1][3];
        var button = "<a href='#' value='"+i+"' class='removeGame'><span class='glyphicon glyphicon-remove'></span></a>";
        var tr = "<tr><td>"+num+"</td><td>"+race+"</td><td>"+type+"</td><td>"+info+"</td><td>"+money+"</td><td>"+button+"</td></tr>";
        trs += tr;
    }
    $("#contact tbody").html(trs);
}

$("#submiter").click(function () {
    $.post('../template/saima/jcadmin/handleGame.php',{data:AllGames},function (data) {
        var data = JSON.parse(data);
        if (data == 'ok'){
            window.alert("下注成功！！")
            AllGames = [];
            toShowGames();
        }
    })
});

$(".removeGame").on("click",function () {
    console.log(this.value)
});

$("#showThemenu").mouseover(function () {
    $("#accordion_element_71935").toggle(200)
});

$("#menu1").click(function () {
    $("#wanfatitle").html("独赢");
    $("#wanfajieshao").html("选中一场赛事中的第1()名马匹");
    $("div[name=menuelement]").removeClass("this");
    $(this).addClass("this");
    $("#head1").html("第一");
    $("#head1").show();
    $("#head2").hide();
    $("#head3").hide();
    $("#head4").hide();
    $("td[name=t1]").show();
    $("td[name=t2]").hide();
    $("td[name=t3]").hide();
    $("td[name=t4]").hide();
    $(".detailContainer input").attr("disabled",false);
    for(var i in $(".detailContainer input")){
        $(".detailContainer input")[i].checked = false
    }
    NowGameType=1
});

$("#menu2").click(function () {
    $("#wanfatitle").html("位置");
    $("#wanfajieshao").html("(6匹马以上)选中前三名任意一匹马;（4至6匹马）选中前二名任意一匹马");
    $("div[name=menuelement]").removeClass("this");
    $(this).addClass("this");
    $("#head1").html("前三");
    $("#head1").show();
    $("#head2").hide();
    $("#head3").hide();
    $("#head4").hide();
    $("td[name=t1]").show();
    $("td[name=t2]").hide();
    $("td[name=t3]").hide();
    $("td[name=t4]").hide();
    $(".detailContainer input").attr("disabled",false);
    for(var i in $(".detailContainer input")){
        $(".detailContainer input")[i].checked = false
    }
    NowGameType=2
});

$("#menu3").click(function () {
    $("#wanfatitle").html("连赢");
    $("#wanfajieshao").html("选中一场赛事中的第1名及第2名马匹，毋须顺序");
    $("div[name=menuelement]").removeClass("this");
    $(this).addClass("this");
    $("#head1").html("前二");
    $("#head2").html("前二");
    $("#head1").show();
    $("#head2").show();
    $("#head3").hide();
    $("#head4").hide();
    $("td[name=t1]").show();
    $("td[name=t2]").show();
    $("td[name=t3]").hide();
    $("td[name=t4]").hide();
    $(".detailContainer input").attr("disabled",false);
    for(var i in $(".detailContainer input")){
        $(".detailContainer input")[i].checked = false
    }
    NowGameType=3
});

$("#menu4").click(function () {
    $("#wanfatitle").html("位置Q");
    $("#wanfajieshao").html("选中一场赛事中前3名马匹中的任何两匹，毋须顺序");
    $("div[name=menuelement]").removeClass("this");
    $(this).addClass("this");
    $("#head1").html("前三");
    $("#head2").html("前三");
    $("#head1").show();
    $("#head2").show();
    $("#head3").hide();
    $("#head4").hide();
    $("td[name=t1]").show();
    $("td[name=t2]").show();
    $("td[name=t3]").hide();
    $("td[name=t4]").hide();
    $(".detailContainer input").attr("disabled",false);
    for(var i in $(".detailContainer input")){
        $(".detailContainer input")[i].checked = false
    }
    NowGameType=4
});

$("#menu5").click(function () {
    $("#wanfatitle").html("三重彩");
    $("#wanfajieshao").html("在一场赛事中，按顺序拣中前3名马匹，注意需按排名顺序选中");
    $("div[name=menuelement]").removeClass("this");
    $(this).addClass("this");
    $("#head1").html("第一");
    $("#head2").html("第二");
    $("#head3").html("第三");
    $("#head1").show();
    $("#head2").show();
    $("#head3").show();
    $("#head4").hide();
    $("td[name=t1]").show();
    $("td[name=t2]").show();
    $("td[name=t3]").show();
    $("td[name=t4]").hide();
    $(".detailContainer input").attr("disabled",false);
    for(var i in $(".detailContainer input")){
        $(".detailContainer input")[i].checked = false
    }
    NowGameType=5
});

$("#menu6").click(function () {
    $("#wanfatitle").html("单T");
    $("#wanfajieshao").html("在一场赛事中，拣中前3名马匹即可，毋须顺序");
    $("div[name=menuelement]").removeClass("this");
    $(this).addClass("this");
    $("#head1").html("前三");
    $("#head2").html("前三");
    $("#head3").html("前三");
    $("#head1").show();
    $("#head2").show();
    $("#head3").show();
    $("#head4").hide();
    $("td[name=t1]").show();
    $("td[name=t2]").show();
    $("td[name=t3]").show();
    $("td[name=t4]").hide();
    $(".detailContainer input").attr("disabled",false);
    for(var i in $(".detailContainer input")){
        $(".detailContainer input")[i].checked = false
    }
    NowGameType=6
});

$("#menu7").click(function () {
    $("#wanfatitle").html("四连环");
    $("#wanfajieshao").html("在一场赛事中，拣中前4名马匹即可，毋须顺序");
    $("div[name=menuelement]").removeClass("this");
    $(this).addClass("this");
    $("#head1").html("前四");
    $("#head2").html("前四");
    $("#head3").html("前四");
    $("#head4").html("前四");
    $("#head1").show();
    $("#head2").show();
    $("#head3").show();
    $("#head4").show();
    $("td[name=t1]").show();
    $("td[name=t2]").show();
    $("td[name=t3]").show();
    $("td[name=t4]").show();
    $(".detailContainer input").attr("disabled",false);
    for(var i in $(".detailContainer input")){
        $(".detailContainer input")[i].checked = false
    }
    NowGameType=7
});


$("#zhushu").focus(function () {
    if($("#zhushu").val() == "输入金币"){
        $("#zhushu").val("")
    }
});
$(".detailContainer input").click(function () {
   if($(this)[0].checked){
       $(".detailContainer input").attr("disabled",false);
       for (var i in $(".detailContainer input")){
           if($(".detailContainer input")[i].checked == true){
               var value = $(".detailContainer input")[i].value;
               $("input[value="+value+"]").attr("disabled",true);
           }
       }
   }
});


function getUserInfo() {
    $.get("/bbs/template/saima/jc/getUserInfo.php",function (data) {
        var data = JSON.parse(data);
        $("#username").html(data.userName);
        $("#money").html(data.credits)
    })
}
getUserInfo();

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
            console.log(data[0].length);
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