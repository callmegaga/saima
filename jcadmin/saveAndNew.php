<?php
require_once '../../../source/class/class_core.php';

$discuz = C::app();
$discuz->init();

$times = explode(";",$_POST['time']);
$races = explode(";",$_POST['race']);

try
{
    DB::query("TRUNCATE TABLE pre_common_saima_race");
    DB::query("TRUNCATE TABLE pre_common_saima_detail");
    foreach ($races as $key => $value)
    {
        $id = DB::insert("common_saima_race", array("time"=>$times[$key]),true);

        $oneRaceDetail = explode(".",$value);

        foreach ($oneRaceDetail as $info)
        {
            $num = explode(",",$info)[0];
            $name = explode(",",$info)[1];
            $knight = explode(",",$info)[2];
            $trainer = explode(",",$info)[3];

            $sqlData = array(
                "num" => (int)$num,
                "maming" => $name,
                "knight" => $knight,
                "trainer" => $trainer,
                "race" => $id
            );
            DB::insert("common_saima_detail", $sqlData);
        }
    }
    echo "ok";
}
catch (Exception $e)
{
    echo $e;
}
