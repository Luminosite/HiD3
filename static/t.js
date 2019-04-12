
console.log("test to load static js")
var width  = 50;
var height = 50;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(0,0)");

var projection = d3.geo.mercator()
                    .center([100, 37])
                    .scale(50)
                .translate([width/2, height/2]);

var path = d3.geo.path()
                .projection(projection);


var color = d3.scale.category20();


d3.json("/static/china.json", function(error, root) {

    console.log(root.features);

    svg.selectAll("path")
        .data( root.features )
        .enter()
        .append("path")
        .attr("stroke","#000")
        .attr("stroke-width",1)
        .attr("fill", function(d,i){
            return color(i);
        })
        .attr("d", path )
        .on("mouseover",function(d,i){
           d3.select(this)
               .attr("fill","yellow");
       })
       .on("mouseout",function(d,i){
           d3.select(this)
               .attr("fill",color(i));
       });

});
