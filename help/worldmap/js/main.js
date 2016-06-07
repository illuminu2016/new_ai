d3.select(window).on("resize", throttle);

var zoom = d3.behavior.zoom()
    .scaleExtent([0, 9])
    .on("zoom", move);

/*    var width = document.getElementById('container').offsetWidth;
 var height = width / 2 + width / 4;*/
/*    var height = 400;*/


/*var width = document.getElementById('container').offsetWidth;*/
var centered;
var countries;
var width = 720;
var height = 480;

var topo, projection, path, svg, g;

var graticule = d3.geo.graticule();

var tooltip = d3.select("#container").append("div").attr("class", "tooltip hidden");

setup(width, height);

function setup(width, height) {
    projection = d3.geo.mercator()
        .translate([(width / 2), (height / 2)])
        .scale(width / 2 / Math.PI);

    path = d3.geo.path().projection(projection);

    svg = d3.select("#container").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("style", "padding-top: 95px")
        /*                   .call(zoom)*/
        .append("g");

    g = svg.append("g");
}

d3.json("help/worldmap/data/world-topo-min.json", function (error, world) {

    countries = topojson.feature(world, world.objects.countries).features;

    initCountriesDropdown();

    setTimeout(function(){
        $('.controls-loader').hide();
        $('.contact-controls-892').fadeIn(1000,"linear");
    }, 2000);

    topo = countries;
    draw(topo);

});

function draw(topo) {

    svg.append("path")
        .datum(graticule)
        .attr("class", "graticule")
        .attr("d", path);

    g.append("path")
        .datum({type: "LineString", coordinates: [[-180, 0], [-90, 0], [0, 0], [90, 0], [180, 0]]})
        .attr("class", "equator")
        .attr("d", path);

    var country = g.selectAll(".country").data(topo);

    country.enter().insert("path")
        .attr("class", "country")
        .attr("d", path)
        .attr("id", function (d, i) {
            return d.id;
        })
        .attr("title", function (d, i) {
            return d.properties.name;
        })
        .style("fill", function (d, i) {
            return d.properties.color;
        });

    //offsets for tooltips
    var offsetL = document.getElementById('container').offsetLeft + 20;
    var offsetT = document.getElementById('container').offsetTop + 10;

    //tooltips
    country
        .on("mousemove", function (d, i) {

            var mouse = d3.mouse(svg.node()).map(function (d) {
                return parseInt(d);
            });

            tooltip.classed("hidden", false)
                .attr("style", "left:" + (mouse[0] + offsetL) + "px;top:" + (mouse[1] + offsetT) + "px")
                .html(d.properties.name);

        })
        .on("mouseout", function (d, i) {
            tooltip.classed("hidden", true);
        })
        .on("click", function (d) {
            var countryObj = d;

            $('._map-tooltip902').remove();

            initCountriesDropdown();

            $("#countriesSelect option:contains(" + countryObj.properties.name + ")").attr('selected', true);

            zoomMap(d);
        });

    //addpoint("27.5902780", "47.1569440", "" );

    //EXAMPLE: adding some capitals from external CSV file
    /*                            d3.csv("help/worldmap/data/country-capitals.csv", function(err, capitals) {

     capitals.forEach(function(i){
     addpoint(i.CapitalLongitude, i.CapitalLatitude, i.CapitalName );
     });

     });*/

}

function redraw() {
    /*        width = document.getElementById('container').offsetWidth;
     height = width / 2;*/
    /*    width = document.getElementById('container').offsetWidth;*/
    width = 720;
    height = 480;
    d3.select('svg').remove();
    setup(width, height);
    draw(topo);
}

function move() {

    var t = d3.event.translate;
    var s = d3.event.scale;
    zscale = s;
    var h = height / 4;

    t[0] = Math.min(
        (width / height) * (s - 1),
        Math.max(width * (1 - s), t[0])
    );

    t[1] = Math.min(
        h * (s - 1) + h * s,
        Math.max(height * (1 - s) - h * s, t[1])
    );

    zoom.translate(t);
    g.attr("transform", "translate(" + t + ")scale(" + s + ")");

    //adjust the country hover stroke width based on zoom level
    d3.selectAll(".country").style("stroke-width", 1.5 / s);

}

var throttleTimer;
function throttle() {
    window.clearTimeout(throttleTimer);
    throttleTimer = window.setTimeout(function () {
        redraw();
    }, 200);
}

//function to add points and text to the map (used in plotting capitals)
function addpoint(lat, lon, text) {

    var gpoint = g.append("g").attr("class", "gpoint");
    var x = projection([lat, lon])[0];
    var y = projection([lat, lon])[1];

    /*    gpoint.append("svg:circle")
     .attr("cx", x)
     .attr("cy", y)
     .attr("class","point")
     .style("fill", "url(/#image)")
     .attr("r", 34.5);*/

    //conditional in case a point has no associated text
    if (text.length > 0) {

        gpoint.append("text")
            .attr("x", x + 2)
            .attr("y", y + 2)
            .attr("class", "text")
            .text(text);
    }

}

//geo translation on mouse click in map
function countrySelect(sel) {
    var selectedValue = sel.value,
        d = _.find(countries, function(item){ return item.properties.name === selectedValue });

    zoomMap(d);
}

function zoomMap(d) {
    $('._map-tooltip902').remove();

    // add country name
    d3.select("#container").append("div")
        .attr('pointer-events', 'none')
        .attr("class", "tooltip _map-tooltip902")
        .style("opacity", 1)
        .html('')
        .html("<div class='_country-932'>Country: " + d.properties.name + "</div>")
        .style("left", (d.x + 50 + "%"))
        .call(zoom)
        .style("top", (d.y + "px"));

    if ((d.properties.name === "Canada") || (d.properties.name === "United States") || (d.properties.name === "Russian Federation") || (d.properties.name === "Greenland")) {
        centered = d;
        g.selectAll("path")
            .classed("active-path", centered && function (d) {
                return d === centered;
            });
    } else {
        // zoom only small countries
        var x, y, k;

        $('.map_zoom_indicator').show();

        if (d && centered !== d) {
            var centroid = path.centroid(d);
            x = centroid[0];
            y = centroid[1];
            k = 4;
            centered = d;
            g.selectAll("path")
                .classed("active-path", centered && function (d) {
                    return d === centered;
                });
        } else {
            $('.map_zoom_indicator').hide();

            x = width / 2;
            y = height / 2;
            k = 1;
            centered = null;

            g.selectAll("path")
                .classed("color-path", centered && function (d) {
                    return d === centered;
                });
        }

        g.transition()
            .duration(750)
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
            .style("stroke-width", 5.5 / k + "px");
    }
}

function zoomOutMap() {
    $('.map_zoom_indicator').hide();

    var x = width / 2;
    var y = height / 2;
    var k = 1;

    g.transition()
        .duration(750)
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
        .style("stroke-width", 5.5 / k + "px");
}

function initCountriesDropdown() {
    //populate dropdown
    var optionsValues = '<select style="padding: 10px 5px;" id="countriesSelect" onchange="countrySelect(this)">';
    for (var i = 0; i < countries.length; i++) {
        optionsValues += '<option value="' + countries[i].properties.name + '">' + countries[i].properties.name + '</option>';
    }
    optionsValues += '</select>';
    var options = $('#countriesSelect');
    options.replaceWith(optionsValues);
    //
}