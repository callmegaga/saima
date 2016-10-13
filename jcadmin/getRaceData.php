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

$firstPageRace = $html->find('tr.tdAlignC');

$AllRace = [];

foreach ($firstPageRace as $value)
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

    $AllRace[] = $race;
}

for($i = 3 ;$i < (count($allPlaceUrl)-1);$i++)
{
    getRaceDataOneUrl($html,$AllRace,'http:/'.$allPlaceUrl[$i]->children(0)->href);
}

function getRaceDataOneUrl($html,$AllRace,$url)
{
    $html->load_file($url);

    $firstAllRace = $html->find('tr.tdAlignC');

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

        $AllRace[] = $race;
    }

    return $AllRace;
}

var_dump($AllRace);