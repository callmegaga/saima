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
$rid = 1;
$races = DB::fetch_all("SELECT end FROM pre_common_saima_race WHERE id='$rid'");
var_dump($races[0]['end']);