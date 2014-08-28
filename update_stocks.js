  function updateStockPrices() {
      var slist = {
         "AAPL":[101.35, "+0.15%", "mild-success"],
         "CSCO":[23.7, "-8.70%", "danger"],
         "PANW":[82.35, "-0.05%", "primary"],
         "GPRO":[47.10, "+10.55%", "success"],
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
