# dsh-plugin-organizer（插件收纳/分组）

一个 DSH Web 客户端插件：把「设置 → 插件」的插件列表变成 **官方 / 第三方分组视图**，每组可以 **展开 / 折叠**（像收纳盒一样）。官方插件默认折叠（因为数量太多），第三方插件默认展开。

<div align="center">
  🌏 <a href="./README.md"><b>中文</b></a> · <a href="./README_EN.md">English</a>
</div>

<div align="center">
  <code>官方/第三方</code> <code>展开/折叠</code> <code>搜索</code> <code>状态点</code><br />
  纯客户端插件 · 不修改 DSH 源码 · 官方 CLI 一键安装
</div>
<br>

> ⭐ **如果这个插件帮到了你，欢迎点个 Star 支持一下！** 你的 Star 是我持续维护的动力 🙏
> 
> ⭐ **If this plugin helped you, please give it a Star!** Your support keeps me improving it 🙏

<!--
## 截图

![分组收纳标签页](assets/screenshot-grouped-tab.png)
-->

<div align="center">
  <img width="820" alt="官方/第三方分组收纳标签页" src="assets/screenshot-grouped-tab.png" />
</div>

## 功能

- 在「设置 → 插件」分区新增一个标签页 **官方/第三方**（排在「插件配置」和「插件列表」之间）
- 数据源与官方「插件列表」完全一致（`pluginInventory` Remote），只改展示方式
- 官方判定：模块名以 `@deepseek-ai/` 开头，或以 `cordis:` 开头（root include 等框架内置）
- 两组：**官方插件** 默认折叠，**第三方插件** 默认展开
- 组头显示组名 + 数量，点击组头展开/折叠
- 「全部展开 / 全部折叠」工具栏按钮
- 搜索框跨两组过滤；搜索时自动展开两组
- 每张插件卡片与官方列表一致：标题、状态点、启用/停用标签，点卡片可展开 entryId / 配置状态 / Cordis 状态

## 安装（从 GitHub / npm）

**前置**：已装好 DSH（`dsh web` 能正常运行），Node.js ≥ 20、pnpm ≥ 10。

```sh
# 从 GitHub 仓库安装（自动挂载，无需手动改配置）
dsh plugin --profile web add <user>/dsh-plugin-organizer

# 或从 npm 安装
dsh plugin --profile web add dsh-plugin-organizer
```

装完**重启 DSH 并硬刷新**（Cmd/Ctrl+Shift+R）即可看到新的「官方/第三方」标签页。

> 说明：包内声明了 `dsh.bundle.patch`（`cordis.patch.yml`），`dsh plugin add` 会自动把它注册进
> `dsh.profile.bundles`。若你的 profile 之前手动挂载过本插件（在 `cordis.patch.yml` 里有
> `id: plugin-organizer` 的行），请先删掉那行，避免双挂载（出现两个插件标签页）。

## 项目结构

```
dsh-plugin-organizer/
├── package.json          # dsh.bundle.patch + dsh.client 声明
├── cordis.patch.yml      # bundle 挂载层（insert 插件行）
├── lib/
│   ├── index.js          # host 半区（空 apply）
│   ├── invariant.js      # invariant 伴生
│   └── client.js         # 浏览器半区：分组收纳标签页
└── README.md
```

## 工作原理

- 纯客户端插件：`lib/index.js` 是空 host 半区，`lib/client.js` 是浏览器半区
- 通过 `settings.plugins.tab` 插槽注册新标签页（id `grouped`，order 5）
- 复用 `ctx.remote.pluginInventory.list()` 读取与官方列表相同的数据
- 不修改 DSH 源码，只作为独立包被 profile 引用

## 开发

本地开发时把插件作为依赖装进 web profile，并在 profile 的 `cordis.patch.yml` 挂载：

```yaml
- insert:
    - id: plugin-organizer
      name: 'dsh-plugin-organizer'
```

profile 的用户补丁层会被运行中的 DSH 热加载，改 `lib/client.js` 后刷新浏览器即可看到效果。

## License

MIT
