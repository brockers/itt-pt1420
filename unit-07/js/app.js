var thingILike = ["Linux", "Jeeps", "Beer", "Cigars", "Coffee", "Scotch"];
var thingIHate = ["Windows Operating Systems", "Apple Inc.", "Laziness", "Non-standard Keyboards", "Internet Explorer", "Steve Jobs"];

function populateList(){
	$("#thingsILike").html("");
	for(var i=0; i<thingILike.length; i++){
		$("#thingsILike").append("<li>" + thingILike[i] + "</li>");
	}
	$("#thingsILike").listview("refresh");
}

function populateHateList(){
	$("#thingsIHate").html("");
	for(var i=0; i<thingIHate.length; i++){
		$("#thingsIHate").append("<li>" + thingIHate[i] + "</li>");
	}
	$("#thingsIHate").listview("refresh");
}

function addLike(){
	var newItem = $("#addLike").val();
	$("#addLike").val("");
	thingILike.push(newItem);
	populateList();
}

function addHate(){
	var newItem = $("#addHate").val();
	$("#addHate").val("");
	thingIHate.push(newItem);
	populateHateList();
}