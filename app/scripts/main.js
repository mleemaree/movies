// require('map.js');


$('#fullpage').fullpage({
    anchors:['language-anchor', 'menu', 'movies-anchor', 'dates-anchor', 'cinema-anchor'],
    loopHorizontal: false,
    controlArrows: false,
    scrollingSpeed: 1000,
    continuousVertical: false
});

$('#fullpage').delay(200).removeClass('loading');

//BEGIN - Datepicker JQuery

$('#date-picker').datepicker({
	format: "dd/mm/yyyy",
	weekStart: 1,
    altField: '#date-input',
	onSelect: function(){
		$('#date').submit();
        console.log($('#date-input').val());   
	}
});

$('#date-input').change(function(){
    $('#date-picker').datepicker('setDate', $(this).val());
});

//END - Datepicker


//BEGIN - Accordion Movie Times

 $('#cinemas').accordion({ header: "h3", animate: 0, collapsible: true });


//END - Accordion Movie Times


// //BEGIN - Map

// function initMap() {
//     var mapDiv = $('#map');
//     var map = new google.maps.Map(mapDiv, {
//       center: {lat: 44.540, lng: -78.546},
//       zoom: 8
//     });
// 

// //END - Map



//BEGIN - Swiper Movies

var swiper = new Swiper('.swiper-container',{
    direction: 'horizontal',
    autoplay: 10000,
    spaceBetween: 30,
    keyboardControl: true,
    loop:true
});

//END - Swiper Movies