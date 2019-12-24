<template>
  <a-table bordered :dataSource="data" :columns="columns">
    <template slot="operation" slot-scope="text, record">
      <a-popconfirm v-if="data.length" title="是否删除?" @confirm="() => onDelete(record.key)">
        <a href="javascript:;">删除</a>
      </a-popconfirm>
    </template>

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
</template>

<script>
const data = [
  {
    key: "1",
    name: "超级管理员",
    user: "admin",
    password: "123456",
    email: "723325701@qq.com",
    RegistrationTime: "2019-10-21", //注册时间
    phone: 17664077588
  },
  {
    key: "2",
    name: "超级管理员",
    user: "adaa",
    password: "123456",
    email: "723325701@qq.com",
    RegistrationTime: "2019-10-21", //注册时间
    phone: 17664077588
  },
  {
    key: "3",
    name: "超级管理员",
    user: "advvn",
    password: "123456",
    email: "723325701@qq.com",
    RegistrationTime: "2019-10-21", //注册时间
    phone: 17664077588
  },
  {
    key: "4",
    name: "超级管理员",
    user: "accc",
    password: "123456",
    email: "723325701@qq.com",
    RegistrationTime: "2019-10-21", //注册时间
    phone: 17664077588
  }
];

export default {
  data() {
    return {
      data,
      searchText: "", //搜索值
      searchInput: null,
      columns: [
        {
          title: "账号昵称",
          dataIndex: "name",
          key: "name",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender"
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
          title: "账号",
          dataIndex: "user",
          key: "账号",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender"
          },
          //搜索
          onFilter: (value, record) =>
            record.user
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          }
        },
        {
          title: "密码",
          dataIndex: "password",
          key: "password",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender"
          },
          onFilter: (value, record) =>
            record.password
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          }
        },
        {
          title: "邮箱",
          dataIndex: "email",
          key: "email",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender"
          },
          onFilter: (value, record) =>
            record.email
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          }
        },
        {
          title: "注册时间",
          dataIndex: "RegistrationTime",
          key: "RegistrationTime",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender"
          },
          onFilter: (value, record) =>
            record.RegistrationTime.toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          }
        },
        {
          title: "删除",
          dataIndex: "operation",
          scopedSlots: { customRender: "operation" }
        }
      ]
    };
  },
  methods: {
    handleSearch(selectedKeys, confirm) {
      confirm();
      this.searchText = selectedKeys[0];
    },

    handleReset(clearFilters) {
      clearFilters();
      this.searchText = "";
    },
    onDelete(key) {
      //删除
      const data = [...this.data];
      this.data = data.filter(item => item.key !== key);
    }
  }
};
</script>
<style scoped>
.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}
</style>
