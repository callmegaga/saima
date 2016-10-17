<?php
/**
 * Created by PhpStorm.
 * User: ehigh
 * Date: 16-10-13
 * Time: 下午5:49
 */
require_once 'simple_html_dom.php';

$html = new simple_html_dom();

$html->load_file('http://racing.hkjc.com/racing/Info/meeting/RaceCard/chinese/Local/');

$allPlaceUrl = $html->find('div.raceNum')[0]->children(0)->children(0)->children();

$firstPageRace = $html->find('table.draggable')[0]->find('tr.tdAlignC');

$detailTime = $html->find('table.lineH20')[0]->children(0)->children(0)->innertext;


$detailTime = getTimeInfo($detailTime);

$AllRace = [];

$thisRace = [];
foreach ($firstPageRace as $value)
{
    $race = [];


    $num    =   $value->children()[0]->innertext;
    $name   =  $value->children()[3]->children(0)->innertext;
    $knight =  $value->children()[6]->children(0)->innertext;
    $trainer=  $value->children()[9]->children(0)->innertext;


    if($num&&$name&&$knight&&$trainer){
        $race[] = $num;
        $race[] = $name;
        $race[] = $knight;
        $race[] = $trainer;
        $thisRace[] = $race;
    }
}

$thisRace[] = $detailTime;

$AllRace[] = $thisRace;

$html=null;

for($i = 3 ;$i < (count($allPlaceUrl)-1);$i++)
{
    $url = $allPlaceUrl[$i]->children(0)->href;

    $url = 'http://racing.hkjc.com'.$url;

    $AllRace[] = getRaceDataOneUrl($url);

}

function trimall($str)//删除空格
{
    $qian=array(" ","　","\t","\n","\r");$hou=array("","","","","");
    return str_replace($qian,$hou,$str);
}

function getTimeInfo($info)
{
    $data = trimall($info);

    $tmp = explode("<br/>", $data)[0];

    $tmp = explode(">",$tmp)[1];

    $changci = (string)explode("&",$tmp)[0];

    $tmp = explode("<br/>", $data)[1];

    $nian = (string)explode("&#", $tmp)[0];

    $tmp = explode("<br/>", $data)[1];

    $tmp = explode(";", $tmp)[1];

    $yue = (string)explode("&#", $tmp)[0];

    $tmp = explode("<br/>", $data)[1];

    $tmp = explode(";", $tmp)[2];

    $ri = (string)explode("&#", $tmp)[0];

    $tmp = explode("<br/>", $data)[1];

    $shijian = (string)explode(";", $tmp)[6];

    return $changci.','.$nian.','.$yue.','.$ri.$shijian;
}

function getRaceDataOneUrl($url)
{
    $html = new simple_html_dom();

    $html->load_file($url);

    $firstAllRace = $html->find('table.draggable')[0]->find('tr.tdAlignC');

    $thisRace = [];
    foreach ($firstAllRace as $value)
    {
        $race = [];

        $num    =   $value->children()[0]->innertext;
        $name   =  $value->children()[3]->children(0)->innertext;
        $knight =  $value->children()[6]->children(0)->innertext;
        $trainer=  $value->children()[9]->children(0)->innertext;

        $race[] = $num;
        $race[] = $name;
        $race[] = $knight;
        $race[] = $trainer;

        $thisRace[] = $race;

    }
    $html=null;

    return $thisRace;
}

echo json_encode($AllRace);