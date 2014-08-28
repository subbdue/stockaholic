  function drawStockTable() {
      var slist = '<div class="row-res" id="SYF"><a class="btn btn-warning" href="finance.yahoo.com/q?s=PANW" target="_blank"><p class="sybl">SYF</p><p class="price">84.11<br>+.05%</p></a></div>' +
          '<div class="row-res" id="BOA"><a class="btn btn-warning" href="finance.yahoo.com/q?s=PANW" target="_blank"><p class="sybl">BOA</p><p class="price">84.11<br>+.05%</p></a></div>';
      var symbl = '#sector-fin';
      $(symbl).html(slist);
  }
