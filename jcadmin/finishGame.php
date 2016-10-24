<?php
/**
 * Created by PhpStorm.
 * User: ehigh
 * Date: 16-10-24
 * Time: 下午3:34
 */
require_once '../../../source/class/class_core.php';

$discuz = C::app();
$discuz->init();
if(!defined('IN_DISCUZ')) {
    exit('Access Denied');
}

$type_1            = (int)$_POST['type_1'];
$type_1_result     = (float)$_POST['type_1_result'];
$type_2_1          = (int)$_POST['type_2_1'];
$type_2_1_result   = (float)$_POST['type_2_1_result'];
$type_2_2          = (int)$_POST['type_2_2'];
$type_2_2_result   = (float)$_POST['type_2_2_result'];
$type_2_3          = $_POST['type_2_3'];
$type_2_3_result   = (int)(float)$_POST['type_2_3_result'];
$type_3            = $_POST['type_3'];
$type_3_result     = (float)$_POST['type_3_result'];
$type_4_1          = $_POST['type_4_1'];
$type_4_1_result   = (float)$_POST['type_4_1_result'];
$type_4_2          = $_POST['type_4_2'];
$type_4_2_result   = (float)$_POST['type_4_2_result'];
$type_4_3          = $_POST['type_4_3'];
$type_4_3_result   = (float)$_POST['type_4_3_result'];
$type_5            = $_POST['type_5'];
$type_5_result     = (float)$_POST['type_5_result'];
$type_6            = $_POST['type_6'];
$type_6_result     = (float)$_POST['type_6_result'];
$type_7            = $_POST['type_7'];
$type_7_result     = (float)$_POST['type_7_result'];

$rid = (int)$_POST['rid'];

handleType_1($rid,$type_1,$type_1_result);

handleType_2_1($rid,$type_2_1,$type_2_1_result);

handleType_2_2($rid,$type_2_2,$type_2_2_result);

handleType_2_3($rid,$type_2_3,$type_2_3_result);

handleType_3($rid,$type_3,$type_3_result);

handleType_4_1($rid,$type_4_1,$type_4_1_result);

handleType_4_2($rid,$type_4_2,$type_4_2_result);

handleType_4_3($rid,$type_4_3,$type_4_3_result);

handleType_5($rid,$type_5,$type_5_result);

handleType_6($rid,$type_6,$type_7_result);

handleType_7($rid,$type_7,$type_7_result);

//处理单赢
function handleType_1($rid,$type_1,$type_1_result)
{
    $result = DB::fetch_all("SELECT * FROM pre_common_saima_game WHERE rid='$rid' AND type=1 AND info='$type_1' AND status = 0");
    foreach ($result as $value)
    {
        $uid = $value['uid'];
        $money = $value['money'];
        $credit = C::t('common_member')->fetch($uid)['credits'];
        C::t('common_member')->update($uid,array("credits" => (int)($credit + $money*$type_1_result)));
    }
    DB::query("UPDATE pre_common_saima_game SET status = 2 WHERE rid='$rid' AND type=1 AND info='$type_1' AND status = 0");
}

//处理位置1
function handleType_2_1($rid,$type_2_1,$type_2_1_result)
{
    $result = DB::fetch_all("SELECT * FROM pre_common_saima_game WHERE rid='$rid' AND type=2 AND info='$type_2_1' AND status = 0");
    foreach ($result as $value)
    {
        $uid = $value['uid'];
        $money = $value['money'];
        $credit = C::t('common_member')->fetch($uid)['credits'];
        C::t('common_member')->update($uid,array("credits" => (int)($credit + $money*$type_2_1_result)));
    }
    DB::query("UPDATE pre_common_saima_game SET status = 2 WHERE rid='$rid' AND type=2 AND info='$type_2_1' AND status = 0");
}
//处理位置2
function handleType_2_2($rid,$type_2_2,$type_2_2_result)
{
    $result = DB::fetch_all("SELECT * FROM pre_common_saima_game WHERE rid='$rid' AND type=2 AND info='$type_2_2' AND status = 0");
    foreach ($result as $value)
    {
        $uid = $value['uid'];
        $money = $value['money'];
        $credit = C::t('common_member')->fetch($uid)['credits'];
        C::t('common_member')->update($uid,array("credits" => (int)($credit + $money*$type_2_2_result)));
    }
    DB::query("UPDATE pre_common_saima_game SET status = 2 WHERE rid='$rid' AND type=2 AND info='$type_2_2' AND status = 0");
}
//处理位置3
function handleType_2_3($rid,$type_2_3,$type_2_3_result)
{
    $result = DB::fetch_all("SELECT * FROM pre_common_saima_game WHERE rid='$rid' AND type=2 AND info='$type_2_3' AND status = 0");
    foreach ($result as $value)
    {
        $uid = $value['uid'];
        $money = $value['money'];
        $credit = C::t('common_member')->fetch($uid)['credits'];
        C::t('common_member')->update($uid,array("credits" => (int)($credit + $money*$type_2_3_result)));
    }
    DB::query("UPDATE pre_common_saima_game SET status = 2 WHERE rid='$rid' AND type=2 AND info='$type_2_3' AND status = 0");
}

//处理连赢
function handleType_3($rid,$type_3,$type_3_result)
{
    $result = DB::fetch_all("SELECT * FROM pre_common_saima_game WHERE rid='$rid' AND type=3 AND info='$type_3' AND status = 0");
    foreach ($result as $value)
    {
        $uid = $value['uid'];
        $money = $value['money'];
        $credit = C::t('common_member')->fetch($uid)['credits'];
        C::t('common_member')->update($uid,array("credits" => (int)($credit + $money*$type_3_result)));
    }
    DB::query("UPDATE pre_common_saima_game SET status = 2 WHERE rid='$rid' AND type=3 AND info='$type_3' AND status = 0");
}


//处理位置Q_1
function handleType_4_1($rid,$type_4_1,$type_4_1_result)
{
    $result = DB::fetch_all("SELECT * FROM pre_common_saima_game WHERE rid='$rid' AND type=4 AND info='$type_4_1' AND status = 0");
    foreach ($result as $value)
    {
        $uid = $value['uid'];
        $money = $value['money'];
        $credit = C::t('common_member')->fetch($uid)['credits'];
        C::t('common_member')->update($uid,array("credits" => (int)($credit + $money*$type_4_1_result)));
    }
    DB::query("UPDATE pre_common_saima_game SET status = 2 WHERE rid='$rid' AND type=4 AND info='$type_4_1' AND status = 0");
}
//处理位置Q_2
function handleType_4_2($rid,$type_4_2,$type_4_2_result)
{
    $result = DB::fetch_all("SELECT * FROM pre_common_saima_game WHERE rid='$rid' AND type=4 AND info='$type_4_2' AND status = 0");
    foreach ($result as $value)
    {
        $uid = $value['uid'];
        $money = $value['money'];
        $credit = C::t('common_member')->fetch($uid)['credits'];
        C::t('common_member')->update($uid,array("credits" => (int)($credit + $money*$type_4_2_result)));
    }
    DB::query("UPDATE pre_common_saima_game SET status = 2 WHERE rid='$rid' AND type=4 AND info='$type_4_2' AND status = 0");
}
//处理位置Q_3
function handleType_4_3($rid,$type_4_3,$type_4_3_result)
{
    $result = DB::fetch_all("SELECT * FROM pre_common_saima_game WHERE rid='$rid' AND type=4 AND info='$type_4_3' AND status = 0");
    foreach ($result as $value)
    {
        $uid = $value['uid'];
        $money = $value['money'];
        $credit = C::t('common_member')->fetch($uid)['credits'];
        C::t('common_member')->update($uid,array("credits" => (int)($credit + $money*$type_4_3_result)));
    }
    DB::query("UPDATE pre_common_saima_game SET status = 2 WHERE rid='$rid' AND type=4 AND info='$type_4_3' AND status = 0");
}


//处理三重彩
function handleType_5($rid,$type_5,$type_5_result)
{
    $result = DB::fetch_all("SELECT * FROM pre_common_saima_game WHERE rid='$rid' AND type=5 AND info='$type_5' AND status = 0");
    foreach ($result as $value)
    {
        $uid = $value['uid'];
        $money = $value['money'];
        $credit = C::t('common_member')->fetch($uid)['credits'];
        C::t('common_member')->update($uid,array("credits" => (int)($credit + $money*$type_5_result)));
    }
    DB::query("UPDATE pre_common_saima_game SET status = 2 WHERE rid='$rid' AND type=5 AND info='$type_5' AND status = 0");
}

//处理单T
function handleType_6($rid,$type_6,$type_6_result)
{
    $result = DB::fetch_all("SELECT * FROM pre_common_saima_game WHERE rid='$rid' AND type=6 AND info='$type_6' AND status = 0");
    foreach ($result as $value)
    {
        $uid = $value['uid'];
        $money = $value['money'];
        $credit = C::t('common_member')->fetch($uid)['credits'];
        C::t('common_member')->update($uid,array("credits" => (int)($credit + $money*$type_6_result)));
    }
    DB::query("UPDATE pre_common_saima_game SET status = 2 WHERE rid='$rid' AND type=6 AND info='$type_6' AND status = 0");
}

//处理四连环
function handleType_7($rid,$type_7,$type_7_result)
{
    $result = DB::fetch_all("SELECT * FROM pre_common_saima_game WHERE rid='$rid' AND type=7 AND info='$type_7' AND status = 0");
    foreach ($result as $value)
    {
        $uid = $value['uid'];
        $money = $value['money'];
        $credit = C::t('common_member')->fetch($uid)['credits'];
        C::t('common_member')->update($uid,array("credits" => (int)($credit + $money*$type_7_result)));
    }
    DB::query("UPDATE pre_common_saima_game SET status = 2 WHERE rid='$rid' AND type=7 AND info='$type_7' AND status = 0");
}

echo  "ok";