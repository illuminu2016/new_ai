var w = 400;
var h = 400;
var r = h/2;
var color = d3.scale.category20c();

var data = [{"label":"Attitude", "value":20, "color": "#9ecae1"},
    {"label":"Family", "value":10, "color": "#6baed6"},
    {"label":"Friends", "value":30, "color": "#9c9ede"},
    {"label":"Work", "value":15, "color": "#17becf"},
    {"label":"Social", "value":25, "color": "#1f77b4"}];


var vis = d3.select('#chart').append("svg:svg").data([data]).attr("width", w).attr("height", h).append("svg:g").attr("transform", "translate(" + r + "," + r + ")");
var pie = d3.layout.pie().value(function(d){return d.value;});

// declare an arc generator function
var arc = d3.svg.arc().outerRadius(r);

// select paths, use arc generator to draw
var arcs = vis.selectAll("g.slice").data(pie).enter().append("svg:g").attr("class", "slice");
arcs.append("svg:path")
    .attr("fill", function(d, i){
        return color(i);
    })
    .attr("class", "pointer")
    .on("click", function(d){
        $(".tabular-730").hide("shake", {}, 2000, callback(d));
    })
    .attr("d", function (d) {
        // log the result of the arc generator to show how cool it is :)
        console.log(arc(d));
        return arc(d);
    });

// add the text
arcs.append("svg:text").attr("transform", function(d){
    d.innerRadius = 0;
    d.outerRadius = r;
    return "translate(" + arc.centroid(d) + ")";})
            .attr("text-anchor", "middle")
            .attr("class", "pointer")
            .text( function(d, i) {
        return data[i].label;}
);

function callback(param) {
    setTimeout(function() {
        $('#tabular1').hide();
        $("._loader-692").removeAttr( "style" ).hide().fadeIn(1000);
        setTimeout(function() {
            $("._loader-692").hide();
            $("#tabular2").removeAttr( "style" ).hide().fadeIn(1000);
        }, 2000);
    }, 2000);
};



