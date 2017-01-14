import { Pie } from 'vue-chartjs'
import filesize from 'filesize'

export default Pie.extend({
  props: {
      used: {
        default: 0,
        type: Number
      },
      available: {
        default: 0,
        type: Number
      }
  },
  mounted () {
    //console.log("Pie",this)
    this.renderChart({
      labels: ['Used', 'Available'],
      datasets: [
        {
          backgroundColor: [
            '#ffe57f',
            '#80d8ff',
          ],
          data: [this.used,this.available]
        }
      ]
    }, {responsive: false, maintainAspectRatio: false, tooltips: {
      callbacks : {
        label: function(item, data){
          //console.log("label",item,data,data.datasets[item.datasetIndex],data.datasets[item.datasetIndex].data[item.index])
          return data.labels[item.index]+": "+filesize(data.datasets[item.datasetIndex].data[item.index]/8, {bits: true})
        }
      }
    }});

    var self = this;
    this.$watch('used', function (data) {
      console.log("Pie updated",self.used,self.available,self._chart)
      self._chart.data.datasets[0].data[0] = self.used;
      self._chart.data.datasets[0].data[1] = self.available;
      self._chart.update();
    })
    this.$watch('available', function (data) {
      console.log("Pie updated",self.used,self.available,self._chart)
      self._chart.data.datasets[0].data[0] = self.used;
      self._chart.data.datasets[0].data[1] = self.available;
      self._chart.update();
    })
  },
  updated (self) {
    console.log("Pie updated",self.used,self.available,self._chart)
    self._chart.data.datasets[0].data[0] = self.used;
    self._chart.data.datasets[0].data[1] = self.available;
    self._chart.update(); // Calling update now animates the position of March from 90 to 50.
  }
})
