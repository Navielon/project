<template>
<div>
    <div class="panel-bg panel-header2" style="padding-left: 15px;">
        Выбор сервера:

        <div style="float: right; margin-top: -4px; margin-right: -5px;">
            <form method="GET" name="playertop_server_form2"> 
                <span class="ui-selectbox-wrapper">
                    <select class="ui-select" name="server" @change="onChangeServer()" v-model="server">
                        <option value="">Все серверы</option>
                        <option v-for="server in servers" v-bind:key="server.name" :value="server.server + ':' + server.num">{{server.name}}</option>
                    </select>
                    <span class="selectBox ui-selectbox-dropdown" title="" tabindex="0" style="min-width: 173px;">
                        <span class="selectBox-label">{{serverDisplay}}</span>
                    </span>
                </span>
            </form>
        </div>
        <div style="clear: both;margin-top: 7px;margin-bottom: 6px;width: 100%;height: 1px;background-color: #faa069;" />
        Проведенное время в игре за месяц на {{serverDisplayText}}
    </div>

    <div class="panel-bg" style="height: 325px; margin-top: -2px;">
        <div class="chart">
            <apexchart type=area height=300 ref="monthTimeChart" :options="chartOptionsMonthTime" :series="seriesMonthTime"/>
        </div>
    </div>

    <div class="panel-bg" style="height: 350px; margin-top: -2px;">
        <div class="panel-header" style="background: linear-gradient(145deg, rgb(255, 188, 65), rgba(250, 188, 105, 0.8) 55%);">
            Проведенное время в игре за год на {{serverDisplayText}}
        </div> 
        <div class="chart">
            <apexchart type=area height=300 ref="allTimeChart" :options="chartOptionsAllTime" :series="seriesAllTime"/>
        </div>
    </div>

    <div class="panel-bg" style="width: 290px; display: inline-table; padding: 0px;">
        <div class="panel-header" style="width: 290px; text-align: center; margin: 0px;">Общая статистика</div> 
        <table v-if="statsLoad">
            <tbody>
                <tr v-for="(info, i) in statInfo" :key="i">
                    <td class="column1">{{Object.values(info)[0]}}</td>
                    <td class="column2" style="text-align: right;">
                        <div class="tooltip">
                            <div style="text-align: right;padding-right: 20px;">{{formatter(stats[Object.keys(info)[0]], 1)}}</div>
                            <span class="tooltiptext noselect" style="width: 210px;margin-left: -114px;">
                                Общее количество: {{stats[Object.keys(info)[0]]}}<br/>
                                <div v-for="(statServer, index) in statsServer" :key="index">
                                    <div v-if="statServer[Object.keys(info)[0]] > 0">
                                        {{index}} - {{statServer[Object.keys(info)[0]]}}
                                    </div>
                                </div>
                            </span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="panel-bg" style="width: 350px; display: inline-table; padding: 0px;">
        <div class="panel-header" style="width: 350px; text-align: center; margin: 0px;background: linear-gradient(145deg, rgb(250, 160, 105), rgb(255, 188, 65) 148%);">
            Посещаемость серверов
        </div> 
        <div style="height: 320px; ">
        <apexchart width="340" type="donut" :options="options" :series="series"></apexchart>
        </div>
    </div>

    <div class="panel-bg" style="height: 350px;">
        <div class="panel-header" style="background: linear-gradient(145deg, rgb(255, 188, 65), rgba(250, 188, 105, 0.8) 55%);">
            Монет на серверах
        </div> 
        <div class="chart">
            <apexchart type=bar height=300 ref="sfds" :options="optionsBar" :series="seriesBar"/>
        </div>
    </div>
</div>
</template>

<script>
    import { EventBus } from '@/main.js';
    import * as main from '@/main.js';

    import VueApexCharts from 'vue-apexcharts'
    import axios from 'axios'

    export default {
        name: 'ProfileStatistic',
        components: {
            apexchart: VueApexCharts,
        },
        data () {
            return {
                optionsBar: {
                    chart: {
                        id: 'barOnline'
                    },
                    xaxis: {
                        categories: []
                    },
                    grid: {
                        yaxis: {
                            lines: {
                                show: false
                            }
                        }
                    },
                    theme: {
                        mode: 'light', 
                        palette: 'palette7'
                    },
                    tooltip: {
                        theme: "dark"
                    },
                    dataLabels: {
                        enabled: false
                    },
                    yaxis: {
                        opposite: true
                    },
                    legend: {
                        horizontalAlign: 'left'
                    }
                },
                seriesBar: [{
                    name: 'Монет',
                    data: []
                }],
                options: {
                    chart: {
                        id: 'donutOnline',
                    },
                    legend: {
                        show: true,
                        showForSingleSeries: false,
                        showForNullSeries: true,
                        showForZeroSeries: true,
                        position: 'right',
                        horizontalAlign: 'center', 
                        floating: false,
                        fontSize: '14px',
                        fontFamily: 'Ubuntu',
                        formatter: undefined,
                        inverseOrder: true,
                        width: undefined,
                        height: 314,
                        tooltipHoverFormatter: undefined,
                        offsetX: -40,
                        offsetY: -15,
                        labels: {
                            colors: undefined,
                            useSeriesColors: false
                        },
                        itemMargin: {
                            horizontal: 2,
                            vertical: 5
                        },
                        onItemClick: {
                            toggleDataSeries: true
                        },
                        onItemHover: {
                            highlightDataSeries: false
                        },
                    },
                    colors: ['#008FFB',	'#00E396', '#FEB019', '#FF4560', '#775DD0', '#4CAF50', '#546E7A', '#D4526E', '#F9C80E', '#2B908F', '#F9A3A4', '#D7263D', '#1B998B', '#2E294E', '#F46036', '#E2C044'],
                    plotOptions: {
                        pie: {
                            size: 97,
                            offsetY: 55,
                            offsetX: 16,
                            expandOnClick: true,
                            dataLabels: {
                                offset: 0,
                                minAngleToShowLabel: 17
                            },
                            donut: {
                                size: '50%',
                                labels: {
                                    show: true,
                                    name: {
                                        show: true,
                                        fontSize: '20px',
                                        fontFamily: 'Ubuntu',
                                        color: undefined,
                                        offsetY: 135
                                    },
                                    value: {
                                        show: true,
                                        fontSize: '16px',
                                        fontFamily: 'Ubuntu',
                                        color: undefined,
                                        offsetY: 146,
                                        formatter: function (minutes) {
                                            var hours=Math.floor(minutes/60);
                                            minutes%=60;

                                            var day=Math.floor(hours/24);
                                            hours%=24;
                                            return (day > 0 ? (day + 'дн. ') : '') + (hours > 0 ? (hours + 'ч. ') : '') + (minutes > 0 ? (minutes + 'м. ') : (day == 0 && hours == 0 ? '0 м. ' : ''));
                                        }
                                    },
                                    total: {
                                        show: true,
                                        showAlways: true,
                                        label: 'Общий онлайн',
                                        color: '#373d3f',
                                        formatter: function (w) {
                                            var minutes = w.globals.seriesTotals.reduce((a, b) => {
                                                return a + b
                                            }, 0)
                                            var hours=Math.floor(minutes/60);
                                            minutes%=60;

                                            var day=Math.floor(hours/24);
                                            hours%=24;
                                            return (day > 0 ? (day + 'дн. ') : '') + (hours > 0 ? (hours + 'ч. ') : '') + (minutes > 0 ? (minutes + 'м. ') : (day == 0 && hours == 0 ? '0 м. ' : ''));
                                        }
                                    }
                                }
                            }
                        }
                    },
                    tooltip: {
                        theme: "dark",
                        y: {
                            formatter: function(minutes) {
                                var hours=Math.floor(minutes/60);
                                minutes%=60;

                                var day=Math.floor(hours/24);
                                hours%=24;
                                return (day > 0 ? (day + 'дн. ') : '') + (hours > 0 ? (hours + 'ч. ') : '') + (minutes > 0 ? (minutes + 'м. ') : (day == 0 && hours == 0 ? '0 м. ' : ''));
                            },
                            title: {
                                formatter: (seriesName) => seriesName,
                            },
                        }
                    },
                    labels: ['Loading'],
                },
                series: [0],

                statsLoad: false,
                stats: [],
                statsServer: [],
                statInfo: [
                    {"blocksBreaked": "Сломано блоков"}, 
                    {"blocksPlaced": "Поставлено блоков"}, 
                    {"playersKilled": "Убито игроков"}, 
                    {"monstersKilled": "Убитов мобов"}, 
                    {"deaths": "Количество смертей"}, 
                    {"xpLevels": "Получено опыта"}, 
                    {"messages": "Cобщений в чате"},
                    {"openCases": "Открыто кейсов"}
                ],

                server: '',
                servers: [],
                serverDisplay: "Все сервера",
                serverDisplayText: "всех серверах",

                timer: null,
                login: null,
                
                seriesAllTime: [{
                    name: 'Наигранное время',
                    data: []
                }],

                seriesMonthTime: [{
                    name: 'Наигранное время',
                    data: []
                }],

                chartOptionsAllTime: {
                    chart: {
                        toolbar: {
                            show: true,
                            tools: {
                                download: true,
                                selection: true,
                                zoom: true,
                                zoomin: true,
                                zoomout: true,
                                pan: true,
                                reset: true,
                                customIcons: []
                            },
                            autoSelected: 'zoom' 
                        }
                    },
                    grid: {
                        yaxis: {
                            lines: {
                                show: false
                            }
                        }
                    },
                    theme: {
                        mode: 'light', 
                        palette: 'palette5'
                    },
                    tooltip: {
                        theme: "dark",
                        x: {
                            show: true,
                            formatter: function(value) {
                                var format = "%mplr %y"; 
                                var result = main.getDateConvert(format, value);
                                result = result[0].toUpperCase() + result.slice(1); 
                                return result
                            },
                        },
                        y: {
                            formatter: function(minutes) {
                                var hours=Math.floor(minutes/60);
                                minutes%=60;

                                var day=Math.floor(hours/24);
                                hours%=24;
                                return (day > 0 ? (day + 'дн. ') : '') + (hours > 0 ? (hours + 'ч. ') : '') + (minutes > 0 ? (minutes + 'м. ') : (day == 0 && hours == 0 ? '0 м. ' : ''));
                            },
                            title: {
                                formatter: (seriesName) => seriesName,
                            },
                        },
                    },
                    dataLabels: {
                        enabled: false
                    },
                    xaxis: {
                        type: 'datetime',
                        labels: {
                            formatter: function(value) {
                                var format = "%mplr";
                                return main.getDateConvert(format, value)
                            },
                        }
                    },
                    yaxis: {
                        opposite: true,
                        labels: {
                            formatter: function(minutes) {
                                var hours=Math.floor(minutes/60);
                                minutes%=60;

                                var day=Math.floor(hours/24);
                                hours%=24;
                                return (day > 0 ? (day + 'дн. ') : (hours > 0 ? (hours + 'ч. ') : (minutes > 0 ? (minutes + 'м. ') : (day == 0 && hours == 0 ? '0 м. ' : ''))));
                            },
                        }
                    },
                    legend: {
                        horizontalAlign: 'left'
                    }
                },
                chartOptionsMonthTime: {
                    chart: {
                        toolbar: {
                            show: true,
                            tools: {
                                download: true,
                                selection: true,
                                zoom: true,
                                zoomin: true,
                                zoomout: true,
                                pan: true,
                                reset: true,
                                customIcons: []
                            },
                            autoSelected: 'zoom' 
                        }
                    },
                    grid: {
                        yaxis: {
                            lines: {
                                show: false
                            }
                        }
                    },
                    theme: {
                        mode: 'light', 
                        palette: 'palette5'
                    },
                    tooltip: {
                        theme: "dark",
                        x: {
                            show: true,
                            formatter: function(value) {
                                var format = "%d %m %y";
                                return main.getDateConvert(format, value)
                            },
                        },
                        y: {
                            formatter: function(minutes) {
                                var hours=Math.floor(minutes/60);
                                minutes%=60;

                                var day=Math.floor(hours/24);
                                hours%=24;
                                return (day > 0 ? (day + 'дн. ') : '') + (hours > 0 ? (hours + 'ч. ') : '') + (minutes > 0 ? (minutes + 'м. ') : (day == 0 && hours == 0 ? '0 м. ' : ''));
                            },
                            title: {
                                formatter: (seriesName) => seriesName,
                            },
                        },
                    },
                    dataLabels: {
                        enabled: false
                    },
                    xaxis: {
                        type: 'datetime',
                        labels: {
                            formatter: function(value) {
                                var format = "%d %f";
                                return main.getDateConvert(format, value)
                            },
                        }
                    },
                    yaxis: {
                        opposite: true,
                        labels: {
                            formatter: function(minutes) {
                                var hours=Math.floor(minutes/60);
                                minutes%=60;

                                var day=Math.floor(hours/24);
                                hours%=24;
                                return (day > 0 ? (day + 'дн. ') : (hours > 0 ? (hours + 'ч. ') : (minutes > 0 ? (minutes + 'м. ') : (day == 0 && hours == 0 ? '0 м. ' : ''))));
                            },
                        }
                    },
                    legend: {
                        horizontalAlign: 'left'
                    }
                },
            }
        },
        watch: {
            '$route' (to, from) {
                this.login = to.params.login;
                this.loadData();
            }
        },
        methods: {
            transform: function (raw) {
                let x = []
                for (var prop in raw) {
                    x.push([prop, raw[prop]]);
                }
                return x
            }, 
            formatter(num, digits) {
                var si = [
                    { value: 1, symbol: "" },
                    { value: 1E3, symbol: "К" },
                    { value: 1E6, symbol: "М" },
                    { value: 1E9, symbol: "МЛРД" },
                    { value: 1E12, symbol: "БЛН" },
                    { value: 1E15, symbol: "БЛРД" },
                    { value: 1E18, symbol: "ТЛН" }
                ];
                var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
                var i;
                for (i = si.length - 1; i > 0; i--) {
                    if (num >= si[i].value) {
                    break;
                    }
                }
                return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
            },
            onChangeServer() {
                if(this.server == "") {
                    this.serverDisplay = "Все серверы";
                    this.serverDisplayText = "всех серверах";
                } else {
                    for(var srv in this.servers) {
                        var server = this.servers[srv];
                        if(server.server + ":" + server.num == this.server) {
                            this.serverDisplay = server.name;
                            this.serverDisplayText = this.serverDisplay;
                            break;
                        }
                    }
                }
                this.loadData();
            },
            listener(packet, data) {
                if(packet === 'profile.pieOnline') {
                    if (data.type === 'success') {
                        ApexCharts.exec('donutOnline', "updateOptions", {
                            labels: data.keys
                        });
                        this.series = data.values;
                    }
                }
                if(packet === 'profile.graphicOnline') {
                    if (data.type === 'success') {
                        this.seriesMonthTime = [{
                            data: data.online_month.data
                        }]
                        this.seriesAllTime = [{
                            data: data.online_year.data
                        }]
                    } 
                }
                if(packet === 'profile.statisticServers') {
                    if (data.type === 'success') {
                        this.servers = data.servers;
                    } 
                }
                if(packet === 'profile.playerStatistics') {
                    if (data.type === 'success') {
                        this.statsLoad = true;
                        this.stats = data.stats;
                        this.statsServer = data.servers;
                    } 
                }
                if(packet === 'profile.playerMoney') {
                    if (data.type === 'success') {
                        ApexCharts.exec('barOnline', "updateOptions", {
                            xaxis: {
                                categories: data.keys
                            }
                        });
                        this.seriesBar = [{
                            data: data.values
                        }]
                    }
                }
			},
            loadData() {
                if(this.server == '') {
                    this.$root.$emit('send_websocket', `{"packet":"profile.graphicOnline","data":{"login": "${this.login}"}}`);
                } else {
                    var splits = this.server.split(':', 2);
                    var server = splits[0];
                    var id = splits[1];
                    this.$root.$emit('send_websocket', `{"packet":"profile.graphicOnline","data":{"login": "${this.login}", "server": "${server}", "id": "${id}"}}`);
                }
            }
        },
        beforeDestroy() {
            EventBus.$off('onProcessPacket', this.listener);
            clearInterval(this.timer);
        },
        created() {
            this.login = this.$route.params.login;
            EventBus.$on('onProcessPacket', this.listener);

            this.$root.$emit('send_websocket', `{"packet":"profile.statisticServers","data":{}}`);        
            this.$root.$emit('send_websocket', `{"packet":"profile.pieOnline","data":{"login": "${this.login}"}}`);
            this.$root.$emit('send_websocket', `{"packet":"profile.playerStatistics","data":{"login": "${this.login}"}}`);
             this.$root.$emit('send_websocket', `{"packet":"profile.playerMoney","data":{"login": "${this.login}"}}`);

            this.loadData();
            this.timer = setInterval(this.loadData, 60000);
        }
    }
</script>
<style scoped>
.ui-selectbox-wrapper{position:relative;display:inline-block}.ui-selectbox-wrapper>select{position:absolute;top:0;left:0;bottom:0;width:100% !important;height:auto !important;z-index:5;opacity:0;cursor:pointer}.ui-dialog .ui-selectbox-wrapper>select{z-index:2000}.ui-selectbox-dropdown{display:inline-block;background:#fff;color:#7F8C8D;font-size:13px;font-weight:400;padding:5px
10px;padding-right:17px;cursor:pointer;border:1px
solid #D7D7D7;border-radius:2px;position:relative;text-align:left;min-width:100px;z-index:1;box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;vertical-align:baseline}.ui-selectbox-dropdown:hover{border-color:#C6C6C6}.ui-selectbox-wrapper>select:focus+.ui-selectbox-dropdown{color:#444;border-color:#3498DB;box-shadow:0 0 3px rgba(52,152,219,0.5)}.ui-selectbox-wrapper>select:disabled{cursor:default}.ui-selectbox-wrapper>select:disabled+.ui-selectbox-dropdown{color:#AAAFAF;border-color:#D7D7D7}.ui-selectbox-wrapper>select:disabled+.ui-selectbox-dropdown:before{color:#C1C4C4}
    .head {
        color: #810101;
        background: linear-gradient(45deg, #018134, #00a8ee);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 25px;
        font-weight: bolder;
        font-family: 'Ubuntu';
        text-transform: uppercase;
        text-align: center;
    }

    div .chart {
        margin-right: -10px;
    }  

    .panel-bg {
		background: #ffe0ab;
        border-radius: 2px;
        padding: 10px;
        width: 650px;
        margin-left: 10px;
        margin-top: 10px;
        border-bottom: 2px solid #f6cb7c;
        border-top: 2px solid #f6cb7c;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
	}

    .panel-bg .panel-header {
        text-transform: uppercase;
        width: 650px;
        background: linear-gradient(145deg, rgb(255, 188, 65), rgba(250, 188, 105, 0.8) 55%);
        background: linear-gradient(145deg, rgb(255, 188, 65), rgb(250, 160, 105) 55%);
        margin: -10px;
        height: 35px;
        padding: 8px;
        font-size: 17px;
        margin-bottom: 9px;
        color: #dc0d0d;
        padding-left: 15px;
        font-weight: bold;
        font-family: "Ubuntu";
    }

    .panel-header2 {
        text-transform: uppercase;
        font-size: 17px;
        color: #dc0d0d;
        font-weight: bold;
        font-family: "Ubuntu";
        background: linear-gradient(145deg, rgb(255, 188, 65), rgba(250, 188, 105, 0.8) 55%);
    }

table {
  border-spacing: 1;
  border-collapse: collapse;
  width: 100%;
  margin: 0 auto;
}
table td, table th {
  padding-left: 8px;
}
table thead tr {
    height: 35px;
    background: linear-gradient(145deg, rgb(255, 188, 65), rgb(250, 160, 105) 55%);
    color: #dc0d0d;
    font-weight: bold;
    font-family: "Ubuntu";
}
table tbody tr {
  height: 40px;
}
table tbody tr:last-child {
  border: 0;
}
table td, table th {
  text-align: left;
}
table td.l, table th.l {
  text-align: right;
}
table td.c, table th.c {
  text-align: center;
}
table td.r, table th.r {
  text-align: center;
}


.table100-head th{
  font-size: 18px;
  line-height: 1.2;
  font-weight: unset;
    padding-left: 12px;
}

tbody tr:nth-child(even) {
  background-color: #ffd388;
}

tbody tr {
	font-size: 14px;
    color: #3a3535;
    background-color: #ffe0ab;
    line-height: 1.2;
    font-weight: unset;
}

.column1 {
    width: 180px;
}
</style>
