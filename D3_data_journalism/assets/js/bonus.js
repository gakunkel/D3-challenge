var toolTip = d3.tip()
.attr("class", "d3-tip")
.offset([40,-60])
//     //.html(function(d) {
//         //let theX;
//         //let theState = "<div>" + d.state + "</div>"
//         //let theY = "<div>" + curY = ":" + d[curY] + "%</div>"
//         //if(curX === "poverty") {
//             //theX = "<div>" + curX + ":" + d[curX] + "%</div>"
//         }
//     })
// }





// ///////////////////////////////////
// var svgWidth = 960;
// var svgHeight = 500;

// var margin = {
//     top: 20,
//     right: 40,
//     bottom: 60,
//     left: 100
// };

// // Actual image width and height, accounting for margin
// var width = svgWidth - margin.left - margin.right;
// var height = svgHeight - margin.top - margin.bottom;

// // SVG and wrapper group
// var svg = d3.select("#scatter")
//     .append("svg")
//     .attr("width", svgWidth)
//     .attr("height", svgHeight);

// var chartGroup = svg.append("g")
//     .attr("transform", `translate(${margin.left}, ${margin.top})`);

// // Importing the data
// d3.csv("../data/data.csv").then(function(stateData) {
//     // Parsing the obesity and poverty values for each state
//     stateData.forEach(function(data) {
//         data.poverty = +data.poverty;
//         data.obesity = +data.obesity;
//     });

//     // Creating scale functions for the chart
//     povertyList = stateData.map((d => d.poverty));
//     obesityList

//     var xLinearScale = d3.scaleLinear()
//         .domain(d3.extent())
// })