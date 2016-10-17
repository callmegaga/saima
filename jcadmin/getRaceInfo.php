<?php
require_once '../../../source/class/class_core.php';

$discuz = C::app();
$discuz->init();

$races = DB::fetch_all("SELECT * FROM pre_common_saima_race");

$AllRace = array();

foreach ($races as $value)
{
    $id = (int)$value['id'];
    $time = $value['time'];

    $details = DB::fetch_all("SELECT * FROM pre_common_saima_detail WHERE race='$id'");

    $details[] = $time;

    $AllRace[] = $details;
}

echo json_encode($AllRace);