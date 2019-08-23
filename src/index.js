import './style.scss';
import $ from 'jquery';
import 'jquery-ui-bundle';

$(document).ready(()=>{
    let isChecked = false;

    function addTodoTasks(arr){
        for(let i=0; i < arr.length; i+=1){
            const todoEvent = `<div class="todo-event" id="${arr[i]['todoID']}">
                                    <div class="todo-event-title">
                                        ${arr[i]['todoTitle']}
                                    </div>
                                    <div class="todo-event-context">
                                        ${arr[i]['todoComment']}
                                    </div>
                                </div>`
            $('.todo').append(todoEvent)
        }
    }

    function render(){
        $.ajax({
            type: 'GET',
            url: './models/get_comments.php',
            success(resp){
                $('.todo').empty()
                const json = JSON.parse(resp)
                addTodoTasks(json)
            }
        })
    }

    $('.key-in').click((e)=>{
        if(e.target.type === 'radio') {
            const textColor = e.target.value
            $('.key-in-level').val(textColor)
            $('.key-in-block > textarea').animate({'background-color':textColor})
            isChecked = true;
        }
        if(e.target.type === 'button' && isChecked) {
            const todoTitle = $('.key-in-block > input').val()
            const todoContext = $('.key-in-block > textarea').val()
            const todoLevel =  $('.key-in-level').val()
            if(!todoTitle || !todoContext) return
            $.ajax({
                type: 'POST',
                url: './models/add_comments.php',
                data: {
                    todoTitle : todoTitle,
                    todoContext : todoContext,
                    todoLevel : todoLevel
                },
                success(){
                    console.log('OK')
                    $('.key-in-block > input').val('')
                    $('.key-in-block > textarea').val('')
                    render()
                }
            })
        }
    })

    render()
})