<?php
require_once '../../../source/class/class_core.php';

$discuz = & discuz_core::instance();
$discuz->cachelist = $cachelist;
$discuz->init();


$data = array(
    "detail" => 1,
    "time" => "123"
);

DB::insert("common_saima_race_tmp", $data);