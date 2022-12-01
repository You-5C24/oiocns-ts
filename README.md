<img width="1060" alt="image" src="https://user-images.githubusercontent.com/8328012/201800690-9f5e989e-4ed3-4817-85b9-b594ac89fd31.png">  
此工程为奥集能平台通用SDK，API提供机制按领域来划分，采用领域模型来提供能力。各领域下有唯一开放模型，比较base目录下为字典模型，基下唯一开放模型为BaseModel，所有字典相关接口均由BaseModel来提供，此类继续了BaseModelApi能力抽象类，此能力抽象类，目前为BaseModel提供原子性后台请求调用接口，所有能力的封装由BaseModel进行粘合并统一提供。

# 项目目录

```
└── core                                 // 核心API
    ├── base                             // 字典模型
        ├── index.ts                     // 字典模型开放入口（每个模型下，统一出口能力文件）
    ├── chat                             // 字典模型
    ├── context                          // 会话登录相关模型
    ├── market                           // 市场模型
    ├── target                           // 职权模型
    ├── thing                            // 物模型    	 
├── util                                 // 工具库
├── types                                // 声明文件
```

## 协同开发步骤

### 1.登录https://www.npmjs.com/注册账号

### 2.将账号发给仓库管理员，进行组织邀请

### 3.版本发布
`npm publish --access public`


## git规范

1. 命名要求：
   1.1 统一前缀-姓名缩写-描述及日期。如 增加XX功能 `feature/lw/addmain1101`
   1.2 分支名称前缀如下

- common：调整通用组件、通用功能、通用数据接口、通用样式等
- feature：新功能
- fix：bug修复
- hotfix：线上紧急修复
- perf：性能优化
- other：配置信息调整等非上面5种的改动改动

1. 迭代要求：
   2.1 `main` 分支为主干，所有迭代基于此分支进行获取
   2.2 所有新功能迭代，问题修复等，需要进行发布，需要提交 `PR` 请求到 `main` 分支。
   2.3 待系统上线后会拉出 `test` ,后续迭代与 `ISSUE`中问题进行关联的模式


