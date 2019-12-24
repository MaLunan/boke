<template>
  <div>
    <a-table bordered :dataSource="data" :columns="columns">
      <template slot="operation" slot-scope="text, record">
        <a-popconfirm
          v-if="data.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record.key)"
        >
          <a href="javascript:;">Delete</a>
        </a-popconfirm>
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
            key: '0',
            name: 'Edward King 0',
            age: '32',
            address: 'London, Park Lane no. 0',
          },
          {
            key: '1',
            name: 'Edward King 1',
            age: '32',
            address: 'London, Park Lane no. 1',
          },
        ],
        count: 2,
        columns: [
          {
            title: 'name',
            dataIndex: 'name',
            width: '30%',
            scopedSlots: { customRender: 'name' },
          },
          {
            title: 'age',
            dataIndex: 'age',
          },
          {
            title: 'address',
            dataIndex: 'address',
          },
          {
            title: 'operation',
            dataIndex: 'operation',
            scopedSlots: { customRender: 'operation' },
          },
        ],
      };
    },
    methods: {
      onDelete(key) {
        const data = [...this.data];
        this.data = data.filter(item => item.key !== key);
      },
     
    },
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
