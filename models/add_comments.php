<?php
    require_once('./conn.php');

    //header('Access-Control-Allow-Origin: http://localhost');

    $todoTitle = $_POST['todoTitle'];
    $todoContext = $_POST['todoContext'];
    $todoLevel = $_POST['todoLevel'];

    $stmt = $conn->prepare('INSERT INTO todo_comments(todo_title, todo_comment, todo_level) VALUES(?,?,?)');
    $stmt->bind_param("sss", $todoTitle, $todoContext,  $todoLevel);
    if($stmt->execute()) {
        echo "<script>alert('ok');</script>";
    } else {
        echo "<script>alert('fail');</script>";
    }
?>