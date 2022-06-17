$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

$('.saveBtn').on('click', function(){
    var body = $(this).siblings('.body').val();
    var time = $(this).parent().attr('id');
    console.log(time)
    console.log(body)
    console.log(this)
    localStorage.setItem(time, body);
});


function timeBlockClass() {
    var currentTime = moment().hour();

    $(".time-block").each(function() {
        var blockTime = parseInt($(this).attr("id"));

        console.log(blockTime);
        console.log(currentTime);
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