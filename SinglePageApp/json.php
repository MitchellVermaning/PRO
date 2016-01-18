<?php
$mysqli = new mysqli("localhost", "root", "myPass", "klasgegevens");

// Check connection
if ($mysqli->connect_errno){
    echo 'Kan niet verbinden (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error;
}
mysqli_set_charset($mysqli,"utf8");


$sql = "SELECT * FROM data";
$result = $mysqli->query($sql);



$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}

echo json_encode($rows);

