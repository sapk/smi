<template lang="pug">
  div(id="host-view")
   template(v-if="data && data[$route.params.id]")
     div(style="padding:20px")
      div(class="hostname") Host ID: {{ $route.params.id }}
      div(class="hostname") Hostname: {{data[$route.params.id].Host.Name}}
      div(class="hostname") Load: {{data[$route.params.id].Host.Proc.Misc.Avg}}
      div(class="hostname") Uptime: {{data[$route.params.id].Host.Proc.Misc.Uptime}}
     v-tabs(id="tabs")
       v-tabs-tabs
         v-tab(href="tabApps" selected) Applications
         v-tab(href="tabStorages") Storage
         v-tab(href="tabInterfaces") Interfaces
       v-tabs-items(class="white")
         v-tabs-item(id="tabApps")
           p {{data[$route.params.id].Host.Proc.Processes }}
           p {{data[$route.params.id].Host.Proc.Memory }}
         v-tabs-item(id="tabStorages")
           p {{data[$route.params.id].Host.Proc.DiskStats }}
           p {{data[$route.params.id].Host.Proc.FileSystem }}
         v-tabs-item(id="tabInterfaces")
           v-container(fluid style="padding:0 20px")
            v-row
             v-col(xs2 v-for="(interface, key) in data[$route.params.id].Host.Interfaces")
               v-card(style="margin-bottom:20px;")
                 v-card-row(class="blue-grey lighten-1")
                   v-card-title(class="white--text") {{interface.Info.Name}}
                   v-spacer
                   div(style="text-align: right;padding-top: 4px;")
                     v-btn(small) {{data[$route.params.id].Host.Proc.Network.List[interface.Info.Name].TransmitDiff.Bytes/8/(data[$route.params.id].Host.Proc.Processes.Time-data[$route.params.id].Host.Proc.Processes.TimePrev) | FileSize}}/s
                       v-icon(right) cloud_upload
                     v-btn(small) {{data[$route.params.id].Host.Proc.Network.List[interface.Info.Name].ReceiveDiff.Bytes/8/(data[$route.params.id].Host.Proc.Processes.Time-data[$route.params.id].Host.Proc.Processes.TimePrev) | FileSize}}/s
                       v-icon(right) cloud_download
                 v-card-text
                   v-card-row(height="25px" style="min-height: 2rem;")
                     v-icon(class="mr-1") memory
                     div
                       div {{interface.Info.HardwareAddr | ByteArray | Mac}}
                   br
                   v-card-row(height="25px" style="min-height: 2rem;" v-for="(ip, key) in interface.Addrs")
                     v-icon(class="mr-1") language
                     div(class="ip-addr")
                         div {{ip.IP}}/{{ip.Mask | ByteArray | Mask}}
                   div(v-if="false") {{interface}}
   template(v-else)
     div(style="padding:20px") Loading ...
</template>

<script>
  import filesize from 'filesize'
  export default {
    props: {
      data: Object
    },
    filters: {
      ByteArray: function (array) {
        if (!array) return -1

        var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var pow = 1;
        var val = 0;
        //console.log("Analyze binArray", array)
        var reverseArr = array.split("").reverse().join("");//Reverse before low bit @ right
        for(var i in reverseArr){
            var id = b64.indexOf(reverseArr[i])
            if(id == 64){
              //console.log("Skipping =")
              continue //Skip =
            }
            val += id*pow
            //console.log("debug", reverseArr[i], b64.indexOf(reverseArr[i]), val, pow)
            pow *= 64
        }
        //console.log("Returning : ",val)
        return val
      },
      FileSize: function (val) {
        return filesize(val, {bits: true});
      },
      Mac: function (val) {
        if (val==-1) return ''

        var mac = val.toString(16);
        var ret = mac.slice(0, 2);
        for(var i=1;i<=5;i++){
          ret += ":"+mac.slice(2*i, 2*i+2);
        }
        return ret
      },
      MaskShort: function (val) { //TODO
        var i = 32;
        while(val%Math.pow(2,i)!=0 && i > 0){
          i--;
        }
        return i;
      },
      Mask: function (val) {
        if (val==-1) return ''
        val=val/16
        var ret = [];
        if(Math.pow(256,4)>val){
          for(var i=3;i>=0;i--){
            var pow = Math.pow(256,i)
            ret[i] = Math.floor(val/pow);
//            console.log("Debug", val, pow, Math.floor(val/pow), val/pow)
            val = val - ret[i]*pow
          }
        }else{  //TODO
            for(var i=15;i>=0;i--){
              var pow = Math.pow(256,i)
              ret[i] = Math.floor(val/pow);
//              console.log("Debug", val, pow, Math.floor(val/pow), val/pow)
              val = val - ret[i]*pow
            }
        }
        return ret.reverse().join(".")
      }

    },
    data () {
     return {};
    },
    updated () { //Should be also triggered when switching to a other host view
      this.$emit('view', this.meta())
    },
    mounted () {
      this.$emit('view', this.meta())
    },
    preFetch () {
      return this.methods.meta()
    },
    methods: {
      meta () {
        var name = this.$route.params.id;
        if(this.$data.data && this.$data.data[$route.params.id]){
          name = this.$data.data[$route.params.id].Host.Name
        }
        return {
          title: "Host "+name+" | Simple Monitor Interface",
          page_title: "Host "+name,
          page_title_style: "font-size:2rem;"
        }
      }
    }
  }
</script>

<style>
.ip-addr{
  max-width: 87%;
}
.ip-addr>div{
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.tabs__item p{
  word-break: break-all;
}

#tabInterfaces .card .btn{
  font-size: 75%;
  padding: 0 8px;
  margin-left: 24px;
}
 #tabInterfaces .card .btn i{
  font-size: 1.2rem;
  margin-left: 6px;
}
</style>
