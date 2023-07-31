/* App.js */
import React, {Component} from "react";
import CanvasJSReact from './canvasjs.stock.react';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;


class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {dataPoints1: [], dataPoints2: [], dataPoints3: [], isLoaded: false};
        console.log("Klime");
        console.log(this.props.prices);
    }

    componentDidMount() {
        let dps1 = [], dps2 = [], dps3 = [];
        console.log(this.props.prices);
        console.log("Eva");
        for (let i = 0; i < this.props.prices.length; i++) {
            dps1.push({
                x: new Date(this.props.prices[i].created_timestamp),
                y: [
                    this.props.prices[i].open || this.props.prices[i].sell_order || this.props[i].open_price || 0,
                    this.props.prices[i].high || this.props.prices[i].max_value || this.props[i].high_price || 0,
                    this.props.prices[i].low || this.props.prices[i].min_value || this.props.prices[i].low_price || 0,
                    this.props.prices[i].closing_price || this.props.prices[i].last_price || this.props.prices[i].close_price || 0
                ]
            });
            dps2.push({x: new Date(this.props.prices[i].created_timestamp), y: Number(0)});
            dps3.push({x: new Date(this.props.prices[i].created_timestamp), y: Number(0)});
            console.log(dps1);
        }
        this.setState({
            isLoaded: true,
            dataPoints1: dps1,
            dataPoints2: dps2,
            dataPoints3: dps3
        });
    }

    render() {
        let dps1 = [], dps2 = [], dps3 = [];
        console.log(this.props.prices);
        console.log("Eva");
        for (let i = 0; i < this.props.prices.length; i++) {
            dps1.push({
                x: new Date(this.props.prices[i].created_timestamp),
                y: [
                    this.props.prices[i].open || this.props.prices[i].average_price || this.props.prices[i].open_price || 0,
                    this.props.prices[i].high || this.props.prices[i].max_value || this.props.prices[i].high_price || 0,
                    this.props.prices[i].low || this.props.prices[i].min_value || this.props.prices[i].low_price || 0,
                    this.props.prices[i].closing_price || this.props.prices[i].last_price || this.props.prices[i].close_price || 0
                ]
            });
            dps2.push({x: new Date(this.props.prices[i].created_timestamp), y: Number(0)});
            dps3.push({x: new Date(this.props.prices[i].created_timestamp), y: Number(0)});
            console.log(dps1);
        }

        const options = {
            theme: "light2",
            title: {
                text: this.props.titleText,
            },
            subtitles: [{
                text: "Price-Volume Trend"
            }],
            charts: [{
                axisX: {
                    lineThickness: 5,
                    tickLength: 0,
                    labelFormatter: function (e) {
                        return "";
                    },
                    crosshair: {
                        enabled: true,
                        snapToDataPoint: true,
                        labelFormatter: function (e) {
                            return "";
                        }
                    }
                },
                axisY: {
                    title: this.props.dataTitle,
                    prefix: "$",
                    tickLength: 0
                },
                toolTip: {
                    shared: true
                },
                data: [{
                    name: this.props.dataName,
                    yValueFormatString: this.props.yValueFormatString,
                    type: "candlestick",
                    dataPoints: dps1
                }]
            }, {
                height: 100,
                axisX: {
                    crosshair: {
                        enabled: true,
                        snapToDataPoint: true
                    }
                },
                axisY: {
                    title: "Volume",
                    prefix: this.props.prefix,
                    tickLength: 0
                },
                toolTip: {
                    shared: true
                },
                data: [{
                    name: "Volume",
                    yValueFormatString: this.props.yValueFormatString,
                    type: "column",
                    dataPoints: dps2
                }]
            }],
            navigator: {
                data: [{
                    dataPoints: dps3
                }],
                slider: {
                    minimum: new Date("2018-05-01"),
                    maximum: new Date("2022-07-01")
                }
            }
        };
        const containerProps = {
            width: "100%",
            height: "450px",
            margin: "auto"
        };
        return (
            <div>
                <div>
                    {
                        // Reference: https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator
                        this.state.isLoaded &&
                        <CanvasJSStockChart containerProps={containerProps} options={options}
                            /* onRef = {ref => this.chart = ref} */
                        />
                    }
                </div>
            </div>
        );
    }
}

export default Chart;