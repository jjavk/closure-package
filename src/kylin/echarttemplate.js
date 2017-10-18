goog.provide('echartTemplate');
goog.provide('echartTemplate.data');
goog.provide('echartTemplate.data.DistributionChart');
goog.provide('echartTemplate.data.GrothChart');
goog.provide('echartTemplate.data.general');
goog.provide('echartTemplate.data.general.StructureChart');
goog.provide('echartTemplate.data.general.TendencyChart');
goog.provide('echartTemplate.data.general.KeyPointChart');
goog.provide('echartTemplate.analyse');
goog.provide('echartTemplate.analyse.AssumeChart');
goog.provide('echartTemplate.analyse.HighFuryChart');
goog.provide('echartTemplate.analyse.TendencyChart');
goog.provide('echartTemplate.analyse.RegionTopChart');
goog.provide('echartTemplate.analyse.SolutionChart');
goog.provide('echartTemplate.analyse.SolveTopChart');
goog.provide('echartTemplate.oversee');
goog.provide('echartTemplate.oversee.TodayChart');
goog.provide('echartTemplate.oversee.HistoryChart');

goog.require('test');

var echartTemplate = echartTemplate || {};

echartTemplate.EchartTemplate = function(domID,option) {
	this.chart = domID;//echarts.init(document.getElementById(domID));
	this.defaultOption = option;
}

echartTemplate.EchartTemplate.prototype.setOption = function(option) {
	if(!option) {
		option  = this.defaultOption
	}
	this.chart.setOption(option);
}

echartTemplate.EchartTemplate.prototype.getDefaultOption = function() {
	return this.defaultOption;
}
goog.exportSymbol('echartTemplate', echartTemplate);

echartTemplate.data = echartTemplate.data || {};
echartTemplate.data.DistributionChart = function (domID) {
	goog.base(this,domID,{
	    tooltip : {
	        trigger: 'item',
	        formatter: "{b} : {c} ({d}%)"
	    },
	    series : [
	        {
	            name: '',
	            type: 'pie',
	            radius : '80%',
	            center: ['30%', '50%'],
	            legendHoverLink:false,
			    hoverAnimation:false,
	            data:[],
	            itemStyle: {
	      	      emphasis: {
	      	        shadowBlur: 10,
	      	        shadowOffsetX: 0,
	      	        shadowColor: 'rgba(0, 0, 0, 0.5)'
	      	      }
	      	    },
	      	    labelLine: {
	                normal:{
	                    length:5,
	                    length2:5
	                }
	            },
	            label: {
	                normal:{
	                    textStyle:{
	                        fontWeight:'lighter',
	                        fontSize:12
	                    }
	                }
	            }
	        }
	    ]
	});
	
}

goog.inherits(echartTemplate.data.DistributionChart,echartTemplate.EchartTemplate);
goog.exportSymbol('echartTemplate.data.DistributionChart', echartTemplate.data.DistributionChart);

echartTemplate.data.GrothChart = function(domID) {
	goog.base(this,domID,{
		color: ['#1f8bd7'],
	    tooltip : {
	        axisPointer : {            
	            type : 'shadow'       
	        }
	    },
	    grid: {
	    	top: '4%',
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    yAxis : [
	        {
	            type : 'category',
	            data : [],
	            axisTick: {
	                alignWithLabel: true
	            },
	            axisLabel: {
		            textStyle: {
		                color: '#1f8bd7'
		            }
		        }
	        }
	    ],
	    xAxis : [
	        {
	            type : 'value',
	            axisLabel : {
	                formatter : '{value}%',
	                textStyle: {
		                color: '#1f8bd7'
		            }
	            }
	        }
	    ],
	    series : [
	        {
	            name:'',
	            type:'bar',
	            barWidth: '60%',
	            data:[]
	        }
	    ]
	});
}
goog.inherits(echartTemplate.data.GrothChart,echartTemplate.EchartTemplate);
goog.exportSymbol('echartTemplate.data.GrothChart', echartTemplate.data.GrothChart);

echartTemplate.data.general = echartTemplate.data.general || {};
echartTemplate.data.general.StructureChart = function(domID) {
	goog.base(this,domID,{
		color : [ "#f3a634", "#1f8bd7", "#eb5d4a" ],
		tooltip : {
			trigger : 'item',
			formatter : "{b} : {c}({d}%)",
			position : [ '50%', '50%' ],
		},
		series : [ {
			name : '',
			type : 'pie',
			radius : [ '50%', '96%' ],
			center : [ '50%', '50%' ],
			label : {
				normal : {
					show : false
				}
			},
			labelLine : {
				normal : {
					show : false
				}
			},
			legendHoverLink : false,
			hoverAnimation : false,
			itemStyle : {
				emphasis : {
					shadowBlur : 10,
					shadowOffsetX : 0,
					shadowColor : 'rgba(0, 0, 0, 0.5)'
				}
			},
			data : []
		} ]
	});
}
goog.inherits(echartTemplate.data.general.StructureChart,echartTemplate.EchartTemplate);
goog.exportSymbol('echartTemplate.data.general.StructureChart', echartTemplate.data.general.StructureChart);

echartTemplate.data.general.TendencyChart = function(domID) {
	goog.base(this,domID,{
		color : [ "#1f8bd7", "#eb5d4a", "#f3a634" ],
		legend : {
			show : false
		},
		tooltip : {
			trigger : 'item',
			formatter : "{b}<br/>{a} : {c}"
		},
		grid : {
			top : '25%',
			left : '15%',
			right : '10%',
			bottom : '20%',

		},
		xAxis : [ {
			min : 0,
			name : '时间',
			type : 'category',
			data : [],
			axisLabel : {
				textStyle : {
					color : '#1f8bd7'
				}
			}
		} ],
		yAxis : [ {
			name : '数量',
			type : 'value',
			axisLabel : {
				textStyle : {
					color : '#1f8bd7'
				}
			}
		} ],
		series : [ {
			name : '',
			type : 'bar',
			stack : '人口',
			data : []
		}, {
			name : '',
			type : 'bar',
			stack : '人口',
			data : []
		}, {
			name : '',
			type : 'bar',
			stack : '人口',
			data : []
		} ]
	});
}
goog.inherits(echartTemplate.data.general.TendencyChart,echartTemplate.EchartTemplate);
goog.exportSymbol('echartTemplate.data.general.TendencyChart', echartTemplate.data.general.TendencyChart);


echartTemplate.data.general.KeyPointChart = function(domID) {
	goog.base(this,domID,{
		tooltip : {
	        trigger: 'item',
	        formatter: "{b}<br/>{a} : {c}"
	    },
		legend: {
	        data: [],
	        right: 0,
	        itemGap: 50,
	        show : false
	    },
	    color: ['#1f8bd7','#f3a634',"#eb5d4a"],
	    grid: {
	    	top: '20%',
	        left: '0%',
	        right: '6%',
	        bottom: '0%',
	        containLabel: true
	    },
	    xAxis:  {
	        type: 'value',
	        data: [],
	        axisLabel: {
	            textStyle: {
	                color: '#1f8bd7'
	            }
	        }
	    },
	    yAxis: {
	        type: 'category',
	        data: [],
	        axisLabel: {
                textStyle: {
                    color: '#1f8bd7'
                }
	        }
	    },
	    series: [
	        {
	            name: '',
	            type: 'bar',
	            stack: '总量',
	            barWidth:'70%',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight'
	                }
	            },
	            data: []
	        },
	        {
	            name: '',
	            type: 'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight'
	                }
	            },
	            data: []
	        }
	    ]
	});
}
goog.inherits(echartTemplate.data.general.KeyPointChart,echartTemplate.EchartTemplate);
goog.exportSymbol('echartTemplate.data.general.KeyPointChart', echartTemplate.data.general.KeyPointChart);

echartTemplate.analyse = echartTemplate.analyse || {};
echartTemplate.analyse.AssumeChart = function(domID) {
	goog.base(this,domID,{
		tooltip : {
	    	formatter: '{a} <br/>&nbsp;&nbsp;&nbsp;{c}%',
	    	position: ['50%', '50%'],
	    },
	    series: [
	        {
	        	name:'处置率',
	            type:'gauge',
	            min:0,
	            max:100,
	            splitNumber:10,
	            radius: '100%',
	            axisLine: {            // 弧线
	                lineStyle: {       
	                    color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
	                    width: 5
	                }
	            },
	            axisLabel: {            // 刻度值
	                textStyle: {      
	                    fontWeight: 'lighter',
	                }
	            },
	            axisTick: {            // 刻度点
	                length :8,  
	                splitNumber:10,
	                lineStyle: {       
	                    color: 'auto'
	                }
	            },
	            splitLine: {           // 分割线
	                length :14,         
	                lineStyle: {       
	                    width:1,
	                    color: 'auto'
	                }
	            },
	            pointer: {
	                width:4,
	            },
	            title:{
	            	offsetCenter:[0,'80%'],
		        	textStyle: {   
			            fontSize:15
		            },
	            },
	            detail : {
	                offsetCenter: [0, '50%'],       
	                textStyle: {       
	                    fontWeight: 'lighter',
	                    fontSize:15
	                },
	                formatter:'{value}%'
	            },
	            data : []
	        }
	    ]
	});
}
goog.inherits(echartTemplate.analyse.AssumeChart,echartTemplate.EchartTemplate);
goog.exportSymbol('echartTemplate.analyse.AssumeChart', echartTemplate.analyse.AssumeChart);


echartTemplate.analyse.HighFuryChart = function(domID) {
	goog.base(this,domID,{
		tooltip: {
	        formatter: "{a}<br>{b}: {c} ({d}%)",
	        position: ['50%', '50%'],
	    },
	    textStyle:{
	        fontSize:12,
	        fontWeight:'lighter'
	    },
	    series: [
	        {
	            name:'大类',
	            type:'pie',
	            radius: [0, '40%'],
	            selectedMode: 'single',
	            legendHoverLink:false,
			    hoverAnimation:false,
	            label: {
	                normal: {
	                	show: false,
	                    position: 'inner'
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[],
	            itemStyle: {
	      	      emphasis: {
	      	        shadowBlur: 10,
	      	        shadowOffsetX: 0,
	      	        shadowColor: 'rgba(0, 0, 0, 0.5)'
	      	      }
	      	    }
	        },
	        {
	            name:'小类',
	            type:'pie',
	            radius: ['60%', '95%'],
	            legendHoverLink:false,
			    hoverAnimation:false,
			    label: {
	                normal: {
	                	show: false,
	                    //position: 'inner'
	                }
	            },
	            labelLine: {
	                normal:{
	                    length:5,
	                    length2:5
	                }
	            },
	            data:[],
	            itemStyle: {
	      	      emphasis: {
	      	        shadowBlur: 10,
	      	        shadowOffsetX: 0,
	      	        shadowColor: 'rgba(0, 0, 0, 0.5)'
	      	      }
	      	    }
	        }
	    ]
	});
}
goog.inherits(echartTemplate.analyse.HighFuryChart,echartTemplate.EchartTemplate);
goog.exportSymbol('echartTemplate.analyse.HighFuryChart', echartTemplate.analyse.HighFuryChart);


echartTemplate.analyse.TendencyChart = function(domID) {
	goog.base(this,domID,{
		tooltip : {
	        axisPointer : {   
	            type : 'shadow'
	        }
	    },
	    legend: {
	        data:['上报数','处置数','增长率','按期处置率']
	    },
	    grid: {
	    	top: '20%',
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: [
	        {
	            type: 'category',
	            data: [],
	            axisPointer: {
	                type: 'shadow'
	            },
	            axisLabel: {
	                textStyle: {
	                    color: '#3398DB'
	                }
	            }
	        }
	    ],
	    yAxis: [
	        {
	            type: 'value',
	            name: '',
	            //min: 0,
	            //max: 1500,
	            //interval: 300,
	            axisLabel: {
	                formatter: '{value}',
	                textStyle:{
	                    color: '#3398DB'
	                }
	            }
	        },
	        {
	            type: 'value',
	            name: '',
	            //min: 0,
	            //max: 50,
	            //interval: 10,
	            axisLabel: {
	                formatter: '{value}%',
	                textStyle:{
	                    color:'#3398DB',
	                }
	            }
	        },
	    ],
	    series: [
	        {
	            name:'上报数',
	            type:'bar',
	            //color:['#ca8622'],
	            data:[]
	        },
	        {
	            name:'处置数',
	            type:'bar',
	            //color:['#ca8622'],
	            data:[]
	        },
	        {
	            name:'增长率',
	            type:'line',
	            yAxisIndex: 1,
	            //color: ['#3398DB'],
	            data:[]
	        },
	        {
	            name:'按期处置率',
	            type:'line',
	            yAxisIndex: 1,
	            //color: ['#3398DB'],
	            data:[]
	        }
	    ]
	});
}
goog.inherits(echartTemplate.analyse.TendencyChart,echartTemplate.EchartTemplate);
goog.exportSymbol('echartTemplate.analyse.TendencyChart', echartTemplate.analyse.TendencyChart);

echartTemplate.analyse.RegionTopChart = function(domID) {
	goog.base(this,domID,{
		color: ['#61a0a8'],
	    tooltip : {
	        axisPointer : {            
	            type : 'shadow'       
	        },
	        position: ['50%', '50%'],
	    },
	    grid: {
	    	top: '4%',
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            data : ['1', '2', '3', '4', '5','6', '7', '8', '9', '10'],
	            axisLabel: {
	                textStyle:{
	                    color:'#61a0a8',
	                }
	            }
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            axisLabel: {
	                textStyle:{
	                    color:'#61a0a8',
	                }
	            }
	        }
	    ],
	    series : [
	        {
	            name:'',
	            type:'bar',
	            data:[]
	        }
	    ]
	});
}
goog.inherits(echartTemplate.analyse.RegionTopChart,echartTemplate.EchartTemplate);
goog.exportSymbol('echartTemplate.analyse.RegionTopChart', echartTemplate.analyse.RegionTopChart);

echartTemplate.analyse.SolutionChart = function(domID) {
	goog.base(this,domID,{
		tooltip: {
	        formatter: "{b}:{c} ({d}%)",
	        position: ['50%','50%']
	    },
	    title: {
	    	text: '办案率',
	    	left: 'center',
	    	top: 'center',
	    	textStyle: {
	    		fontSize: 15,
	    	}
	    },
	    textStyle:{
	        fontSize:12,
	        fontWeight:'lighter'
	    },
	    color: [],
	    series: [
	    	{
	            name:'',
	            type:'pie',
	            radius: ['70%', '95%'],
	            center: ['50%', '50%'],
	            legendHoverLink:false,
			    hoverAnimation:false,
			    label:{
		        	normal:{
		        		show:false,
		        		position: 'center'
		        	}
		        },
	            data:[],
	            itemStyle: {
	      	      emphasis: {
	      	        shadowBlur: 10,
	      	        shadowOffsetX: 0,
	      	        shadowColor: 'rgba(0, 0, 0, 0.5)'
	      	      }
	      	    }
	        }
	    ]
	});
}
goog.inherits(echartTemplate.analyse.SolutionChart,echartTemplate.EchartTemplate);
goog.exportSymbol('echartTemplate.analyse.SolutionChart', echartTemplate.analyse.SolutionChart);

echartTemplate.analyse.SolveTopChart = function(domID) {
	goog.base(this,domID,{
		color: ['#3398DB'],
	    tooltip : {
	        axisPointer : {            
	            type : 'shadow'       
	        }
	    },
	    grid: {
	    	top: '4%',
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    yAxis : [
	        {
	            type : 'category',
	            data : [],
	            axisLabel: {
	                textStyle:{
	                    color:'#3398DB',
	                }
	            }
	        }
	    ],
	    xAxis : [
	        {
	            type : 'value',
	            data : [],
	            axisLabel: {
	            	formatter: '{value}%',
	                textStyle:{
	                    color:'#3398DB',
	                }
	            }
	        }
	    ],
	    series : [
	        {
	            name:'',
	            type:'bar',
	            barWidth: '60%',
	            data:[]
	        }
	    ]
	});
}
goog.inherits(echartTemplate.analyse.SolveTopChart,echartTemplate.EchartTemplate);
goog.exportSymbol('echartTemplate.analyse.SolveTopChart', echartTemplate.analyse.SolveTopChart);

echartTemplate.oversee = echartTemplate.oversee || {};
echartTemplate.oversee.TodayChart = function(domID) {
	goog.base(this,domID,{
		color: ["#eb4d4a","#1f8bd7"],
	    series: [{
	      name: '越界人数',
	      type: 'pie',
	      radius: ['50%', '96%'] ,
	      center: ['50%', '50%'],
	      data: [],
	      label:{
	        normal:{
	          show: false
	        }
	      },
	      labelLine: {
	        normal:{
	          show: false
	        }
	      },
	      legendHoverLink:false,
	      hoverAnimation:false,
	      itemStyle: {
	        emphasis: {
	          shadowBlur: 10,
	          shadowOffsetX: 0,
	          shadowColor: 'rgba(0, 0, 0, 0.5)'
	        }
	      }
	    }]
	});
}
goog.inherits(echartTemplate.oversee.TodayChart,echartTemplate.EchartTemplate);
goog.exportSymbol('echartTemplate.oversee.TodayChart', echartTemplate.oversee.TodayChart);


echartTemplate.oversee.HistoryChart = function(domID) {
	goog.base(this,domID,{
	    tooltip : {
	        axisPointer : {            
	            type : 'shadow'       
	        }
	    },
	    grid: {
	    	top: '4%',
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            data : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	            axisLabel : {
	            	textStyle : {
	            		color: ['red'],
	            	}
		            }
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            min : '0',
	            max : '100',
	            axisLabel : {
	            	formatter : '{value}%',
	            	textStyle : {
	            		color: ['red'],
	            	}
		            }
	        }
	    ],
	    series : [
	        {
	            name:'',
	            type:'line',
	            data:[]
	        }
	    ]
	});
}
goog.inherits(echartTemplate.oversee.HistoryChart,echartTemplate.EchartTemplate);
goog.exportSymbol('echartTemplate.oversee.HistoryChart', echartTemplate.oversee.HistoryChart);
