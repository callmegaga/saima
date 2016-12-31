/**
 * Created by wy on 16-12-30.
 */
var NowRace=0;
var NowTime;
var NowGameType=1;
var AllGames=[];
var NowPage=0;
var NowMenuPage=0;


//在下注和历史页面进行切换
$(".menu_add_race").click(function () {
    $(".menu_history").removeClass("active");
    $(this).addClass("active");
    $(".add_race_content").removeClass("hide");
    $(".history_content").addClass("hide");
});

$(".menu_history").click(function () {
    $(".menu_add_race").removeClass("active");
    $(this).addClass("active");
    $(".add_race_content").addClass("hide");
    $(".history_content").removeClass("hide");
});


$(".race_num_item").click(function () {
    $(".race_num_item").removeClass("active");
    $(this).addClass("active");
});

$("#select_game_type").change(function () {
    var type = parseInt($(this).val())
    switch (type){
        case 1:
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
            NowGameType=1;
            break;
        case 2:
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
            NowGameType=2;
            break;
        case 3:
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
            NowGameType=3;
            break;
        case 4:
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
            NowGameType=4;
            break;
        case 5:
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
            NowGameType=5;
            break;
        case 6:
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
            NowGameType=6;
            break;
        case 7:
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
            NowGameType=7;
            break;
    }
});


$("#game_money").focus(function () {
    if($("#game_money").val() == "输入金币"){
        $("#game_money").val("")
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


$("#first_submit").click(function () {
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
    var money = $("#game_money").val();
    if((money == 0)||(money%100 != 0)){
        window.alert("请输入100的倍数");
        return
    }
    switch (NowGameType){
        case 1:
            if(!value1){
                window.alert("缺少选中的号码");
                return
            }
            var thisGame = [NowRace*1+1,NowGameType,money,value1];
            AllGames.push(thisGame);
            break;
        case 2:
            if(!value1){
                window.alert("缺少选中的号码");
                return
            }
            var thisGame = [NowRace*1+1,NowGameType,money,value1];
            AllGames.push(thisGame);
            break;
        case 3:
            if(!value1 || !value2){
                window.alert("缺少选中的号码");
                return
            }
            var tmp = [parseInt(value1),parseInt(value2)].sort().join(",");
            var thisGame = [NowRace*1+1,NowGameType,money,tmp];
            AllGames.push(thisGame);
            break;
        case 4:
            if(!value1 || !value2){
                window.alert("缺少选中的号码");
                return
            }
            var tmp = [parseInt(value1),parseInt(value2)].sort().join(",");
            var thisGame = [NowRace*1+1,NowGameType,money,tmp];
            AllGames.push(thisGame);
            break;
        case 5:
            if(!value1 || !value2 || !value3){
                window.alert("缺少选中的号码");
                return
            }
            var tmp = [parseInt(value1),parseInt(value2),parseInt(value3)].join(",");
            var thisGame = [NowRace*1+1,NowGameType,money,tmp];
            AllGames.push(thisGame);
            break;
        case 6:
            if(!value1 || !value2 || !value3){
                window.alert("缺少选中的号码");
                return
            }
            var tmp = [parseInt(value1),parseInt(value2),parseInt(value3)].sort().join(",");
            var thisGame = [NowRace*1+1,NowGameType,money,tmp];
            AllGames.push(thisGame);
            break;
        case 7:
            if(!value1 || !value2 || !value3 || !value4){
                window.alert("缺少选中的号码");
                return
            }
            var tmp = [parseInt(value1),parseInt(value2),parseInt(value3),parseInt(value4)].sort().join(",");
            var thisGame = [NowRace*1+1,NowGameType,money,tmp];
            AllGames.push(thisGame);
            break;
    }
    toShowGames();
    console.log(AllGames)
});

$("#final_addd_game").click(function () {
    $.post('/bbs/template/saima/jcadmin/handleGame.php',{data:AllGames},function (data) {
        var data = data.split(",")[0];
        if (data == 'ok'){
            window.alert("下注成功！！");
            AllGames = [];
            toShowGames();
            getUserInfo();
        }else {
            window.alert(data)
        }
    })
});
getHistory();
function getHistory() {
    $.post("/bbs/template/saima/jc/searchGame.php",{page:NowPage},function (data) {
        var data = JSON.parse(data);
        var trs ="";
        if((data.length == 0) && (NowPage != 0)){
            window.alert("已经没有更多的竞猜记录")
        };
        for(var i in data){
            var id      = data[i]['id'];
            var rid     = data[i]['rid'];
            var type    = parseInt(data[i]['type']);
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
            var info    = data[i]['info'];
            var money   = data[i]['money'];
            var time    = data[i]['time'];
            var end     = data[i]['end'];
            var get     = data[i]['get'];
            var tr ="<tr><td>"+id+"</td><td>"+rid+"</td><td>"+type+"</td><td>"+info+"</td><td>"+money+"</td><td>"+format(get)+"</td></tr>";
            trs += tr;
        }
        $(".table_history tbody").append(trs);
    })
}
$("#getMoreHistory").click(function () {
    NowPage++;
    getHistory()
});

function format(value) {
    if (parseInt(value) == 0){
        return "未开奖"
    }
    return value
}
function toShowGames() {
    var trs ="";
    for(var i in AllGames){
        var race = AllGames[i][0];
        var type = AllGames[i][1];
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
        var money = AllGames[i][2];
        var info  = AllGames[i][3];
        var button = "<button onclick=removeGame('"+i+"')>删除</button>";
        var tr = "<tr><td>"+race+"</td><td>"+type+"</td><td>"+info+"</td><td>"+money+"</td><td>"+button+"</td></tr>";
        trs += tr;
    }
    $("#race_have_add_detail").html(trs);
}
function removeGame(i) {
    AllGames.splice(i,1);
    toShowGames();
}
function getNowTime() {
    $.get("/bbs/template/saima/jc/getTime.php",function (data) {
        var data = JSON.parse(data);
        NowTime = data;
        if(NowTime[NowRace]>0){
            var string = "截止:"+parseInt(NowTime[NowRace]/86400) + "天" + parseInt(NowTime[NowRace]%86400/3600) +"时"+parseInt(NowTime[NowRace]%86400%3600/60) +"分"+parseInt(NowTime[NowRace]%86400%3600%60) +"秒";
            $(".end_time").html(string);
            $("#game_money").attr("disabled",false);
            $("#first_submit").attr("disabled",false);
        }else {
            $(".end_time").html("竞猜已经截止");
            $("#game_money").attr("disabled",true);
            $("#first_submit").attr("disabled",true)
        }
    })
}
getNowTime();
setInterval(getNowTime,1000);


function getUserInfo() {
    $.get("/bbs/template/saima/jc/getUserInfo.php",function (data) {
        var data = JSON.parse(data);
        $(".user_info").html(data.userName);
        $(".money_num").html("金币:"+data.credits)
    })
}
getUserInfo();

function getRaceInfo() {
    $.get("/bbs/template/saima/jcadmin/getRaceInfo.php",function (data) {
        var data = JSON.parse(data);


        for (var n in data[0]){
            if(n < data[0].length-2){
                var num = data[0][n]['num'];
                var name = data[0][n]['maming'];
                var knight = data[0][n]['knight'];
                var trainer = data[0][n]['trainer'];
                var count = n*1+1;

                $("#name"+count).html(name);
                $("td[name=t2]").hide();
                $("td[name=t3]").hide();
                $("td[name=t4]").hide();
                $("#Rrname"+count).show()
            }
            if(n == data[0].length-2){
                $(".race_info_detail").html(data[0][n])
            }
        }

        $(".chooseRace").click(function () {
            //getNowTime()
            $(".detailContainer").hide();
            var id =parseInt($(this).data("num"))-1;
            NowRace = id;
            for (var n in data[id]){
                if(n < data[id].length-2){
                    var num = data[id][n]['num'];
                    var name = data[id][n]['maming'];
                    var knight = data[id][n]['knight'];
                    var trainer = data[id][n]['trainer'];
                    var count = n*1+1;

                    $("#name"+count).html(name);
                    $("#Rrname"+count).show()
                }
                if(n == data[id].length-2){
                    $(".race_info_detail").html(data[id][n])
                }
            }
        })

    })
}
getRaceInfo();
