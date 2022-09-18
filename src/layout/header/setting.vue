<template>
  <el-drawer v-model="isShowDrawer" title="页面配置" size="380px">
    <div class="setting-container">
      <el-form ref="form" :data="formData" label-align="left">
        <div class="setting-group-title">主题模式</div>
        <!-- <el-radio-group v-model="formData.mode">
          <div v-for="(item, index) in MODE_OPTIONS" :key="index" class="setting-layouel-drawer">
            <div>
              <el-radio-button :key="index" :value="item.type"></el-radio-button>
              <component :is="getModeIcon(item.type)" />
              </el-radio-button>
              <p :style="{ textAlign: 'center', marginTop: '8px' }">{{ item.text }}</p>
            </div>
          </div>
        </el-radio-group>
        <div class="setting-group-title">主题色</div>
        <el-radio-group v-model="formData.brandTheme">
          <div v-for="(item, index) in COLOR_OPTIONS.slice(0, COLOR_OPTIONS.length - 1)" :key="index"
            class="setting-layouel-drawer">
            <el-radio-button :key="index" :value="item" class="setting-layouel-color-group">
              <color-container :value="item" />
            </el-radio-button>
          </div>
          <div class="setting-layouel-drawer">
            <el-popup destroy-on-close expand-animation placement="bottom-right" trigger="click"
              :visible="isColoPickerDisplay" :overlay-style="{ padding: 0 }" @visible-change="onPopupVisibleChange">
              <template #content>
                <el-color-picker-panel :on-change="changeColor" :color-modes="['monochrome']" format="HEX"
                  :swatch-colors="[]" />
              </template>
              <el-radio-button :value="COLOR_OPTIONS[COLOR_OPTIONS.length - 1]"
                class="setting-layouel-color-group dynamic-color-btn">
                <color-container :value="COLOR_OPTIONS[COLOR_OPTIONS.length - 1]" />
              </el-radio-button>
            </el-popup>
          </div>
        </el-radio-group>

        <div class="setting-group-title">导航布局</div>
        <el-radio-group v-model="formData.layout">
          <div v-for="(item, index) in LAYOUT_OPTION" :key="index" class="setting-layouel-drawer">
            <el-radio-button :key="index" :value="item">
              <thumbnail :src="getThumbnailUrl(item)" />
            </el-radio-button>
          </div>
        </el-radio-group>

        <el-form-item v-show="formData.layout === 'mix'" label="分割菜单（混合模式下有效）" name="splitMenu">
          <el-switch v-model="formData.splitMenu" />
        </el-form-item>

        <div class="setting-group-title">元素开关</div>
        <el-form-item label="显示 Breadcrumbs" name="showBreadcrumb">
          <el-switch v-model="formData.showBreadcrumb" />
        </el-form-item>
        <el-form-item label="显示 Footer" name="showFooter">
          <el-switch v-model="formData.showFooter" />
        </el-form-item>
        <el-form-item label="使用 多标签Tab页" name="isUseTabsRouter">
          <el-switch v-model="formData.isUseTabsRouter"></el-switch>
        </el-form-item> -->
      </el-form>
      <div class="setting-info">
        <p>请复制后手动修改配置文件: /src/config/style.ts</p>
        <el-button theme="primary" variant="text" @click="handleCopy"> 复制配置项 </el-button>
      </div>
    </div>
  </el-drawer>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const isShowDrawer = ref(false);
onMounted(() => {
  console.log();
});
const showDrawer = () => {
  isShowDrawer.value = true;
};
defineExpose({
  showDrawer
});
</script>
<style lang="scss" scoped></style>
