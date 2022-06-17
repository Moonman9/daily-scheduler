$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

$('.saveBtn').on('click', function(){
    var body = $(this).siblings('.body').val();
    var time = $(this).parent().attr('id');
    console.log(time)
    console.log(body)
    console.log(this)
    localStorage.setItem(time, body);
});

$('#9 .body').val(localStorage.getItem('9'));
$('#10 .body').val(localStorage.getItem('10'));
$('#11 .body').val(localStorage.getItem('11'));
$('#12 .body').val(localStorage.getItem('12'));
$('#13 .body').val(localStorage.getItem('13'));
$('#14 .body').val(localStorage.getItem('14'));
$('#15 .body').val(localStorage.getItem('15'));
$('#16 .body').val(localStorage.getItem('16'));
$('#17 .body').val(localStorage.getItem('17'));

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