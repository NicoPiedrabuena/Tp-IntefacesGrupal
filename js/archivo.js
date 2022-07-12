
function addZero(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}

var hoy = new Date();
var dd = hoy.getDate();
if(dd<10) {
    dd='0'+dd;
} 
 
if(mm<10) {
    mm='0'+mm;
}

var mm = hoy.getMonth()+1;
var yyyy = hoy.getFullYear();

dd=addZero(dd);
mm=addZero(mm);

$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: yyyy+'-'+mm+'-'+dd,
        buttonIcons: true, // show the prev/next text
        weekNumbers: false,
        editable: true,
        eventLimit: true, // allow "more" link when too many events 
        events: [
            {
                title: 'Crossfit',
                description: 'Lorem ipsum 4...',
                start:  yyyy+'-'+mm+'-16T16:50:00',
                color: '#ffc107!important',
                textColor: '#ffffff',
            },
            {
                title: 'Pilates',
                description: 'Lorem ipsum 6...',
                start:  yyyy+'-'+mm+'-12T10:30:00',
                end:  yyyy+'-'+mm+'-12T12:30:00',
                color: '#17a2b8!important',
                textColor: '#ffffff',
            },
            {
                title: 'Yoga',
                description: 'Lorem ipsum 11...',
                start:  yyyy+'-'+mm+'-20T07:30:00',
                color: '#007bff!important',
                textColor: '#ffffff',
            }
        ],
        eventColor: '#ade5467e',
        dayClick: function (date, jsEvent, view) {
            alert('Has hecho click en: '+ date.format());
        }, 
        eventClick: function (calEvent, jsEvent, view) {
            $('#event-title').text(calEvent.title);
            $('#event-description').html(calEvent.description);
            $('#modal-event').modal();
        },  
	});
});
