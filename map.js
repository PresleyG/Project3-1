function initMap(){
  var school={lat: 24.456220, lng: 54.381446};
  var home={lat: 24.476932, lng: 54.364977};
  var restaurant1={lat: 24.479138, lng: 54.362816};
  var restaurant2={lat: 24.489404, lng: 54.366685};
  var mall={lat: 24.470356,, lng: 54.372753}; 

  var map=new google.maps.Map(
    document.getElementById('map'), {
    zoom: 9, center: home
    }
  );

  var marker1=new google.maps.Marker({
    position: school,
    map: map
  });

  var marker2=new google.maps.Marker({
    position: home,
    map: map
  });

  var marker3=new google.maps.Marker({
    position: restaurant1,
    map: map
  });

  var marker4=new google.maps.Marker({
    position: restaurant2,
    map: map
  });

  var marker5=new google.maps.Marker({
    position: mall,
    map: map
  });

}