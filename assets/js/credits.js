var $work = $("#work");

$work.empty();

$(document).ready(function(){
  
  var credits = [{title: "Much Ado About Nothing", role: "Benedick"},
                 {title: "Henry V", role: "Fluellen"},
                 {title: "Life&rsquo;s a Dream", role: "Basilio"},
                 {title: "Iphigenia in Tauris", role: "Arkas"},
                 {title: "Kosi Dasa", role: "Papacacia"},
                 {title: "Man of La Mancha", role: "Pedro"},
                 {title: "Machinal", role: "Prosecuting Attorney"},
                 {title: "The Lady from Dubuque", role: "Oscar"},
                 {title: "Picasso at the Lapin Agile", role: "Gaston"},
                 {title: "Snow Angel", role: "Doofus"}
                ];

  var allCredits = [];
  
  $.each(credits, function(i, credit){
    if ( i === 0){
      allCredits.push('<div class="col-lg-4 col-md-4 col-xs-6"><p><t>' + credit.title + '</t><br/>' + credit.role + '</p></div>')
    } else if (i % 2 == 0){
      allCredits.push('<div class="col-lg-4 col-md-4 col-xs-6 col-lg-offset-3"><p><t>' + credit.title + '</t><br/>' + credit.role + '</p></div>')
    } else {
      allCredits.push('<div class="col-lg-4 col-md-4 col-xs-6"><p><t>' + credit.title + '</t><br/>' + credit.role + '</p></div>')
    };
  });
                   
  $work.html(allCredits);

});
