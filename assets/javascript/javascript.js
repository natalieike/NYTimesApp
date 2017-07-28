$(document).ready(function() {

$("#search").on("click", function() {
  var searchTerm = $("#searchTerm").val();
  var numRecords = $("#num-records").val();
  var beginDate = $("#begin-date").val();
  var endDate = $("#end-date").val();
  var apiKey = "7032c5448f4445509a3f0dd6549fec88"
  var sortOption = $("#sortOptions").attr("value");

  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=" + apiKey + "&fq=" + numRecords + "&begin_date=" + beginDate + "&end_date=" + endDate + "&sort=" + sortOption;

  $.ajax({
    method:"GET",
    url:queryURL
  }).done (function(response) {
    for(var i=0; i<numRecords; i++) {
      var newDiv = $("<div>")
      newDiv.append("<p>" + response.docs[i].headline.main + "</p>");
      newDiv.append("<p>" + response.docs[i].byline.original + "</p>");
      newDiv.append("<p>" + response.docs[i].section_name + "</p>");
      newDiv.append("<p>" + response.docs[i].pub_date + "</p>");
      newDiv.append("<p>" + response.docs[i].web_url + "</p>");
      $("article-area").append(newDiv);
      newDiv.append("<p>" + response.docs[i].snippet + "</p>");
      $("article-area").append(newDiv);
    }
  });
})


});