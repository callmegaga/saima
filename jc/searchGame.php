<?php
require_once '../../../source/class/class_core.php';

$discuz = C::app();
$discuz->init();
if(!defined('IN_DISCUZ')) {
    exit('Access Denied');
}

$start = 0;
$end   = 9999999999;
$uid = (int)$_G['uid'];
if(isset($_POST['start']))
{
    $start = $_POST['start'];
}

if(isset($_POST['end']))
{
    $end = $_POST['end'];
}

$sql = "SELECT * FROM pre_common_saima_game WHERE uid=$uid AND time>'$start' AND time<'$end'";

if(isset($_POST['rid']))
{
    $rid = $_POST['rid'];
    $sql = $sql." AND rid='$rid'";
}

if(isset($_POST['type']))
{
    $type = $_POST['type'];
    $sql = $sql." AND type='$type'";
}

if(isset($_POST['status']))
{
    $status = $_POST['status'];
    $sql = $sql." AND status='$status'";
}

if(isset($_POST['id']))
{
    $id = $_POST['id'];
    $sql = $sql." AND id='$id'";
}

$page = (int)$_POST['page'];

$nowContent = $page*20-1;

if($page == 0)
{
    $nowContent = 0;
}

$sql = $sql." ORDER BY id desc LIMIT $nowContent,20";

$result = DB::fetch_all($sql);

echo json_encode($result);

