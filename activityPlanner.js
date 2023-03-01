// Get user selections
function showItinerary() {
    let numDays = document.getElementById("days").value;
    let hasBeer = document.getElementById("beer-yes").checked;
    let hasShow = document.getElementById("show-yes").checked;
    let hasCars = document.getElementById("cars-yes").checked;
    let hasSmash = document.getElementById("smash-yes").checked;
    let hasOffroad = document.getElementById("offroad-yes").checked;
    let hasHeights = document.getElementById("heights-yes").checked;
    let hasWater = document.getElementById("water-yes").checked;
    let daysSunday = document.getElementById("days-sunday").checked;
    let daysMonday = document.getElementById("days-monday").checked;
    let daysTuesday = document.getElementById("days-tuesday").checked;
    let daysWednesday = document.getElementById("days-wednesday").checked;
    let daysThursday = document.getElementById("days-thursday").checked;
    let daysFriday = document.getElementById("days-friday").checked;
    let daysSaturday = document.getElementById("days-saturday").checked;
    let haskayakorhike = document.getElementById("physicalactivity-yes").checked;
  
    // Prepare itinerary message
    let itinerary = "";
  
    function addDay1Itinerary() {
      if (hasCars) {
        itinerary += "Shelby American (morning)<br>";
      }
      if (hasBeer && (daysSaturday || daysSunday)) {
        itinerary += "Las Vegas Brews Cruise (noon)<br>";
      }
      if (hasSmash) {
        itinerary += "Wreck Room (afternoon)<br>";
      }
      if (hasShow && (daysThursday || daysFriday || daysSaturday || daysSunday)) {
        itinerary += "Notoriety Theater (evening)<br>";
      }
	     
    }
  
	
    function addDay2Itinerary() {
      if (hasOffroad) {
        itinerary += "OUI Experience (all day)<br>";
      }
      if (hasHeights) {
        itinerary += "Vegas Balloon Rides or 5 Star Helicopter tours or Gunship Helicopters (all day)<br>";
      }
        if ((hasWater) && (daysThursday || daysFriday || daysSaturday || daysSunday)) {
        itinerary += "Hoover Dam Rafting Adventures (all day)<br>";
      }

      if (haskayakorhike) {
        itinerary += "Las Vegas Outdoor Adventures(all day)<br>";
      }
    }
  
    if (numDays == 0){
		itinerary += "Please enter the number of days you will be in Las Vegas"
	}
    if (numDays == 1 ) {
	      itinerary += "You are in Las Vegas for only 1 day. You should choose to have a day doing: <br>";
		  addDay1Itinerary();
          itinerary += " or <br>" +"one of these activities: <br>";
		  addDay2Itinerary()
        } 
	if (numDays > 1 ) {
		itinerary += "You are in Las Vegas for multiple days. You should choose to have a day doing: <br>";
		addDay1Itinerary();
		itinerary += " And your other days doing one of these activities: <br>";
		addDay2Itinerary()
	 } 	
    
    // Display itinerary message
    let itineraryElement = document.getElementById("itinerary-container");
    itineraryElement.innerHTML = itinerary;
  }
