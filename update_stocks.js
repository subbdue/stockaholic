  function updateStockPrices() {
      var slist =
        {
         "AAPL":[101.35, "+1.5%", "success"],
         "CSCO":[23.7, "-0.75%", "primary"],
         "PANW":[84.35, "+0.75", "mild-success"],
        };
      for(var ii in slist) {
        if(slist.hasOwnProperty(ii)){
            var symbl = '#'+ii;
            var newPrice = slist[ii][0]+"<br>"+slist[ii][1];
            var newClass = "btn btn-"+slist[ii][2];
            $(symbl).children("a").children("p.price").html(newPrice);
            /* Change Class http://stackoverflow.com/questions/3452778/jquery-change-class-name */
            $(symbl).children("a").attr("class", newClass);
        }
      }
      /*var t = setTimeout(function(){updateStockPrices()},5000);*/
  }
