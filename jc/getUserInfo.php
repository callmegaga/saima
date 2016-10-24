<?php
require_once '../../../source/class/class_core.php';

$discuz = C::app();
$discuz->init();
if(!defined('IN_DISCUZ')) {
    exit('Access Denied');
}

$user = C::t('common_member')->fetch($_G['uid']);

$data = array(
    "userName" => $user['username'],
    "credits" => $user['credits']
);

echo json_encode($data);