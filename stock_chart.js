//var sectors = ['bi', 'cg', 'nd', 'services', 'energy', 'finance', 'health', 'misc', 'utils', 'tech', 'trans'];
var slist = {};
slist['bi'] = {
   "AAPL":[101.35, "+0.15%", "mild-success"],
   "CSCO":[23.7, "-8.70%", "danger"],
   "PANW":[82.35, "-0.05%", "primary"],
   "GPRO":[47.10, "+10.55%", "success"],
};
slist['energy'] = {
   "AXYZ":[101.35, "+0.15%", "mild-success"],
   "CXYZ":[23.7, "-8.70%", "danger"],
   "PXYZ":[82.35, "-0.05%", "primary"],
   "GXYZ":[47.10, "+10.55%", "success"],
};

function drawStockTable() {
        for(var sector in slist) {
            var slist_html = '';
            if(slist.hasOwnProperty(sector)) {
                for(var stock in slist[sector]) {
                    if(slist[sector].hasOwnProperty(stock)) {
                        var ss = slist[sector][stock];
                        slist_html += '<div class="row-res" id="'+stock+'"><a class="btn btn-'+ss[2]+'" href="finance.yahoo.com/q?s='+stock+'" target="_blank"><p class="sybl">'+stock+'</p><p class="price">'+ss[0]+'<br>'+ss[1]+'</p></a></div>'
                    }
                }
            }
            var symbl = '#sector-'+sector;
            $(symbl).html(slist_html);
        }
}
