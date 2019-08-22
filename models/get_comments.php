<?php
    require_once('./conn.php');

    class GetComments {
        public $todoID;
        public $todoTitle;
        public $todoComment;
    }

    $stmt = $conn->prepare('SELECT * FROM todo_comments');
    $stmt->execute();
    $result = $stmt->get_result();

    while($row = $result->fetch_assoc()) {
        $getComments = new GetComments();
        $getComments->todoID = $row['todo_id'];
        $getComments->todoTitle = $row['todo_title'];
        $getComments->todoComment = $row['todo_comment'];
        $arr[] = $getComments;
    }
    echo json_encode($arr, JSON_UNESCAPED_UNICODE);
?>
