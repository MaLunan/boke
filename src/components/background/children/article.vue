<template>
  <div>
    <a-button class="editable-add-btn" @click="handleAdd">发布文章</a-button>
        <a-table :columns="columns" :dataSource="data" bordered>
      
      <!--========编辑框============ -->
      <template
        v-for="col in ['name', 'username', 'date','category']"
        :slot="col"
        slot-scope="text, record, index"
      >
        <div :key="col">
          <a-input
            v-if="record.editable"
            style="margin: -5px 0"
            :value="text"
            @change="e => handleChange(e.target.value, record.key, col)"
          />
          <template v-else>{{text}}</template>
        </div>
      </template>
      <template slot="updata" slot-scope="text, record, index">
        <div class="editable-row-operations">
          <span v-if="record.editable">
            <a @click="() => save(record.key)">确定</a>
            <a-popconfirm title="确定要取消么?" @confirm="() => cancel(record.key)">
              <a>取消</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a @click="() => edit(record.key)">修改</a>
          </span>
        </div>
      </template>
      <!-- === 点击=详情.id== -->
      <template slot="details" slot-scope="text, record">
          <a @click="ondetails(record.id)">查看详情</a>
      </template>
      <!-- =删除=== -->
      <template slot="operation" slot-scope="text, record">
        <a-popconfirm
          v-if="data.length"
          title="确定要删除么?"
          @confirm="() => onDelete(record.key)"
        >
          <a href="javascript:;">删除</a>
        </a-popconfirm>
      </template>
      <!-- ===============搜索功能================ -->
      <div
      slot="filterDropdown"
      slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
      style="padding: 8px"
    >
      <!-- 搜索框 -->
      <a-input
        v-ant-ref="c => searchInput = c"
        :placeholder="`搜索 ${column.title}`"
        :value="selectedKeys[0]"
        @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
        @pressEnter="() => handleSearch(selectedKeys, confirm)"
        style="width: 188px; margin-bottom: 8px; display: block;"
      />
      <!-- 搜索按钮 -->
      <a-button
        type="primary"
        @click="() => handleSearch(selectedKeys, confirm)"
        icon="search"
        size="small"
        style="width: 90px; margin-right: 8px"
      >搜索</a-button>
      <!-- 重置按钮 -->
      <a-button @click="() => handleReset(clearFilters)" size="small" style="width: 90px">重置</a-button>
    </div>
    <!-- 图标切换 -->
    <a-icon
      slot="filterIcon"
      slot-scope="filtered"
      type="search"
      :style="{ color: filtered ? '#108ee9' : undefined }"
    />
    <!-- 搜索结果push -->
    <template slot="customRender" slot-scope="text">
      <span v-if="searchText">
        <template
          v-for="(fragment, i) in text.toString().split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
        >
          <mark
            v-if="fragment.toLowerCase() === searchText.toLowerCase()"
            :key="i"
            class="highlight"
          >{{fragment}}</mark>
          <template v-else>{{fragment}}</template>
        </template>
      </span>
      <template v-else>{{text}}</template>
    </template>

    </a-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          key: "0",
          name: "标题",
          username: "Ma_lunan",
          date: "admin",
          category:'个人随笔',
          id:'012',
        },
        {
          key: "1",
          name: "Edward King 1",
          username: "admin",
          date: "London, Park Lane no. 1"
        }
      ],
      count: 2,
      columns: [
        {
          title: "标题",
          dataIndex: "name",
          width: "20%",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "name"
          },
          onFilter: (value, record) =>
            record.name
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              }, 0);
            }
          }
        },
        {
          title: "博主",
          dataIndex: "username",
          width: "20%",
        },
        {
          title: "发布日期",
          dataIndex: "date",
          width: "10%",
        },
        {
          title: "分类",
          dataIndex: "category",
          width: "10%",
          scopedSlots: { customRender: "category" }
        },
        {
            title: '修改',
            dataIndex: 'updata',
             width: "10%",
            scopedSlots: { customRender: 'updata' },
        },
        {
          title: "详情",
          dataIndex: "details",
          width: "10%",
          scopedSlots: { customRender: "details" }
        },
        {
          title: "删除",
          dataIndex: "operation",
          width:"10%",
          scopedSlots: { customRender: "operation" }
        },
        
      ]
    };
  },
  methods: {
    onDelete(key) {
      const data = [...this.data];
      this.data = data.filter(item => item.key !== key);
    },
    handleAdd() {
       this.$router.push({name:'setarticle'})
      
    },
    //==========详情==========
    ondetails(key){
        console.log(key)
    },
//======搜索=========
handleSearch(selectedKeys, confirm) {
      confirm();
      this.searchText = selectedKeys[0];
    },

    handleReset(clearFilters) {
      clearFilters();
      this.searchText = "";
    },

    //==================
     handleChange(value, key, column) {
        const newData = [...this.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
          target[column] = value;
          this.data = newData;
        }
      },
      edit(key) {
        const newData = [...this.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
          target.editable = true;
          this.data = newData;
        }
      },
      save(key) {
        const newData = [...this.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
          delete target.editable;
          this.data = newData;
          this.cacheData = newData.map(item => ({ ...item }));
        }
      },
      cancel(key) {
        const newData = [...this.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
          Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
          delete target.editable;
          this.data = newData;
        }
      },
  },
  mounted(){
       this.$store.commit('crumbs',{
          one:'文章管理',
          tow:'',
          })
  }
};
</script>
<style>
.editable-cell {
  position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
}

.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
}

.editable-cell-icon {
  line-height: 18px;
  display: none;
}

.editable-cell-icon-check {
  line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}

.editable-add-btn {
  margin-bottom: 8px;
}
</style>
