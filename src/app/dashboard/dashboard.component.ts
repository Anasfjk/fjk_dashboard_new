import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  Highcharts = Highcharts;
  chartOptions1 = {};
  pieChart = {};
  vatPieChart = {};
  salesAnalyseChart = {};
  purchaseAnalyseChart = {};
  topSellingProductChart = {};
  topSellingCustomerChart = {};
  topSupplierChart = {};

  constructor() {
    this.pieChart = {
      chart: {
        type: 'pie',
        plotShadow: false,
        backgroundColor: null,
      },

      credits: {
        enabled: false,
      },

      plotOptions: {
        pie: {
          innerSize: '99%',
          borderWidth: 10,
          borderColor: '',
          slicedOffset: 10,
          dataLabels: {
            connectorWidth: 0,
          },
        },
      },

      legend: {
        enabled: false,
      },

      title: {
        text: null,
      },

      series: [
        {
          type: 'pie',
          data: [
            { y: 40, color: '#34c38f' },
            { y: 60, color: '#1c84ee' },
          ],
        },
      ],
    };

    this.chartOptions1 = {
      chart: {
        type: 'column',
        style: {
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
        },
      },

      xAxis: {
        categories: [
          'No due yet',
          '0-30 days',
          '31-60 Days',
          '61-90 Days',
          '91-120 Days',
          '120+ Days',
        ],
      },
      yAxis: {
        title: {
          text: 'Amount',
        },
      },
      title: {
        text: 'Outstanding Recievable',
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        column: {
          dataLabels: {
            enabled: false,
          },
        },
      },
      legend: {
        enabled: false,
      },
      series: [
        {
          name: 'Recievable',
          data: [0, 50000, 100000, 150000, 200000, 250000],
        },
      ],
    };

    this.vatPieChart = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        style: {
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
        },
      },
      title: {
        text: 'Value-added Taxes (VAT)',
        align: 'center',
        margin: 20,
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
          },
          showInLegend: true,
        },
      },
      series: [
        {
          name: 'VAT',
          colorByPoint: true,
          data: [
            {
              name: 'Input VAT',
              y: 74.77,
              sliced: true,
              selected: true,
            },
            {
              name: 'Output VAT',
              y: 12.82,
            },
            {
              name: 'VAT Payable',
              y: 4.63,
            },
          ],
        },
      ],
    };

    this.salesAnalyseChart = {
      chart: {
        type: 'areaspline',
        style: {
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
        },
      },
      title: {
        text: 'Sales Analysis',
        align: 'center',
      },
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        plotBands: [
          {
            from: 20000,
            to: 160000,
            color: 'rgba(68, 170, 213, .2)',
          },
        ],
      },
      yAxis: {
        title: {
          text: 'Amount',
        },
      },
      tooltip: {
        shared: true,
        headerFormat: '<b>{point.x}</b><br>',
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'Sales Amount',
          data: [
            22534, 23599, 24533, 25195, 25896, 27635, 29173, 32646, 25896,
            27635, 29173, 32646,
          ],
          color: '#2bb583',
        },
      ],
    };

    this.purchaseAnalyseChart = {
      chart: {
        type: 'areaspline',
        style: {
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
        },
      },
      title: {
        text: 'Purchase Analysis',
        align: 'center',
      },
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        plotBands: [
          {
            from: 1000000,
            to: 10000000,
            color: 'rgba(68, 170, 213, .2)',
          },
        ],
      },
      yAxis: {
        title: {
          text: 'Amount',
        },
      },
      tooltip: {
        shared: true,
        headerFormat: '<b>{point.x}</b><br>',
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'Purchase Amount',
          data: [
            222534, 213599, 214533, 2125195, 215896, 227635, 219173, 322646,
            25896, 10000000, 29173, 32646,
          ],
          color: '#544fc5',
        },
      ],
    };

    this.topSellingProductChart = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        style: {
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
        },
      },
      title: {
        text: 'Top Selling Product',
        align: 'center',
        margin: 20,
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'poPoppins',
          dataLabels: {
            enabled: false,
          },
          showInLegend: true,
        },
      },
      series: [
        {
          name: 'VAT',
          colorByPoint: true,
          data: [
            {
              name: 'Bakery',
              y: 74.77,
              sliced: true,
              selected: true,
            },
            {
              name: 'Pizza',
              y: 12.82,
            },
            {
              name: 'Yan Yan Kasath 10*50G',
              y: 4.63,
            },
            {
              name: 'Good day',
              y: 4.63,
            },
            {
              name: 'Jug',
              y: 4.63,
            },
          ],
        },
      ],
    };

    this.topSellingCustomerChart = {
      chart: {
        type: 'bar',
        style: {
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
        },
      },
      title: {
        text: 'Top Selling Customers',
        align: 'center',
      },
      xAxis: {
        categories: ['Anwin', 'Irshad', 'Sajeer', 'Yasir', 'Fasal'],
        title: {
          text: null,
        },
        gridLineWidth: 1,
        lineWidth: 0,
      },
      yAxis: {
        title: {
          text: 'Amount',
        },
        labels: {
          overflow: 'justify',
        },
        gridLineWidth: 0,
      },
      tooltip: {
        valueSuffix: ' millions',
      },
      plotOptions: {
        bar: {
          borderRadius: '50%',
          dataLabels: {
            enabled: true,
          },
          groupPadding: 0.1,
        },
      },

      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'Top Selling Customer',
          data: [631, 727, 3202, 721, 399],
        },
      ],
    };

    this.topSupplierChart = {
      chart: {
        type: 'bar',
        style: {
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
        },
      },
      title: {
        text: 'Top Suppliers',
        align: 'center',
      },
      xAxis: {
        categories: ['Supplier1', 'Supplier2', 'Supplier3', 'Supplier4', 'Supplier5'],
        title: {
          text: null,
        },
        gridLineWidth: 1,
        lineWidth: 0,
      },
      yAxis: {
        title: {
          text: 'Amount',
        },
        labels: {
          overflow: 'justify',
        },
        gridLineWidth: 0,
      },
      tooltip: {
        valueSuffix: ' millions',
      },
      plotOptions: {
        bar: {
          borderRadius: '50%',
          dataLabels: {
            enabled: true,
          },
          groupPadding: 0.1,
        },
      },

      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'Amount',
          data: [631, 727, 3202, 721, 399],
        },

        {
          name: 'Quantity',
          data: [34, 500, 600, 1000, 999],
        },
      ],
    };
  }

  ngOnInit(): void {}
}
