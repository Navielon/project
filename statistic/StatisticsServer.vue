<template>
    <div>
        <img src="/assets/img/pages/statistic.png" class="noselect header_img" draggable="false"/>
        <div class="head" style="font-family: 'Fredoka One'; font-size: 40px; font-weight: normal;">{{this.name}} #{{this.id}}</div> 

        <ul class="numbers-inline">
            <li><span class="n">{{online}}</span><span class="l">Текущий</span><span class="d">онлайн</span></li>
            <li><span class="n">{{record_online_day}}</span><span class="l">Максимальный за сутки</span><span class="d">Сегодня, {{record_online_day_time}}</span></li>
            <li><span class="n">{{record_online_absolute}}</span><span class="l">Абсолютный рекорд</span><span class="d">{{record_online_absolute_time}}</span></li>
            <div style="clear:both"></div>
        </ul>
        <br/>

        <div v-if="isOnline" class="head">Использование ресурсов сервером</div>  
        <div v-if="isOnline" style="width: 525px; margin-left: 70px; margin-bottom:10px">
            <div style="float: left">
                <div id="chartTps" style="max-width: 260px;max-height: 150px;margin-top: -30px;margin-bottom: 40px;">
                    <apexchart type=radialBar height=350 ref="tpsChart" :options="chartOptionsTps" :series="seriesTps" />
                </div>

                <div style="clear:both"></div>
                <div style="text-align: center;max-width: 255px;color: #0078fb;margin-top: -5px;margin-bottom: 5px;"> 
                    {{tps}} TPS
                </div>
            </div>

            <div style="float: right">
                <div id="chartTps" style="max-width: 260px;max-height: 150px;margin-top: -30px;margin-bottom: 40px;">
                    <apexchart type=radialBar height=350 ref="memoryChart" :options="chartOptionsMemory" :series="seriesMemory" />
                </div>

                <div style="clear:both"></div>
                <div style="text-align: center;max-width: 255px;color: #0078fb;margin-top: -5px;margin-bottom: 5px;"> 
                    {{memory}}
                </div>
            </div>
            <div style="clear:both"></div>
        </div>
        <div v-else> 
            <div class="server-off">Сервер выключен</div>
        </div>

        <div class="head">Изменение онлайна за день</div> 
        <div id="chartDay" class="chart">
            <apexchart type=area height=350 ref="dayChart" :options="chartOptionsDay" :series="seriesDay"/>
        </div>
        <div class="head">Изменение онлайна за неделю</div> 
        <div id="chartWeek" class="chart">
            <apexchart type=area height=350 ref="weekChart" :options="chartOptionsWeek" :series="seriesWeek"/>
        </div>
        <div class="head">Изменение онлайна за месяц</div> 
        <div id="chartMonth" class="chart">
            <apexchart type=area height=350 ref="monthChart" :options="chartOptionsMonth" :series="seriesMonth"/>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import VueApexCharts from 'vue-apexcharts'
    import * as main from '@/main.js';
    import { API, EventBus } from '@/main.js'; 
    export default {
        name: 'Statistics',
        components: {
            apexchart: VueApexCharts
        },
        data () {
            return {
                name: null,
                id: null,
                timer: null,
                seriesDay: [{
                    name: 'Игроков онлайн',
                    data: []
                }],
                seriesWeek: [{
                    name: 'Игроков онлайн',
                    data: []
                }],
                seriesMonth: [{
                    name: 'Игроков онлайн',
                    data: []
                }],
                chartOptionsDay: {
                    chart: {
                        zoom: {
                            enabled: false
                        }
                    },
                    grid: {
                        yaxis: {
                            lines: {
                                show: false
                            }
                        }
                    },
                    tooltip: {
                        theme: "dark",
                        x: {
                            show: true,
                            format: 'HH:mm',
                            formatter: undefined,
                        },
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    xaxis: {
                        type: 'datetime',
                    },
                    yaxis: {
                        opposite: true,
                        min: 0
                    },
                    legend: {
                        horizontalAlign: 'left'
                    }
                },
                chartOptionsWeek: {
                    chart: {
                        zoom: {
                            enabled: false
                        }
                    },
                    grid: {
                        yaxis: {
                            lines: {
                                show: false
                            }
                        }
                    },
                    tooltip: {
                        theme: "dark",
                        x: {
                            show: true,
                            formatter: function(value) {
                                var format = "%d %m %y – %H:%M";
                                return main.getDate(format, value)
                            },
                        },
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    xaxis: {
                        type: 'datetime',
                        labels: {
                            formatter: function(value) {
                                var format = "%D";
                                return main.getDate(format, value)
                            },
                        }
                    },
                    yaxis: {
                        opposite: true,
                        min: 0
                    },
                    legend: {
                        horizontalAlign: 'left'
                    }
                },
                chartOptionsMonth: {
                    chart: {
                        zoom: {
                            enabled: false
                        }
                    },
                    grid: {
                        yaxis: {
                            lines: {
                                show: false
                            }
                        }
                    },
                    tooltip: {
                        theme: "dark",
                        x: {
                            show: true,
                            formatter: function(value) {
                                var format = "%d %m %y";
                                return main.getDate(format, value)
                            },
                        },
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    xaxis: {
                        type: 'datetime',
                        labels: {
                            formatter: function(value) {
                                var format = "%d %f";
                                return main.getDate(format, value)
                            },
                        }
                    },
                    yaxis: {
                        opposite: true,
                        min: 0
                    },
                    legend: {
                        horizontalAlign: 'left'
                    }
                },
                online: 0,
                record_online_day: 0,
                record_online_absolute: 0,
                record_online_day_time: '',
                record_online_absolute_time: '',
                isOnline: false,
                seriesTps: [0],
                tps: 0,
                chartOptionsTps: {
                    plotOptions: {
                        radialBar: {
                            startAngle: -90,
                            endAngle: 90,
                            track: {
                                background: "#e7e7e7",
                                strokeWidth: '97%',
                                margin: 5, // margin is in pixels
                                shadow: {
                                    enabled: true,
                                    top: 2,
                                    left: 0,
                                    color: '#999',
                                    opacity: 1,
                                    blur: 2
                                }
                            },
                            dataLabels: {
                                value: {
                                    offsetY: 15,
                                    fontSize: '22px'
                                }
                            }
                        }
                    },
                    theme: {
                        mode: 'light', 
                        palette: 'palette7'
                    },
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shade: 'light',
                            shadeIntensity: 0.4,
                            inverseColors: false,
                            opacityFrom: 1,
                            opacityTo: 1,
                            stops: [0, 50, 53, 91]
                        },
                    },
                    labels: ['CPU'],
                },
                seriesMemory: [0],
                memory: '',
                chartOptionsMemory: {
                    plotOptions: {
                        radialBar: {
                            startAngle: -90,
                            endAngle: 90,
                            track: {
                                background: "#e7e7e7",
                                strokeWidth: '97%',
                                margin: 5, // margin is in pixels
                                shadow: {
                                    enabled: true,
                                    top: 2,
                                    left: 0,
                                    color: '#999',
                                    opacity: 1,
                                    blur: 2
                                }
                            },
                            dataLabels: {
                                value: {
                                    offsetY: 15,
                                    fontSize: '22px'
                                }
                            }
                        }
                    },
                    theme: {
                        mode: 'light', 
                        palette: 'palette7'
                    },
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shade: 'light',
                            shadeIntensity: 0.4,
                            inverseColors: false,
                            opacityFrom: 1,
                            opacityTo: 1,
                            stops: [0, 50, 53, 91]
                        },
                    },
                    labels: ['Memory'],
                }
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
            loadData(params) {
                console.log('Update statistics');
                this.id = parseInt(params.id);
                axios.post(API + "monitoring.get?server=" + params.server + "&id=" + this.id).then(res => {
                    var data = res.data.data;
                    if(data.type == "error") {
                        this.$router.push('/error');
                        return;
                    } 
                    this.name = data.name;
                    this.isOnline = data.is_server_run;
                    this.record_online_day = data.record_online_day;
                    this.record_online_absolute = data.record_online_absolute;
                    this.online = data.online;
                    if(this.online == -1) {
                        this.online = "-";
                    }

                    var rec_day_time = new Date(data.record_online_day_time);
                    this.record_online_day_time = (rec_day_time.getHours() < 10 ? "0" : "") + rec_day_time.getHours() + ":" + (rec_day_time.getMinutes() < 10 ? "0" : "") +  rec_day_time.getMinutes();
                    this.record_online_absolute_time = new Date(data.record_online_absolute_time).toLocaleDateString();

                    var tps = (20 - data.tps)/20 * 100; 
                    if(tps <= 0) {
                        tps = 1;
                    }
                    if(tps > 100) {
                        tps = 100;
                    }
                    this.seriesTps = [Math.round(tps)];

                    var ram = data.ram;
                    var maxRam = data.max_ram;
                    var memory = Math.round(ram/maxRam * 100);
                    if(memory <= 0) {
                        memory = 1;
                    }
                    if(memory > 100) {
                        memory = 100;
                    }
                    this.seriesMemory = [memory];
                    this.memory = (ram/1024.0).toFixed(1) + "GB / " + (maxRam/1024).toFixed(1) + "GB";

                    this.tps = data.tps.toFixed(1);
                    if(this.tps <= 1) {
                        this.tps = 1;
                    }
                    if(this.tps >= 20) {
                        this.tps = 20;
                    }

                    this.$refs.dayChart.updateSeries([{
                        data: data.online_day.data
                    }])
                    this.$refs.weekChart.updateSeries([{
                        data: data.online_week.data
                    }])
                    this.$refs.monthChart.updateSeries([{
                        data: data.online_month.data
                    }])
                })
            },
            listener(packet, data) {
                if(packet === 'monitoring')
                    this.loadData(this.$route.params);
            }
        },
        created() {
            EventBus.$on('onProcessPacket', this.listener);
        },
        beforeDestroy() {
            EventBus.$off('onProcessPacket', this.listener);
        },
        watch: {
            '$route' (to, from) {
                this.loadData(to.params);
            }
        },
        mounted() {
            this.loadData(this.$route.params);
        }
    }
</script>

<style scoped>
    .head {
        color: #810101;
        background: linear-gradient(45deg, #810101, #e00);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 25px;
        font-weight: bolder;
        font-family: 'Ubuntu';
        text-transform: uppercase;
        text-align: center;
    }

    div .chart {
        margin-right: -20px;
    }  

    .page_text_header {
        text-align: center;
        font-family: "PT Sans Narrow", sans-serif;
        font-size: 38px;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-weight: 700;
        line-height: 70px;
        color: rgb(251, 247, 208);
        text-indent: 5px;
        text-shadow: rgba(0, 0, 0, 0.44) 3px 3px 3px;
    }

    .numbers-inline {
        display: block;
        padding: 5px 0;
        margin: 0px 0;
    }
    
    .numbers-inline>li {
        display: block;
        float: left;
        border-right: 1px dotted #E5E5E5;
        text-align: center;
        width: 32.2%;
    }

    .numbers-inline>li>span {
        display: block;
        text-transform: uppercase;
        line-height: 13px;
    }
    
    .numbers-inline span.n {
        font-size: 28px;
        line-height: 32px;
        font-family: 'Fredoka One';
        color: #404040;
        font-weight: 100;
    }

    .numbers-inline span.l, .numbers-inline span.d {
        color: #3a2d2d;
        font-size: 14px;
        font-family: 'Ubuntu';
        font-weight: 900;
    }

    .numbers-inline span.d {
        color: #666;
        font-size: 13px;
    }

    .server-off {
        text-align: center;
        font-size: 28px;
        margin-bottom: 15px;
        color: #dc1f0e;
        font-family: "PT Sans Narrow", sans-serif;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-weight: 700;
        text-shadow: rgba(0, 0, 0, 0.44) 2px 2px 2px;
    }
</style>
