<?php

require_once "config__connection.php";
$s_id = $_GET["shift_id"];

$query = "delete from bakery_shifts where shift_id = $s_id";

if($result = mysqli_query($link,$query))
{
    echo "Shift is Deleted";
}


else{
    echo $query;
}