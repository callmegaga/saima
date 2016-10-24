<?php
/**
 * Created by PhpStorm.
 * User: ehigh
 * Date: 16-10-18
 * Time: 上午10:48
 */
require_once '../../../source/class/class_core.php';

$discuz = C::app();
$discuz->init();
if(!defined('IN_DISCUZ')) {
    exit('Access Denied');
}

$raceResult = array(
    "type_1"            => $_POST['type_1'],
    "type_1_result"     => $_POST['type_1_result'],
    "type_2_1"          => $_POST['type_2_1'],
    "type_2_1_result"   => $_POST['type_2_1_result'],
    "type_2_2"          => $_POST['type_2_2'],
    "type_2_2_result"   => $_POST['type_2_2_result'],
    "type_2_3"          => $_POST['type_2_3'],
    "type_2_3_result"   => $_POST['type_2_3_result'],
    "type_3"            => $_POST['type_3'],
    "type_3_result"     => $_POST['type_3_result'],
    "type_4_1"          => $_POST['type_4_1'],
    "type_4_1_result"   => $_POST['type_4_1_result'],
    "type_4_2"          => $_POST['type_4_2'],
    "type_4_2_result"   => $_POST['type_4_2_result'],
    "type_4_3"          => $_POST['type_4_3'],
    "type_4_3_result"   => $_POST['type_4_3_result'],
    "type_5"            => $_POST['type_5'],
    "type_5_result"     => $_POST['type_5_result'],
    "type_6"            => $_POST['type_6'],
    "type_6_result"     => $_POST['type_6_result'],
    "type_7"            => $_POST['type_7'],
    "type_7_result"     => $_POST['type_7_result'],
);
$rid = $_POST['rid'];

$races = DB::fetch_all("SELECT uid FROM pre_common_saima_game WHERE rid='$rid'");
foreach ($races as $key => $value)
{
    $races[$key] = $value['uid'];
}

foreach (array_unique($races) as $value)
{
    $credit = C::t('common_member')->fetch($value)['credits'];

    $thePersonRace = DB::fetch_all("SELECT * FROM pre_common_saima_game WHERE rid='$rid' && uid='$value'");

    foreach ($thePersonRace as $point => $data)
    {
        $money = (int)$data['money'];
        $type  = (int)$data['type'];
        $info  = $data['info'];

        switch ($type)
        {
            case 1:
                if(typeOneCheck($raceResult,$info))
                {
                    C::t('common_member')->update($_G['uid'],array("credits" => $credit + $money));
                };
                break;
            case 2:
                echo 2;
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
        }
    }
}

function typeOneCheck($result,$info)
{
    if($result[0] == $info)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function typeTwoCheck($result,$info)
{

}

function typeThreeCheck($result,$info)
{

}

function typeFourCheck($result,$info)
{

}

function typeFiveCheck($result,$info)
{

}

function typeSixCheck($result,$info)
{

}

function typeSevenCheck($result,$info)
{

}