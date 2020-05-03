<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="comments.length===0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item v-for="(comment,index) in comments" :key="index" :comment="comment" :delComment="delComment" :index="index"></Item>
    </ul>
  </div>
</template>

<script>
  import Item from './Item'
  export default {
    //声明接收对象：这个属性就成为组件对象的属性
    props:['comments','delComment'],   //只指定属性名
    components:{
      Item
    }
  }

</script>

<style>
  .reply {
    margin-top: 0px;
  }
</style>
