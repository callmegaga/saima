<?php
require_once '../../../source/class/class_core.php';

$discuz = C::app();
$discuz->init();
if(!defined('IN_DISCUZ')) {
    exit('Access Denied');
}

$postData = $_POST['data'];

foreach ($postData as $value)
{
    $rid = $value[0];
    $type = $value[1];
    $money = $value[2];
    $info = $value[3];

    if ($rid&&$type&&$money&&$info)
    {
        $sqlData = array(
            "uid"=>(int)$_G['uid'],
            "rid"=>(int)$rid,
            "type"=>(int)$type,
            "money"=>(int)$money,
            "info"=>$info,
            "time"=>time()
        );

        $result = DB::fetch_all("SELECT end FROM pre_common_saima_race WHERE id='$rid'");
        $end = (int)$result[0]['end'];

        if(time()>=$end)
        {
            return "too late";
        }
        try
        {
            $credit = C::t('common_member_count')->fetch($_G['uid'])['extcredits2'];

            if(($credit - $money) > 0)
            {
                $sqlData['end'] = $end;

                DB::insert("common_saima_game", $sqlData);

                C::t('common_member_count')->update($_G['uid'],array("extcredits2" => $credit-$money));

                echo "ok,";
            }
            else
            {
                echo "金币不足,";
            }

        }
        catch (Exception $e)
        {
            echo 2444;
        }
    }
    else
    {
        echo 2333;
    }
}


