<template>
  <div></div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    axios({
      method: "get",
      url:
        "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1487380",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"16176170383872170715381761","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      console.log(res.data.data.films);
      console.log(res.data);
      this.datalist = res.data.data.films;
    });
  },
};
</script>

<style lang="scss">
</style>
