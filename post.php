<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']); // Mencegah XSS dengan htmlspecialchars

    if (empty($name)) {
        echo "<span class='text-danger'>Masukkan Nama Anda!</span>";
    } else {
        echo "<span class='text-success'>Halo, " . $name . "! Selamat datang di AJAX!</span>";
    }
} else {
    echo "<span class='text-danger'>Permintaan tidak valid.</span>";
}
