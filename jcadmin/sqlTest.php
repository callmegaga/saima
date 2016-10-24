<?php
/**
 * Created by PhpStorm.
 * User: ehigh
 * Date: 16-10-24
 * Time: 下午5:03
 */
require_once '../../../source/class/class_core.php';

$discuz = C::app();
$discuz->init();
if(!defined('IN_DISCUZ')) {
    exit('Access Denied');
}

$result = DB::fetch_all("SELECT * FROM pre_common_saima_game WHERE rid='1' AND type=4 AND info='1,2' AND status = 0");

var_dump($result);