ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];
let chartConfig = {
    type: 'gauge',
    backgroundColor: 'none',
    plot: {
    tooltip: {
        visible: false,
    },
    backgroundColor: 'none',
    csize: '4px',
    },
    plotarea: {
    backgroundColor: 'none',
    borderWidth: '0px',
    margin: '100px 0px 0px 0px',
    },
    scaleR: {
    aperture: 180,
    backgroundColor: 'none',
    center: {
        backgroundColor: 'none',
        borderColor: 'none',
        size: '0px',
    },
    item: {
        fontColor: '#02206A',
        fontFamily: 'Montserrat',
        offsetR: 0,
        padding: '5px',
    },
    maxValue: 160,
    minValue: 0,
    ring: {
        rules: [{
            backgroundColor: '#00BAF2',
            rule: '%v < 40',
        },
        {
            backgroundColor: '#1E5D9E',
            rule: '%v >= 40 && %v < 80',
        },
        {
            backgroundColor: '#9B26AF',
            rule: '%v >= 80 && %v < 120',
        },
        {
            backgroundColor: '#E80C60',
            rule: '%v >= 120',
        },
        ],
        size: '3px',
    },
    step: 20,
    tick: {
        lineColor: '#02206A',
        placement: 'out',
    },
    },
    series: [{
    text: 'Internal',
    values: [50],
    backgroundColor: '#02206A',
    lineColor: '#02206A',
    }, ],
};

zingchart.render({
    id: 'myChart',
    data: chartConfig,
    height: '100%',
    width: '100%',
});

/*
    * assign event listener
    */
document.getElementById('updateChart').addEventListener('input', (e) => {
    let inputValue = e.currentTarget.value;
    let cost = (inputValue*0.69).toFixed(2)
    document.getElementById('output').textContent = inputValue;
    document.getElementById('cost').textContent = cost;

    // update the value of the chart using zingchart API
    zingchart.exec('myChart', 'setseriesvalues', {
    plotindex: 0,
    values: [parseInt(inputValue)],
    });
});