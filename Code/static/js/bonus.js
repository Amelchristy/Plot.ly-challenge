var data;

//function to create gauge chart based on selected value
function gaugeChart(valueSelect) {
    var filteredValue = data.metadata.filter(value => value.id == +valueSelect);
    var weeklyFreq = filteredValue[0].wfreq;
  
    var guageData = [
      {
        type: "indicator",
        mode: "gauge",
        title: { text: "Belly Button Washing Frequency <br> Scrubs per Week"},
        gauge: {
          axis: {
            range: [0, 9],
            tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            ticks: "outside"
          },
        bordercolor: "gray",
        steps: [
            { range: [0, 1], color: "#E0FFFF"},
            { range: [1, 2], color: "#AFEEEE" },
            { range: [2, 3], color: "#ADD8E6" },
            { range: [3, 4], color: "#87CEEB" },
            { range: [4, 5], color: "#95C8D8" },
            { range: [5, 6], color: "#00BFFF" },
            { range: [6, 7], color: "#1E90FF" },
            { range: [7, 8], color: "#0000FF" },
            { range: [8, 9], color: "#000080" }
          ],
          threshold: {
            line: { color: "red", width: 5 },
            thickness: 1,
            value: weeklyFreq
          }
        }
      }
    ];
  
    var layout = { 
    width: 600, 
    height: 500,
    //margin: { t: 0, b: 0 } 
    margin: { t: 25, r: 25, l: 25, b: 25 },
    paper_bgcolor: "white",
    font: { color: "black", family: "Arial" }
    };
    
    Plotly.newPlot("gauge", guageData, layout);
  }