<?php
// Latihan 1: Grouping Sederhana
$students = [
    ['class' => 'A', 'name' => 'Andi'],
    ['class' => 'B', 'name' => 'Budi'],
    ['class' => 'C', 'name' => 'Cici']
];

// Coba buat group by class
$grouped = [];
foreach($students as $student) {
    $class = $student['class'];
    if(!isset($grouped['class'])) {
        $grouped[$class] = [];
    }
    $grouped[$class][] = $student['name'];
}

// See progress after each iteration:
echo "After adding {$student['name']} to class {$class}:<br>";
echo "<pre>";
print_r($grouped);
echo "</pre>";
echo "---<br>";