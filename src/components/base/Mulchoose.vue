<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li v-for="(item, index) in selections" @click="toggleSelection(index)" :title="item.label" :class="{active: checkActive(index)}">{{ item.label }}</li>
    </ul>
  </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  props: {
    selections: {
      type: Array,
      default: [{
        label: 'test',
        value: 0
      }]
    }
  },
  data() {
    return {
      nowIndexes: [0]
    }
  },
  methods: {
    toggleSelection(index) {
      // indexOf 没有返回 -1
      if(this.nowIndexes.indexOf(index) === -1) {
        this.nowIndexes.push(index);
      } else {
        // idx 原数组中的每一项 返回不等于当前index的其他项
        this.nowIndexes = _.remove(this.nowIndexes, (idx) => {
          return idx !== index;
        })
      }
      let nowObjArray = _.map(this.nowIndexes, (idx) => {
        return this.selections[idx]
      })
      this.$emit('on-change', nowObjArray)
    },
    checkActive(index) {
      // 当前数组中有对应的值不等于 -1 true
      return this.nowIndexes.indexOf(index) !== -1;
    }
  }
}
</script>

<style scoped>
chooser-component {
  position: relative;
  display: inline-block;
}

.chooser-list li {
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}

.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>