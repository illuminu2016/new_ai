var n = 1, // number of layers
	m = 22, // number of samples per layer
	stack = d3.layout.stack(),
	//layers = stack(d3.range(n).map(function() { return bumpLayer(m, .1); })),
	layers = [
 				[{
					x: 0,
					y: 3,
					y0: 0,
					month: "2015 January"
				},
				{
					x: 1,
					y: 2,
					y0: 0,
					month: "2015 February"
				},
				{
					x: 2,
					y: 5,
					y0: 0,
					month: "2015 March"
				},
				{
					x: 3,
					y: 3,
					y0: 0,
					month: "2015 April"
				},
				{
					x: 4,
					y: 8,
					y0: 0,
					month: "2015 May"
				},
				{
					x: 5,
					y: 1,
					y0: 0,
					month: "2015 June"
				},
				{
					x: 6,
					y: 1,
					y0: 0,
					month: "2015 July"
				},
				{
					x: 7,
					y: 3,
					y0: 0,
					month: "2015 August"
				},
				{
					x: 8,
					y: 3,
					y0: 0,
					month: "2015 September"
				},
				{
					x: 9,
					y: 10,
					y0: 0,
					month: "2015 October"
				},
				{
					x: 10,
					y: 6,
					y0: 0,
					month: "2015 November"
				},
				{
					x: 11,
					y: 8,
					y0: 0,
					month: "2015 December"
				},
				{
					x: 12,
					y: 3,
					y0: 0,
					month: "2016 January"
				},
				{
					x: 13,
					y: 7,
					y0: 0,
					month: "2016 February"
				},
				{
					x: 14,
					y: 9,
					y0: 0,
					month: "2016 March"
				},
				{
					x: 15,
					y: 8,
					y0: 0,
					month: "2016 April"
				},
				{
					x: 16,
					y: 9,
					y0: 0,
					month: "2016 May"
				},
				{
					x: 17,
					y: 1,
					y0: 0,
					month: "2016 June"
				},
				{
					x: 18,
					y: 8,
					y0: 0,
					month: "2016 July"
				},
				{
					x: 19,
					y: 8,
					y0: 0,
					month: "2016 August"
				},
				{
					x: 20,
					y: 1,
					y0: 0,
					month: "2016 September"
				},
				{
					x: 21,
					y: 3,
					y0: 0,
					month: "2016 October"
				}]
	],
	yGroupMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y; }); }),
	yStackMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y0 + d.y; }); });

var div = d3.select("#bar-chart710").append("div")
	.attr("class", "tooltip tooltip-8202")
	.style("opacity", 0);

var margin = {top: 40, right: 10, bottom: 20, left: 10},
	width = 400 - margin.left - margin.right,
	height = 100 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
	.domain(d3.range(m))
	.rangeRoundBands([0, width], .08);

var y = d3.scale.linear()
	.domain([0, yStackMax])
	.range([height, 0]);

var color = d3.scale.linear()
	.domain([0, n - 1])
	.range(["#aad", "#556"]);

var xAxis = d3.svg.axis()
	.scale(x)
	.tickSize(0)
	.tickPadding(6)
	.orient("bottom");

var svg = d3.select("#bar-chart710").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var layer = svg.selectAll(".layer")
	.data(layers)
	.enter().append("g")
	.attr("class", "layer")
	.style("fill", function(d, i) { return color(i); });

var rect = layer.selectAll("rect")
	.data(function(d) { return d; })
	.enter().append("rect")
	.attr("x", function(d) { return x(d.x); })
	.attr("y", height)
	.attr("width", x.rangeBand())
	.attr("height", 0)
	.on("mouseover", function(d) {
		div.transition()
			.duration(200)
			.style("opacity", .9);

		div.html(d.month + " - " + d.y + "%");
	})
	.on("mouseout", function(d) {
		div.transition()
			.duration(500)
			.style("opacity", 0);
	});

rect.transition()
	.delay(function(d, i) { return i * 10; })
	.attr("y", function(d) { return y(d.y0 + d.y); })
	.attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); });

svg.append("g")
	.attr("class", "x axis")
	.attr("transform", "translate(0," + height + ")")
	.call(xAxis);



// Inspired by Lee Byron's test data generator.
/*
function bumpLayer(n, o) {

	function bump(a) {
		var x = 1 / (.1 + Math.random()),
			y = 2 * Math.random() - .5,
			z = 10 / (.1 + Math.random());
		for (var i = 0; i < n; i++) {
			var w = (i / n - y) * z;
			a[i] += x * Math.exp(-w * w);
		}
	}

	var a = [], i;
	for (i = 0; i < n; ++i) a[i] = o + o * Math.random();
	for (i = 0; i < 5; ++i) bump(a);
	return a.map(function(d, i) { return {x: i, y: Math.max(0, d)}; });
}*/
