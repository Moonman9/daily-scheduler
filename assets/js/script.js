$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

$('.saveBtn').on('click', function(){
    var body = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, body);
})


function timeBlockClass() {
    var currentTime = moment();

    $(".time-block").each(function() {
        var blockTime = parseInt($(this).attr("id"));

        if(blockTime < currentTime) {
            $(this).addClass('past');
        } else if(blockTime === currentTime) {
            $(this).addClass('present');
        } else {
            $(this).addClass('future');
        }
    })
};



timeBlockClass();