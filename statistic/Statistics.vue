<template>
    <div>
        <img src="/assets/img/pages/statistic.png" class="noselect header_img" draggable="false"/>

        <ul class="numbers-inline">
            <li><span class="n">{{online}}</span><span class="l">Текущий</span><span class="d">онлайн</span></li>
            <li><span class="n">{{record_online_day}}</span><span class="l">Максимальный за сутки</span><span class="d">Сегодня, {{record_online_day_time}}</span></li>
            <li><span class="n">{{record_online_absolute}}</span><span class="l">Абсолютный рекорд</span><span class="d">{{record_online_absolute_time}}</span></li>
            <div style="clear:both"></div>
        </ul>
        <br/>

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
            apexchart: VueApexCharts,
        },
        data () {
            return {
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
                record_online_absolute_time: 0,
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
            loadData() {
                console.log('Update statistics');
                axios.post(API + 'monitoring.all').then(res => {
                    var data = res.data.data;
                    
                    this.name = data.name;

                    this.record_online_day = data.record_online_day;
                    this.record_online_absolute = data.record_online_absolute;
                    this.online = data.current_online;
                    if(this.online == -1) {
                        this.online = "-";
                    }

                    var rec_day_time = new Date(data.record_online_day_time);
                    this.record_online_day_time = (rec_day_time.getHours() < 10 ? "0" : "") + rec_day_time.getHours() + ":" + (rec_day_time.getMinutes() < 10 ? "0" : "") +  rec_day_time.getMinutes();
                    this.record_online_absolute_time = new Date(data.record_online_absolute_time).toLocaleDateString();
                    
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
                    this.loadData();
            }
        },
        created() {
            EventBus.$on('onProcessPacket', this.listener);
        },
        beforeDestroy() {
            EventBus.$off('onProcessPacket', this.listener);
        },
        mounted() {
            this.loadData();
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
</style>
