<?php

$host = getenv('IP');
$username = getenv('C9_USER');
$password = '';
$dbname = 'world';
$query = $_GET['country'];
$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
if(isset($_GET['all']))
{
    $stmt = $conn->query("SELECT * FROM countries");
  
}
else 
{
    $stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$query%'");
}
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo '<ul>';
foreach ($results as $row) {
  echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
}
echo '</ul>';