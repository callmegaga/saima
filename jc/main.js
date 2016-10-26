/**
 * Created by wy on 16-10-24.
 */
var NowRace=0;
var NowTime;
var NowGameType=1;
var AllGames=[];
var NowPage=0;
var NowMenuPage=0;


$("#searchGame").click(function () {
    var start = Date.parse(new Date($("#dt7").val()))/1000;
    var end = Date.parse(new Date($("#dt8").val()))/1000;
    var rid = $("#playing").val();
    var id = $("#danhao").val();
    var zhong = $("#zhong").val();
    var type = $("#playing").val();
    if(!start){
        start = undefined;
    }
    if(!end){
        end = undefined;
    }
    if(rid == "0"){
        rid = undefined
    }
    if(id == "单号" || id == undefined){
        id = undefined
    }
    if(zhong == 0){
        zhong = undefined
    }
    if(zhong == 3){
        zhong =0;
    }
    if(type == 0){
        type = undefined;
    }
    NowPage = 0;
    $.post("/bbs/template/saima/jc/searchGame.php",{page:NowPage,start:start,end:end,rid:rid,type:type,status:zhong,id:id},function (data) {
        var data = JSON.parse(data);
        var trs ="";
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
            var tr ="<tr><td>"+id+"</td><td>"+rid+"</td><td>"+type+"</td><td>"+info+"</td><td>"+money+"</td><td>"+format(time*1000)+"</td><td>"+format(end*1000).split(" ")[0]+"</td><td>"+get+"</td></tr>";
            trs += tr;
        }
        $("#RecordTab tbody").html(trs);
    })
});


function add0(m){return m<10?'0'+m:m }
function format(shijianchuo)
{
//shijianchuo是整数，否则要parseInt转换
    var time = new Date(shijianchuo);
    var y = time.getFullYear();
    var m = time.getMonth()+1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
}
function prevMenu() {
    if(NowMenuPage > 1){
        NowMenuPage--;
        var trs ="";
        for(var i=NowMenuPage*11-1;i<(NowMenuPage+1)*11-1;i++){
            var num = i*1+1;
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
            var button = "<a href='#' onclick=removeGame('"+i+"')><span class='glyphicon glyphicon-remove'>删除</span></a>";
            var tr = "<tr><td>"+num+"</td><td>"+race+"</td><td>"+type+"</td><td>"+info+"</td><td>"+money+"</td><td>"+button+"</td></tr>";
            trs += tr;
        }
        $("#content tbody").html(trs);
        $("#pp6").html("当前第"+(NowMenuPage*1+1)+"页&nbsp;共"+(NowMenuPage*1+1)+"页");
    }else {
        NowMenuPage=0;
        var trs ="";
        for(var i=0;i<10;i++){
            var num = i*1+1;
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
            var button = "<a href='#' onclick=removeGame('"+i+"')><span class='glyphicon glyphicon-remove'>删除</span></a>";
            var tr = "<tr><td>"+num+"</td><td>"+race+"</td><td>"+type+"</td><td>"+info+"</td><td>"+money+"</td><td>"+button+"</td></tr>";
            trs += tr;
        }
        $("#content tbody").html(trs);
        $("#pp6").html("当前第"+(NowMenuPage*1+1)+"页&nbsp;共"+(NowMenuPage*1+1)+"页");
    }
}
function nextMenu() {
    if(NowMenuPage != parseInt(AllGames.length/11)){
        NowMenuPage++;
        var trs ="";
        for(var i=NowMenuPage*11-1;i<(NowMenuPage+1)*11-1;i++){
            if(i<AllGames.length){
                var num = i*1+1;
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
                var button = "<a href='#' onclick=removeGame('"+i+"')><span class='glyphicon glyphicon-remove'>删除</span></a>";
                var tr = "<tr><td>"+num+"</td><td>"+race+"</td><td>"+type+"</td><td>"+info+"</td><td>"+money+"</td><td>"+button+"</td></tr>";
                trs += tr;
            }
        }
        $("#content tbody").html(trs);
        $("#pp6").html("当前第"+(NowMenuPage*1+1)+"页&nbsp;共"+(NowMenuPage*1+1)+"页");
    }
}
function prevPage() {
    if(NowPage>=1){
        NowPage--;
        var start = Date.parse(new Date($("#dt7").val()))/1000;
        var end = Date.parse(new Date($("#dt8").val()))/1000;
        var rid = $("#playing").val();
        var id = $("#danhao").val();
        var zhong = $("#zhong").val();
        var type = $("#playing").val();
        if(!start){
            start = undefined;
        }
        if(!end){
            end = undefined;
        }
        if(rid == "0"){
            rid = undefined
        }
        if(id == "单号" || id == undefined){
            id = undefined
        }
        if(zhong == 0){
            zhong = undefined
        }
        if(zhong == 3){
            zhong =0;
        }
        if(type == 0){
            type = undefined;
        }
        $.post("/bbs/template/saima/jc/searchGame.php",{page:NowPage*1+1,start:start,end:end,rid:rid,type:type,status:zhong,id:id},function (data) {
            var data = JSON.parse(data);
            var trs ="";
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
                var tr ="<tr><td>"+id+"</td><td>"+rid+"</td><td>"+type+"</td><td>"+info+"</td><td>"+money+"</td><td>"+format(time*1000)+"</td><td>"+format(end*1000).split(" ")[0]+"</td><td>"+get+"</td></tr>";
                trs += tr;
            }
            $("#RecordTab tbody").html(trs);
        })
    }
    else {
        window.alert("已是第一页")
    }
}

function nextPage() {
    var start = Date.parse(new Date($("#dt7").val()))/1000;
    var end = Date.parse(new Date($("#dt8").val()))/1000;
    var rid = $("#playing").val();
    var id = $("#danhao").val();
    var zhong = $("#zhong").val();
    var type = $("#playing").val();
    if(!start){
        start = undefined;
    }
    if(!end){
        end = undefined;
    }
    if(rid == "0"){
        rid = undefined
    }
    if(id == "单号" || id == undefined){
        id = undefined
    }
    if(zhong == 0){
        zhong = undefined
    }
    if(zhong == 3){
        zhong =0;
    }
    if(type == 0){
        type = undefined;
    }
    $.post("/bbs/template/saima/jc/searchGame.php",{page:NowPage*1+1,start:start,end:end,rid:rid,type:type,status:zhong,id:id},function (data) {
        var data = JSON.parse(data);
        if(data.length>0){
            NowPage++;
            var trs ="";
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
                var tr ="<tr><td>"+id+"</td><td>"+rid+"</td><td>"+type+"</td><td>"+info+"</td><td>"+money+"</td><td>"+format(time*1000)+"</td><td>"+format(end*1000).split(" ")[0]+"</td><td>"+get+"</td></tr>";
                trs += tr;
            }
            $("#RecordTab tbody").html(trs);
        }
        else {
            window.alert("已是最后一页")
        }
    })
}

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
            if(!value1){
                window.alert("没有选中的号码");
                return
            }
            var thisGame = [NowRace*1+1,NowGameType,money,value1];
            AllGames.push(thisGame);
            break;
        case 2:
            if(!value1){
                window.alert("没有选中的号码");
                return
            }
            var thisGame = [NowRace*1+1,NowGameType,money,value1];
            AllGames.push(thisGame);
            break;
        case 3:
            if(!value1 || !value2){
                window.alert("没有选中的号码");
                return
            }
            var tmp = [parseInt(value1),parseInt(value2)].sort().join(",");
            var thisGame = [NowRace*1+1,NowGameType,money,tmp];
            AllGames.push(thisGame);
            break;
        case 4:
            if(!value1 || !value2){
                window.alert("没有选中的号码");
                return
            }
            var tmp = [parseInt(value1),parseInt(value2)].sort().join(",");
            var thisGame = [NowRace*1+1,NowGameType,money,tmp];
            AllGames.push(thisGame);
            break;
        case 5:
            if(!value1 || !value2 || !value3){
                window.alert("没有选中的号码");
                return
            }
            var tmp = [parseInt(value1),parseInt(value2),parseInt(value3)].join(",");
            var thisGame = [NowRace*1+1,NowGameType,money,tmp];
            AllGames.push(thisGame);
            break;
        case 6:
            if(!value1 || !value2 || !value3){
                window.alert("没有选中的号码");
                return
            }
            var tmp = [parseInt(value1),parseInt(value2),parseInt(value3)].sort().join(",");
            var thisGame = [NowRace*1+1,NowGameType,money,tmp];
            AllGames.push(thisGame);
            break;
        case 7:
            if(!value1 || !value2 || !value3 || !value4){
                window.alert("没有选中的号码");
                return
            }
            var tmp = [parseInt(value1),parseInt(value2),parseInt(value3),parseInt(value4)].sort().join(",");
            var thisGame = [NowRace*1+1,NowGameType,money,tmp];
            AllGames.push(thisGame);
            break;
    }
    toShowGames()
});

function toShowGames() {
    var trs ="";
    if(AllGames.length>10){
        NowMenuPage = parseInt(AllGames.length/11);
        for(var i=NowMenuPage*11-1;i<AllGames.length;i++){
            var num = i*1+1;
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
            var button = "<a href='#' onclick=removeGame('"+i+"')><span class='glyphicon glyphicon-remove'>删除</span></a>";
            var tr = "<tr><td>"+num+"</td><td>"+race+"</td><td>"+type+"</td><td>"+info+"</td><td>"+money+"</td><td>"+button+"</td></tr>";
            trs += tr;
        }
        $("#content tbody").html(trs);
        $("#pp6").html("当前第"+(NowMenuPage*1+1)+"页&nbsp;共"+(NowMenuPage*1+1)+"页");
        console.log(i)
    }else {
        for(var i in AllGames){
            var num = i*1+1;
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
            var button = "<a href='#' onclick=removeGame('"+i+"')><span class='glyphicon glyphicon-remove'>删除</span></a>";
            var tr = "<tr><td>"+num+"</td><td>"+race+"</td><td>"+type+"</td><td>"+info+"</td><td>"+money+"</td><td>"+button+"</td></tr>";
            trs += tr;
        }
        $("#content tbody").html(trs);
        $("#pp6").html("当前第1页&nbsp;共1页");
    }
}

$("#submiter").click(function () {
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
function removeGame(i) {
    AllGames.splice(i,1);
    toShowGames();
}

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
    NowGameType=1;
    $("#xuanhaospan2").show();
    $("#Record").hide();
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
    NowGameType=2;
    $("#xuanhaospan2").show();
    $("#Record").hide();
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
    NowGameType=3;
    $("#xuanhaospan2").show();
    $("#Record").hide();
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
    NowGameType=4;
    $("#xuanhaospan2").show();
    $("#Record").hide();
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
    NowGameType=5;
    $("#xuanhaospan2").show();
    $("#Record").hide();
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
    NowGameType=6;
    $("#xuanhaospan2").show();
    $("#Record").hide();
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
    NowGameType=7;
    $("#xuanhaospan2").show();
    $("#Record").hide();
});

$("#menu8").click(function () {
    $("div[name=menuelement]").removeClass("this");
    $(this).addClass("this");
    $("#xuanhaospan2").hide();
    $("#Record").show();
    $("#searchGame").click();
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