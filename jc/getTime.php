<?php
require_once '../../../source/class/class_core.php';

$discuz = C::app();
$discuz->init();
if(!defined('IN_DISCUZ')) {
    exit('Access Denied');
}

$result = DB::fetch_all("SELECT end FROM pre_common_saima_race");

$date = array();
foreach ($result as $key=>$value)
{
    $time = $value['end'] - time();
    $date[] = $time;
}

echo json_encode($date);
