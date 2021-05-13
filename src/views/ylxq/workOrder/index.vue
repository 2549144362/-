<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="名称" prop="workName">
        <el-input
          v-model="queryParams.workName"
          placeholder="请输入名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="名称" prop="plandTime">
        <el-date-picker clearable size="small"
          v-model="queryParams.plandTime"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择名称">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="名称" prop="planConstructionPeriod">
        <el-input
          v-model="queryParams.planConstructionPeriod"
          placeholder="请输入名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="名称" prop="fkFileId">
        <el-input
          v-model="queryParams.fkFileId"
          placeholder="请输入名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="名称" prop="workType">
        <el-select v-model="queryParams.workType" placeholder="请选择名称" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="名称" prop="superiorId">
        <el-input
          v-model="queryParams.superiorId"
          placeholder="请输入名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="名称" prop="workPrincipal">
        <el-input
          v-model="queryParams.workPrincipal"
          placeholder="请输入名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="名称" prop="workSchedule">
        <el-input
          v-model="queryParams.workSchedule"
          placeholder="请输入名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="名称" prop="workPeroblem">
        <el-input
          v-model="queryParams.workPeroblem"
          placeholder="请输入名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="名称" prop="status">
        <el-select v-model="queryParams.status" placeholder="请选择名称" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="创建人" prop="createName">
        <el-input
          v-model="queryParams.createName"
          placeholder="请输入创建人"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="修改人" prop="updateName">
        <el-input
          v-model="queryParams.updateName"
          placeholder="请输入修改人"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['system:order:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['system:order:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['system:order:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:order:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="orderList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="修改人" align="center" prop="id" />
      <el-table-column label="名称" align="center" prop="workName" />
      <el-table-column label="名称" align="center" prop="plandTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.plandTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="名称" align="center" prop="planConstructionPeriod" />
      <el-table-column label="名称" align="center" prop="fkFileId" />
      <el-table-column label="名称" align="center" prop="workType" />
      <el-table-column label="名称" align="center" prop="superiorId" />
      <el-table-column label="名称" align="center" prop="workPrincipal" />
      <el-table-column label="名称" align="center" prop="workContent" />
      <el-table-column label="名称" align="center" prop="workSchedule" />
      <el-table-column label="名称" align="center" prop="workPeroblem" />
      <el-table-column label="名称" align="center" prop="status" />
      <el-table-column label="创建人" align="center" prop="createName" />
      <el-table-column label="修改人" align="center" prop="updateName" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:order:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:order:remove']"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改【请填写功能名称】对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="名称" prop="workName">
          <el-input v-model="form.workName" placeholder="请输入名称" />
        </el-form-item>
        <el-form-item label="名称" prop="plandTime">
          <el-date-picker clearable size="small"
            v-model="form.plandTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择名称">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="名称" prop="planConstructionPeriod">
          <el-input v-model="form.planConstructionPeriod" placeholder="请输入名称" />
        </el-form-item>
        <el-form-item label="名称" prop="fkFileId">
          <el-input v-model="form.fkFileId" placeholder="请输入名称" />
        </el-form-item>
        <el-form-item label="名称" prop="workType">
          <el-select v-model="form.workType" placeholder="请选择名称">
            <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="名称" prop="superiorId">
          <el-input v-model="form.superiorId" placeholder="请输入名称" />
        </el-form-item>
        <el-form-item label="名称" prop="workPrincipal">
          <el-input v-model="form.workPrincipal" placeholder="请输入名称" />
        </el-form-item>
        <el-form-item label="名称">
          <editor v-model="form.workContent" :min-height="192"/>
        </el-form-item>
        <el-form-item label="名称" prop="workSchedule">
          <el-input v-model="form.workSchedule" placeholder="请输入名称" />
        </el-form-item>
        <el-form-item label="名称" prop="workPeroblem">
          <el-input v-model="form.workPeroblem" placeholder="请输入名称" />
        </el-form-item>
        <el-form-item label="名称">
          <el-radio-group v-model="form.status">
            <el-radio label="1">请选择字典生成</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="创建人" prop="createName">
          <el-input v-model="form.createName" placeholder="请输入创建人" />
        </el-form-item>
        <el-form-item label="修改人" prop="updateName">
          <el-input v-model="form.updateName" placeholder="请输入修改人" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listOrder, getOrder, delOrder, addOrder, updateOrder, exportOrder } from "@/api/ylxq/order";
import Editor from '@/components/Editor';

export default {
  name: "Order",
  components: {
    Editor,
  },
  data() {
    return {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 【请填写功能名称】表格数据
      orderList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        workName: null,
        plandTime: null,
        planConstructionPeriod: null,
        fkFileId: null,
        workType: null,
        superiorId: null,
        workPrincipal: null,
        workContent: null,
        workSchedule: null,
        workPeroblem: null,
        status: null,
        createName: null,
        updateName: null,
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询【请填写功能名称】列表 */
    getList() {
      this.loading = true;
      listOrder(this.queryParams).then(response => {
        this.orderList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        id: null,
        workName: null,
        plandTime: null,
        planConstructionPeriod: null,
        fkFileId: null,
        workType: null,
        superiorId: null,
        workPrincipal: null,
        workContent: null,
        workSchedule: null,
        workPeroblem: null,
        status: 0,
        createName: null,
        createTime: null,
        updateName: null,
        updateTime: null
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加【请填写功能名称】";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getOrder(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改【请填写功能名称】";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateOrder(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addOrder(this.form).then(response => {
              this.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const ids = row.id || this.ids;
      this.$confirm('是否确认删除【请填写功能名称】编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delOrder(ids);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        })
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有【请填写功能名称】数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportOrder(queryParams);
        }).then(response => {
          this.download(response.msg);
        })
    }
  }
};
</script>
