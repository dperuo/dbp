(function(undefined) {
  'use strict'

  var work = document.querySelector('#work')

  var allCredits = []

  var credits = [
    {title: "Much Ado About Nothing", role: "Benedick"},
    {title: "The Taming of A Shrew", role: "Ferando"},
    {title: "Henry V", role: "Fluellen"},
    {title: "Life\'s a Dream", role: "Basilio"},
    {title: "Iphigenia in Tauris", role: "Arkas"},
    {title: "Kosi Dasa", role: "Papacacia"},
    {title: "Man of La Mancha", role: "Pedro"},
    {title: "Machinal", role: "Prosecuting Attorney"},
    {title: "The Lady from Dubuque", role: "Oscar"},
    {title: "Picasso at the Lapin Agile", role: "Gaston"},
  ]

  credits.forEach(function(credit, index, array) {
    if (index > 0 && index % 2 === 0) {
      allCredits.push([
        '<div class="col-sm-4 col-xs-12 col-lg-offset-3  work__credit">',
          '<p><t>', credit.title, '</t><br/>', credit.role, '</p>',
        '</div>'
      ].join(''))
    } else {
      allCredits.push([
        '<div class="col-sm-4 col-xs-12  work__credit">',
          '<p><t>', credit.title, '</t><br/>', credit.role, '</p>',
        '</div>'
      ].join(''))
    }
  })

  work.innerHTML = ''

  work.innerHTML = allCredits.join('')
})();
