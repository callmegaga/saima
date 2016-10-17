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

$AllRace[] = $thisRace;

$html=null;

for($i = 3 ;$i < (count($allPlaceUrl)-1);$i++)
{
    $url = $allPlaceUrl[$i]->children(0)->href;

    $url = 'http://racing.hkjc.com'.$url;

    $AllRace[] = getRaceDataOneUrl($url);

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