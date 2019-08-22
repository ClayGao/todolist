import './style.scss';
import $ from 'jquery';

$(document).ready(
    $.ajax({
        type: 'GET',
        url: './models/get_comments.php',
        success: function(resp) {
            console.log(resp)
        }
    }
))