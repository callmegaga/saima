<?php
require_once '../../../source/class/class_core.php';

$discuz = C::app();
$discuz->init();
if(!defined('IN_DISCUZ')) {
    exit('Access Denied');
}

$username = C::t('common_member')->fetch($_G['uid'])['username'];
$usermoney = C::t('common_member_count')->fetch($_G['uid'])['extcredits2'];
$data = array(
    "userName" => $username,
    "credits" => $usermoney
);

echo json_encode($data);