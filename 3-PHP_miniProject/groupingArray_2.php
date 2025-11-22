<?php 

function debugGrouping($step, $data, $currentItem) {
    echo "Step {$step}: Adding '{$currentItem['name']}' to class '{$currentItem['class']}'<br>";
    echo "<pre>";
    print_r($data);
    echo "</pre>";
    echo "---<br>";
}

$students = [
    ['class' => 'A', 'name' => 'Andi'],
    ['class' => 'B', 'name' => 'Budi'], 
    ['class' => 'A', 'name' => 'Cici']
];

$grouped = [];
$step = 1;

foreach($students as $student) {
    $class = $student['class'];
    if(!isset($grouped[$class])) {
        $grouped[$class] = [];
    }
    $grouped[$class][] = $student['name'];
    
    debugGrouping($step, $grouped, $student);
    $step++;
}