
function initialize() {
   var mapOptions = {
           zoom: 9,
           center: new google.maps.LatLng(16.776479, -3.008108),   
           mapTypeId: google.maps.MapTypeId.ROADMAP
       };
 
   var map = new google.maps.Map(document.getElementById('loc-canvas'),
                                   mapOptions);
                              
   var marker = new google.maps.Marker({
                   map: map, 
                   draggable: false, 
                   position: new google.maps.LatLng(16.776479, -3.008108)
       });
}
                        
google.maps.event.addDomListener(window, 'resize', initialize);
google.maps.event.addDomListener(window, 'load', initialize);