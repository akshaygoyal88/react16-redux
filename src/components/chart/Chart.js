import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class Chart extends PureComponent {
  constructor(props){
    super(props);
    this._onEvents ={
      'click': this.onChartClick
    }

    this.state = {typeGraph: 'stacked'};
    this._onChange = this._onChange.bind(this);
    this.getOption = this.getOption.bind(this);
  }

  getTypeGraph(typeGraph){
    var option;
    if (typeGraph === "stacked") {
      option = {
          tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
          },
          legend: {
              data:['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
          },
          toolbox: {
              show : true,
              feature : {
                  mark : {show: true},
                  dataView : {show: true, readOnly: false},
                  magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                  restore : {show: true},
                  saveAsImage : {show: true}
              }
          },
          calculable : true,
          xAxis : [
              {
                  type : 'value'
              }
          ],
          yAxis : [
              {
                  type : 'category',
                  data : ['周一','周二','周三','周四','周五','周六','周日']
              }
          ],
          series : [
              {
                  name:'直接访问',
                  type:'bar',
                  stack: '总量',
                  itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                  data:[320, 302, 301, 334, 390, 330, 320]
              },
              {
                  name:'邮件营销',
                  type:'bar',
                  stack: '总量',
                  itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                  data:[120, 132, 101, 134, 90, 230, 210]
              },
              {
                  name:'联盟广告',
                  type:'bar',
                  stack: '总量',
                  itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                  data:[220, 182, 191, 234, 290, 330, 310]
              },
              {
                  name:'视频广告',
                  type:'bar',
                  stack: '总量',
                  itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                  data:[150, 212, 201, 154, 190, 330, 410]
              },
              {
                  name:'搜索引擎',
                  type:'bar',
                  stack: '总量',
                  itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                  data:[820, 832, 901, 934, 1290, 1330, 1320]
              }
          ]
      };
    } else if(typeGraph === "pie"){
      option ={
          title : {
              text: '某站点用户访问来源',
              subtext: '纯属虚构',
              x:'center'
          },
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
              orient: 'vertical',
              left: 'left',
              data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
          },
          series : [
              {
                  name: '访问来源',
                  type: 'pie',
                  radius : '55%',
                  center: ['50%', '60%'],
                  data:[
                      {value:335, name:'直接访问'},
                      {value:310, name:'邮件营销'},
                      {value:234, name:'联盟广告'},
                      {value:135, name:'视频广告'},
                      {value:1548, name:'搜索引擎'}
                  ],
                  itemStyle: {
                      emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
      }
    } else {
      option = {
        title: {
            text: '基础雷达图'
        },
        tooltip: {},
        legend: {
            data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
               }
            },
            indicator: [
               { name: '销售（sales）', max: 6500},
               { name: '管理（Administration）', max: 16000},
               { name: '信息技术（Information Techology）', max: 30000},
               { name: '客服（Customer Support）', max: 38000},
               { name: '研发（Development）', max: 52000},
               { name: '市场（Marketing）', max: 25000}
            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
                {
                    value : [4300, 10000, 28000, 35000, 50000, 19000],
                    name : '预算分配（Allocated Budget）'
                },
                 {
                    value : [5000, 14000, 28000, 31000, 42000, 21000],
                    name : '实际开销（Actual Spending）'
                }
            ]
        }]
      };
    }
    return option;
  }

  getOption = () => {
    const typeGraph = this.state.typeGraph;
    var option = this.getTypeGraph(typeGraph);

    if(this.refs.echarts_react){
      this.refs.echarts_react.getEchartsInstance().setOption(option, true)
    } else{
      this.setState({option})
    }
  }
  componentWillMount(){
    this.getOption()
  }
  clickBtn = () => {
    console.log(this.echarts_react.getEchartsInstance().getDataURL());
    console.log(this.echarts_react);
    window.open(this.echarts_react.getEchartsInstance().getDataURL(), '_blank');
  };

  onChartClick = (params)=>{
    console.log(params, 'params')
    // Do what you want to do on click event. params depend on the  type of  chart 
  }
  _onChange = (event) =>{
    this.setState({typeGraph: event.target.value},()=>{
      this.getOption()
    });
    
  }
  render() {
    let code = "<ReactEcharts ref={(e) => { this.echarts_react = e; }} \n" +
          "  option={this.getOption()} /> \n" +
          "\n" +
          "// use echarts API: http://echarts.baidu.com/api.html#echartsInstance" +
          "this.echarts_react.getEchartsInstance().getDataURL();";
    return (
      <div className='examples'>
        <div className='parent'>
          <label> use echarts API With <strong> getEchartsInstance() </strong>: (the API will return the echarts instance, then you can use any API of echarts.)</label>
          <ReactEcharts ref={"echarts_react"}
            onEvents= {this._onEvents}
            option={this.state.option}  />
          <div>
            <select value={this.state.typeGraph} onChange={this._onChange}>
              <option value="radar">Radar chart</option>
              <option value="stacked">Stacked Chart</option>
              <option value="pie">Pie Chart</option>
            </select>
          </div>
          <label> code below: (echarts API list see: http://echarts.baidu.com/api.html#echartsInstance)</label>
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      </div>
    );
  }
}
