alert("Hello!");
// This project will entail the construction of an interactive dashboard
// It will highlight the correlation between poverty and obesity in the United States on a state by state basis
// Pre-Data Setup

var width = parseInt(d3.select("#scatter").style("width"));
var height = width - width/3.9
var margin = 20
var labelArea = 110
var topPadBottom = 40
var topPadLeft = 40

var svg = d3.select("#scatter")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "chart");

var circleRadius;
function getCircle(){
    if(width <= 530){
        circleRadius = 5;
    } else {
        circleRadius = 10;
    }
}

getCircle()

svg.append("g").attr("class", "xText");

var xText = d3.select(".xText");

function xTextRefresh() {
    xText.attr(
        "transform",
        "translate(" +
        ((width - labelArea)/2 + labelArea) +
        ", " +
        (height - margin - topPadBottom) +
        ")"
    )
}
xTextRefresh()

xText.append("text")
    .attr("y", -26)
    .attr("data-name", "poverty")
    .attr("data-axis", "x")
    .attr("class", "aText active x")
    .text("In Poverty (%)");

xText.append("text")
    .attr("y", 0)
    .attr("data-name", "age")
    .attr("data-axis", "x")
    .attr("class", "aText inactive x")
    .text("Age (Median)");

xText.append("text")
    .attr("y", 26)
    .attr("data-name", "income")
    .attr("data-axis", "x")
    .attr("class", "aText inactive x")
    .text("Household Income (Median");

// Left (y) Axis

var leftTextX = margin + topPadLeft;
var leftTextY = (height + labelArea)/ 2 - labelArea;

// Making a seoarate label group for Y axis text
svg.append("g").attr("class", "yText");

var yText = d3.select(".yText");

function yTextRefresh() {
    yText.attr(
        "transform",
        `translate(${leftTextX}, ${leftTextY}) rotate(-90)`
    )
};

yTextRefresh();

// Adding the Y text
yText
    .append("text")
    .attr("y", -26)
    .attr("data-name", "obesity")
    .attr("data-axis", "y")
    .attr("class", "aText active y")
    .text("Obese %");

yText
    .append("text")
    .attr("y", 0)
    .attr("data-name", "smokes")
    .attr("data-axis", "y")
    .attr("class", "aText inactive y")
    .attr("Smokes (%)");

yText
    .append("text")
    .attr("y", 26)
    .attr("data-name", "healthcare")
    .attr("data-axis", "y")
    .attr("class", "aText inactive y")
    .text("Lacking Healthcare (%)");

// Importing the data.csv file
d3.csv("assets/data/data.csv").then(function(data) {
    console.log(data);
});

// Function to visualize data

function visualize(data) {
    var curX = "poverty";
    var curY = "obesity";

    var xMin;
    var xMax;
    var yMin;
    var yMax;
    
    var toolTip = d3.tip()
        .attr("class", "d3-tip")
        .offset([40,-60])
        .html(function(d) {
            var theX;
            var theState = `<div>${d.state}</div>`;
            var theY = `<div>${curY}: ${d[curY]}%</div>`;

            if(curX === "poverty"){
                theX = `<div> ${curX}: ${d[curX]}%</div>`;
            }
            else {
                theX =`<div> ${curX}: ${parseFloat(d[curX]).toLocaleString("en")}</div>`;
            }

            return theState + theX + theY;
        });
    svg.call(toolTip);

    // Create axes for chart
    function xMinMax(){
        xMin = d3.min(data, function(d){
            return parseFloat(d[curX]) * 0.90;
        })
        xMax = d3.max(data, function(d){
            return parseFloat(d[curX]) * 1.10;
        })
    }

    function yMinMax(){
        yMin = d3.min(data,)
    }

}