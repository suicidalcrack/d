var i=0;
setInterval(function(){
    var titles=[
"|d|",
"|de|",
"|delo|",
"|delou|",
"|delous|",
"|delousi|",
"|delousio|",
"|delousion|",
"|delousio|",
"|delousi|",
"|delous|",
"|delou|",
"|delo|",
"|de|",
"|d|",
"||",
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 500);

