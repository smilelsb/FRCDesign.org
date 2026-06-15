// Sidebar configuration for each main navigation section
// Maps navbar routes to their specific sidebar items

export type SidebarItem = {
  label: string;
  slug?: string;
  items?: SidebarItem[];
  collapsed?: boolean;
};

export type SidebarSection = {
  label: string;
  items: SidebarItem[];
};

// Define which URL paths belong to which sidebar section
export const sidebarSections: Record<string, SidebarSection[]> = {
  // Home page - minimal sidebar or none
  '/': [],

  // Feature Guide section
  '/feature-guide': [
    {
      label: 'Website Feature Guide',
      items: [
        { label: 'Overview', slug: 'feature-guide' },
      ],
    },
  ],

  // 添加中文版本 Feature Guide section
  '/zh/feature-guide': [
    {
      label: '网站功能指南',
      items: [
        { label: '概览', slug: 'zh/feature-guide' },
      ],
    },
  ],
  
  // Learning Course section
  '/learning-course': [
    {
      label: 'Learning Course',
      items: [
        { label: 'Overview', slug: 'learning-course' },
        {
          label: 'Course Setup',
          collapsed: true,
          items: [
            { label: 'New to CAD', slug: 'learning-course/course-setup/new-to-cad' },
            {
              label: 'New to Onshape',
              collapsed: true,
              items: [
                { label: 'Account Setup', slug: 'learning-course/course-setup/new-to-onshape/account-setup' },
                { label: 'Performance Tuning', slug: 'learning-course/course-setup/new-to-onshape/performance-tuning' },
                { label: 'Documents Page', slug: 'learning-course/course-setup/new-to-onshape/documents-page' },
              ],
            },
            {
              label: 'Required Course Tools',
              collapsed: true,
              items: [
                { label: 'Part Library', slug: 'learning-course/course-setup/required-course-tools/part-library' },
                { label: 'Custom Features', slug: 'learning-course/course-setup/required-course-tools/featurescripts' },
              ],
            },
          ],
        },
        {
          label: 'Stage 1',
          collapsed: true,
          items: [
            { label: 'Course Introduction', slug: 'learning-course/stage1/introduction' },
            { label: 'Focusing on Improvement', slug: 'learning-course/stage1/1a/focusing-on-improvement' },
            {
              label: 'A: Onshape Fundamentals',
              collapsed: true,
              items: [
                {
                  label: 'Section 1: Part Studio Fundamentals',
                  collapsed: true,
                  items: [
                    { label: 'Intro & Setup', slug: 'learning-course/stage1/1a/section1-setup' },
                    { label: 'Exercise 0: Navigation', slug: 'learning-course/stage1/1a/section1-exercise0' },
                    { label: 'Exercise 1: First Tubes', slug: 'learning-course/stage1/1a/section1-exercise1' },
                    { label: 'Exercise 2: More Tubes', slug: 'learning-course/stage1/1a/section1-exercise2' },
                    { label: 'Exercise 3: Sketch Basics', slug: 'learning-course/stage1/1a/section1-exercise3' },
                    { label: 'Exercise 4: Drivetrain Frame', slug: 'learning-course/stage1/1a/section1-exercise4' },
                    { label: 'Exercise 5: Box Frame', slug: 'learning-course/stage1/1a/section1-exercise5' },
                    { label: 'Exercise 6: Triangle Frame', slug: 'learning-course/stage1/1a/section1-exercise6' },
                  ],
                },
                {
                  label: 'Section 2: Plates',
                  collapsed: true,
                  items: [
                    { label: 'Exercise 1: Plate Workflow', slug: 'learning-course/stage1/1a/section2-exercise1' },
                    { label: 'Exercise 2: Gusset', slug: 'learning-course/stage1/1a/section2-exercise2' },
                    { label: 'Exercise 3: Superstructure Gussets & Plate', slug: 'learning-course/stage1/1a/section2-exercise3' },
                    { label: 'Exercise 4: Motor Mounting', slug: 'learning-course/stage1/1a/section2-exercise4' },
                  ],
                },
                {
                  label: 'Section 3: Assemblies',
                  collapsed: true,
                  items: [
                    { label: 'Exercise 1: Rivets', slug: 'learning-course/stage1/1a/section3-exercise1' },
                    { label: 'Exercise 2: Swerve Drive', slug: 'learning-course/stage1/1a/section3-exercise2' },
                    { label: 'Exercise 3: Gusset Setup', slug: 'learning-course/stage1/1a/section3-exercise3' },
                    { label: 'Exercise 4: Full Frame', slug: 'learning-course/stage1/1a/section3-exercise4' },
                    { label: 'Exercise 5: Finishing the Frame', slug: 'learning-course/stage1/1a/section3-exercise5' },
                  ],
                },
              ],
            },
            {
              label: 'B: Power Transmissions',
              collapsed: true,
              items: [
                { label: 'Introduction', slug: 'learning-course/stage1/1b/introduction' },
                { label: 'Motors', slug: 'learning-course/stage1/1b/motors' },
                { label: 'Shafts and Bearings', slug: 'learning-course/stage1/1b/shafts-bearings' },
                { label: 'Torque and Speed', slug: 'learning-course/stage1/1b/torque-speed' },
                { label: 'Gear Basics', slug: 'learning-course/stage1/1b/gears' },
                { label: 'Exercise 1: Simple Gearbox', slug: 'learning-course/stage1/1b/exercise1' },
                { label: 'Exercise 2: Two Stage Gearbox', slug: 'learning-course/stage1/1b/exercise2' },
                { label: 'Belt and Pulley Basics', slug: 'learning-course/stage1/1b/belts' },
                { label: 'Chain and Sprocket Basics', slug: 'learning-course/stage1/1b/chain' },
                { label: 'Exercise 3: Gear and Belt Gearbox', slug: 'learning-course/stage1/1b/exercise3' },
                { label: 'Summary', slug: 'learning-course/stage1/1b/summary' },
              ],
            },
            {
              label: 'C: Practice Mechanisms',
              collapsed: true,
              items: [
                { label: 'Introduction', slug: 'learning-course/stage1/1c/introduction' },
                { label: 'Exercise Overview', slug: 'learning-course/stage1/1c/exercise-overview' },
                { label: 'Exercise 1: Flat Intake', slug: 'learning-course/stage1/1c/exercise1' },
                { label: 'Exercise 2: Dead Axle Rollers', slug: 'learning-course/stage1/1c/exercise2' },
                { label: 'Exercise 3: Shooter', slug: 'learning-course/stage1/1c/exercise3' },
                { label: 'Exercise 4: Telescoping Hook', slug: 'learning-course/stage1/1c/exercise4' },
                { label: 'Exercise 5: Flipped Gearbox', slug: 'learning-course/stage1/1c/exercise5' },
                { label: 'Exercise 6: Direction Swap', slug: 'learning-course/stage1/1c/exercise6' },
                { label: 'Exercise 7: Vertical Rollers', slug: 'learning-course/stage1/1c/exercise7' },
                { label: 'Exercise 8: Indexer Centering', slug: 'learning-course/stage1/1c/exercise8' },
                { label: 'Summary', slug: 'learning-course/stage1/1c/summary' },
              ],
            },
            {
              label: 'D: Design Methodology',
              collapsed: true,
              items: [
                { label: 'Introduction', slug: 'learning-course/stage1/1d/introduction' },
                { label: 'Top Down Design', slug: 'learning-course/stage1/1d/top-down-design' },
                { label: 'Project Overview', slug: 'learning-course/stage1/1d/project-overview' },
                { label: 'Layout Sketch', slug: 'learning-course/stage1/1d/layout-sketch' },
                { label: 'Part Studio', slug: 'learning-course/stage1/1d/part-modeling' },
                { label: 'Assembly', slug: 'learning-course/stage1/1d/assembly-modeling' },
                { label: 'Adding More Components', slug: 'learning-course/stage1/1d/adding-components' },
                { label: 'Top Level Assembly', slug: 'learning-course/stage1/1d/top-level-assembly' },
                { label: 'Summary', slug: 'learning-course/stage1/1d/summary' },
              ],
            },
            {
              label: 'E: Subsystem Workflow',
              collapsed: true,
              items: [
                { label: 'Introduction', slug: 'learning-course/stage1/1e/introduction' },
                { label: 'Project Overview', slug: 'learning-course/stage1/1e/project-overview' },
                { label: 'Battery Mounting', slug: 'learning-course/stage1/1e/battery-mounting' },
                { label: 'Exercise 1: Battery Holder', slug: 'learning-course/stage1/1e/exercise1' },
                { label: 'Electronics', slug: 'learning-course/stage1/1e/electronics' },
                { label: 'Exercise 2: Mounting Electronics', slug: 'learning-course/stage1/1e/exercise2' },
                { label: 'Exercise 3: Bellypan Pocketing', slug: 'learning-course/stage1/1e/exercise3' },
                { label: 'Exercise 4: Bumpers', slug: 'learning-course/stage1/1e/exercise4' },
                { label: 'Exercise 5: Bumper Mounting', slug: 'learning-course/stage1/1e/exercise5' },
                { label: 'Review & Summary', slug: 'learning-course/stage1/1e/review-summary' },
              ],
            },
          ],
        },
        {
          label: 'Stage 2',
          collapsed: true,
          items: [
            {
              label: 'A: Basic Shooter',
              collapsed: true,
              items: [
                { label: 'Introduction', slug: 'learning-course/stage2/2a/introduction' },
                { label: 'Project Overview', slug: 'learning-course/stage2/2a/project-overview' },
                {
                  label: 'Engineering Concepts',
                  collapsed: true,
                  items: [
                    { label: 'Structure Rigidity', slug: 'learning-course/stage2/2a/structure-rigidity' },
                    { label: 'Ball Trajectory', slug: 'learning-course/stage2/2a/ball-trajectory' },
                    { label: 'Exit Velocity', slug: 'learning-course/stage2/2a/exit-velocity' },
                    { label: 'Compression & Wrap', slug: 'learning-course/stage2/2a/compression-wrap' },
                    { label: 'Spin Control', slug: 'learning-course/stage2/2a/spin-control' },
                    { label: 'Friction & Efficiency', slug: 'learning-course/stage2/2a/friction-efficiency' },
                  ],
                },
                { label: 'Layout Sketch', slug: 'learning-course/stage2/2a/layout-sketch' },
                { label: 'Part Studio', slug: 'learning-course/stage2/2a/part-studio' },
                { label: 'Assembly', slug: 'learning-course/stage2/2a/assembly' },
                { label: 'Summary', slug: 'learning-course/stage2/2a/summary' },
              ],
            },
            {
              label: 'B: Dead Axle Pivot',
              collapsed: true,
              items: [
                { label: 'Introduction', slug: 'learning-course/stage2/2b/introduction' },
                { label: 'Project Overview', slug: 'learning-course/stage2/2b/project-overview' },
                {
                  label: 'Engineering Concepts',
                  collapsed: true,
                  items: [
                    { label: 'Strength', slug: 'learning-course/stage2/2b/strength' },
                    { label: 'Friction', slug: 'learning-course/stage2/2b/friction' },
                    { label: 'Power Transmission', slug: 'learning-course/stage2/2b/power-transmission' },
                    { label: 'Tensioning', slug: 'learning-course/stage2/2b/tensioning' },
                    { label: 'Backlash', slug: 'learning-course/stage2/2b/backlash' },
                  ],
                },
                { label: 'Layout Sketch', slug: 'learning-course/stage2/2b/layout-sketch' },
                { label: 'Part Studio', slug: 'learning-course/stage2/2b/part-studio' },
                { label: 'Assembly', slug: 'learning-course/stage2/2b/assembly' },
                { label: 'Summary', slug: 'learning-course/stage2/2b/summary' },
              ],
            },
            {
              label: 'C: Slapdown Intake',
              collapsed: true,
              items: [
                { label: 'Introduction', slug: 'learning-course/stage2/2c/introduction' },
                { label: 'Project Overview', slug: 'learning-course/stage2/2c/project-overview' },
                {
                  label: 'Engineering Concepts',
                  collapsed: true,
                  items: [
                    { label: 'Intake Golden Rules', slug: 'learning-course/stage2/2c/intake-golden-rules' },
                    { label: 'Robustness', slug: 'learning-course/stage2/2c/robustness' },
                    { label: 'Pivot', slug: 'learning-course/stage2/2c/pivot' },
                    { label: 'Rollers', slug: 'learning-course/stage2/2c/rollers' },
                    { label: 'Zombie Axles', slug: 'learning-course/stage2/2c/zombie-axles' },
                  ],
                },
                { label: 'Layout Sketch', slug: 'learning-course/stage2/2c/layout-sketch' },
                { label: 'Part Studio', slug: 'learning-course/stage2/2c/part-studio' },
                { label: 'Assembly', slug: 'learning-course/stage2/2c/assembly' },
                { label: 'Summary', slug: 'learning-course/stage2/2c/summary' },
              ],
            },
            {
              label: 'D: Cascade Elevator',
              collapsed: true,
              items: [
                { label: 'Introduction', slug: 'learning-course/stage2/2d/introduction' },
                { label: 'Project Overview', slug: 'learning-course/stage2/2d/project-overview' },
                {
                  label: 'Engineering Concepts',
                  collapsed: true,
                  items: [
                    { label: 'Elevator Blocks', slug: 'learning-course/stage2/2d/elevator-blocks' },
                    { label: 'Chain Attachment', slug: 'learning-course/stage2/2d/chain-attachment' },
                    { label: 'Rigging', slug: 'learning-course/stage2/2d/rigging' },
                    { label: 'Cable Clamp', slug: 'learning-course/stage2/2d/cable-clamp' },
                    { label: 'Cable Ends', slug: 'learning-course/stage2/2d/cable-ends' },
                    { label: 'Gearbox', slug: 'learning-course/stage2/2d/drive-system' },
                  ],
                },
                { label: 'Layout Sketch', slug: 'learning-course/stage2/2d/layout-sketch' },
                { label: 'Part Studio', slug: 'learning-course/stage2/2d/part-studio' },
                { label: 'Assembly', slug: 'learning-course/stage2/2d/assembly' },
                { label: 'Summary', slug: 'learning-course/stage2/2d/summary' },
              ],
            },
          ],
        },
        { label: 'Next Steps', slug: 'learning-course/next-steps' },
      ],
    },
  ],

  // 中文版本 Learning Course section
  '/zh/learning-course': [
    {
      label: '学习课程',
      items: [
        { label: '概览', slug: 'zh/learning-course' },
        {
          label: '课程准备',
          collapsed: true,
          items: [
            { label: 'CAD 入门', slug: 'zh/learning-course/course-setup/new-to-cad' },
            {
              label: 'Onshape 入门',
              collapsed: true,
              items: [
                { label: '账号设置', slug: 'zh/learning-course/course-setup/new-to-onshape/account-setup' },
                { label: '性能调校', slug: 'zh/learning-course/course-setup/new-to-onshape/performance-tuning' },
                { label: '文档页面', slug: 'zh/learning-course/course-setup/new-to-onshape/documents-page' },
              ],
            },
            {
              label: '必备课程工具',
              collapsed: true,
              items: [
                { label: '零件库', slug: 'zh/learning-course/course-setup/required-course-tools/part-library' },
                { label: '自定义特征 / FeatureScripts', slug: 'zh/learning-course/course-setup/required-course-tools/featurescripts' },
              ],
            },
          ],
        },
        {
          label: '第一阶段',
          collapsed: true,
          items: [
            { label: '课程介绍', slug: 'zh/learning-course/stage1/introduction' },
            { label: '聚焦能力提升', slug: 'zh/learning-course/stage1/1a/focusing-on-improvement' },
            {
              label: 'A：Onshape 基础',
              collapsed: true,
              items: [
                {
                  label: '第 1 节：零件工作室基础',
                  collapsed: true,
                  items: [
                    { label: '介绍与设置', slug: 'zh/learning-course/stage1/1a/section1-setup' },
                    { label: '练习 0：导航操作', slug: 'zh/learning-course/stage1/1a/section1-exercise0' },
                    { label: '练习 1：制作第一根管材', slug: 'zh/learning-course/stage1/1a/section1-exercise1' },
                    { label: '练习 2：更多管材', slug: 'zh/learning-course/stage1/1a/section1-exercise2' },
                    { label: '练习 3：草图基础', slug: 'zh/learning-course/stage1/1a/section1-exercise3' },
                    { label: '练习 4：底盘传动框架', slug: 'zh/learning-course/stage1/1a/section1-exercise4' },
                    { label: '练习 5：矩形框架', slug: 'zh/learning-course/stage1/1a/section1-exercise5' },
                    { label: '练习 6：三角框架', slug: 'zh/learning-course/stage1/1a/section1-exercise6' },
                  ],
                },
                {
                  label: '第 2 节：板件',
                  collapsed: true,
                  items: [
                    { label: '练习 1：板件工作流程', slug: 'zh/learning-course/stage1/1a/section2-exercise1' },
                    { label: '练习 2：加强板/角撑板', slug: 'zh/learning-course/stage1/1a/section2-exercise2' },
                    { label: '练习 3：上层结构加强板与板件', slug: 'zh/learning-course/stage1/1a/section2-exercise3' },
                    { label: '练习 4：电机安装', slug: 'zh/learning-course/stage1/1a/section2-exercise4' },
                  ],
                },
                {
                  label: '第 3 节：装配体',
                  collapsed: true,
                  items: [
                    { label: '练习 1：铆钉', slug: 'zh/learning-course/stage1/1a/section3-exercise1' },
                    { label: '练习 2：Swerve（舵轮）底盘', slug: 'zh/learning-course/stage1/1a/section3-exercise2' },
                    { label: '练习 3：加强板/角撑板设置', slug: 'zh/learning-course/stage1/1a/section3-exercise3' },
                    { label: '练习 4：底盘框架装配', slug: 'zh/learning-course/stage1/1a/section3-exercise4' },
                    { label: '练习 5：上层框架装配', slug: 'zh/learning-course/stage1/1a/section3-exercise5' },
                  ],
                },
              ],
            },
            {
              label: 'B：动力传动',
              collapsed: true,
              items: [
                { label: '传动系统简介', slug: 'zh/learning-course/stage1/1b/introduction' },
                { label: '电机', slug: 'zh/learning-course/stage1/1b/motors' },
                { label: '轴与轴承', slug: 'zh/learning-course/stage1/1b/shafts-bearings' },
                { label: '扭矩与转速', slug: 'zh/learning-course/stage1/1b/torque-speed' },
                { label: '齿轮基础', slug: 'zh/learning-course/stage1/1b/gears' },
                { label: '练习 1：简单齿轮变速箱', slug: 'zh/learning-course/stage1/1b/exercise1' },
                { label: '练习 2：两级齿轮变速箱', slug: 'zh/learning-course/stage1/1b/exercise2' },
                { label: '同步带和同步带轮基础', slug: 'zh/learning-course/stage1/1b/belts' },
                { label: '链条与链轮基础', slug: 'zh/learning-course/stage1/1b/chain' },
                { label: '练习 3：齿轮与同步带变速箱', slug: 'zh/learning-course/stage1/1b/exercise3' },
                { label: '总结', slug: 'zh/learning-course/stage1/1b/summary' },
              ],
            },
            {
              label: 'C：机构练习',
              collapsed: true,
              items: [
                { label: '介绍', slug: 'zh/learning-course/stage1/1c/introduction' },
                { label: '练习概览', slug: 'zh/learning-course/stage1/1c/exercise-overview' },
                { label: '练习 1：平直拾取机构', slug: 'zh/learning-course/stage1/1c/exercise1' },
                { label: '练习 2：死轴滚轮', slug: 'zh/learning-course/stage1/1c/exercise2' },
                { label: '练习 3：发射机构', slug: 'zh/learning-course/stage1/1c/exercise3' },
                { label: '练习 4：伸缩挂钩', slug: 'zh/learning-course/stage1/1c/exercise4' },
                { label: '练习 5：翻转齿轮箱', slug: 'zh/learning-course/stage1/1c/exercise5' },
                { label: '练习 6：方向切换', slug: 'zh/learning-course/stage1/1c/exercise6' },
                { label: '练习 7：竖直滚轮', slug: 'zh/learning-course/stage1/1c/exercise7' },
                { label: '练习 8：Indexer 居中', slug: 'zh/learning-course/stage1/1c/exercise8' },
                { label: '总结', slug: 'zh/learning-course/stage1/1c/summary' },
              ],
            },
            {
              label: 'D：设计方法',
              collapsed: true,
              items: [
                { label: '介绍', slug: 'zh/learning-course/stage1/1d/introduction' },
                { label: '自顶向下设计', slug: 'zh/learning-course/stage1/1d/top-down-design' },
                { label: '项目概览', slug: 'zh/learning-course/stage1/1d/project-overview' },
                { label: '布局草图', slug: 'zh/learning-course/stage1/1d/layout-sketch' },
                { label: '零件工作室', slug: 'zh/learning-course/stage1/1d/part-modeling' },
                { label: '装配体', slug: 'zh/learning-course/stage1/1d/assembly-modeling' },
                { label: '添加更多组件', slug: 'zh/learning-course/stage1/1d/adding-components' },
                { label: '顶层装配体', slug: 'zh/learning-course/stage1/1d/top-level-assembly' },
                { label: '总结', slug: 'zh/learning-course/stage1/1d/summary' },
              ],
            },
            {
              label: 'E：子系统工作流程',
              collapsed: true,
              items: [
                { label: '介绍', slug: 'zh/learning-course/stage1/1e/introduction' },
                { label: '项目概览', slug: 'zh/learning-course/stage1/1e/project-overview' },
                { label: '电池安装', slug: 'zh/learning-course/stage1/1e/battery-mounting' },
                { label: '练习 1：电池固定座', slug: 'zh/learning-course/stage1/1e/exercise1' },
                { label: '电气系统', slug: 'zh/learning-course/stage1/1e/electronics' },
                { label: '练习 2：安装电气元件', slug: 'zh/learning-course/stage1/1e/exercise2' },
                { label: '练习 3：电气底板减重开槽', slug: 'zh/learning-course/stage1/1e/exercise3' },
                { label: '练习 4：保险杠', slug: 'zh/learning-course/stage1/1e/exercise4' },
                { label: '练习 5：保险杠安装', slug: 'zh/learning-course/stage1/1e/exercise5' },
                { label: '复盘与总结', slug: 'zh/learning-course/stage1/1e/review-summary' },
              ],
            },
          ],
        },
        { label: '后续步骤', slug: 'zh/learning-course/next-steps' },
      ],
    },
  ],

  // Educator's Guide section
  '/educators-guide': [
    {
      label: "Educator's Guide",
      items: [
        { label: 'Introduction', slug: 'educators-guide/introduction' },
        { label: 'The Stages', slug: 'educators-guide/introduction/the-stages' },
        { label: 'Preparing Yourself', slug: 'educators-guide/introduction/preparation' },
        { label: 'Stage 0', slug: 'educators-guide/stage0/overview' },
        {
          label: 'Stage 1',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'educators-guide/stage1' },
            { label: 'Stage 1A', slug: 'educators-guide/stage1/stage1a' },
            { label: 'Stage 1B', slug: 'educators-guide/stage1/stage1b' },
            { label: 'Stage 1C', slug: 'educators-guide/stage1/stage1c' },
            { label: 'Stage 1D', slug: 'educators-guide/stage1/stage1d' },
            { label: 'Stage 1E', slug: 'educators-guide/stage1/stage1e' },
          ],
        },
      ],
    },
  ],

  // Design Handbook section
  '/design-handbook': [
    {
      label: 'Design Handbook',
      items: [
        { label: 'Overview', slug: 'design-handbook' },
        {
          label: 'Hardware',
          collapsed: true,
          items: [
            { label: 'Structure', slug: 'design-handbook/structure/structure' },
            { label: 'Materials', slug: 'design-handbook/structure/materials' },
            { label: 'Fasteners', slug: 'design-handbook/structure/fasteners' },
            { label: 'Intro to 3D Printing', slug: 'design-handbook/structure/intro-to-3d-printing' },
            { label: 'Design for 3D Printing', slug: 'design-handbook/structure/design-for-3d-printing' },
          ],
        },
        {
          label: 'Power Transmission',
          collapsed: true,
          items: [
            { label: 'Motion Components', slug: 'design-handbook/power-transmission/motion-components' },
          ],
        },
        {
          label: 'Design Write-ups',
          collapsed: true,
          items: [
            { label: 'Designing for Controllability', slug: 'design-handbook/design-writeups/designing-for-controllability' },
          ],
        },
      ],
    },
  ],

  // Mechanism Examples section
  '/mechanism-examples': [
    {
      label: 'Mechanism Examples',
      items: [
        { label: 'Overview', slug: 'mechanism-examples' },
        {
          label: 'Drivebases',
          collapsed: true,
          items: [
            {
              label: 'Swerve',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'mechanism-examples/drivebase/swerve' },
                { label: "2910's Charged Up Drivebase", slug: 'mechanism-examples/drivebase/swerve/2910_2023_dt' },
              ],
            },
          ],
        },
        {
          label: 'Intakes',
          collapsed: true,
          items: [
            {
              label: 'Pivoting Intakes',
              slug: 'mechanism-examples/intake/slapdown',
              collapsed: true,
              items: [],
            },
            {
              label: 'Linkage Intakes',
              slug: 'mechanism-examples/intake/linkage',
              collapsed: true,
              items: [],
            },
          ],
        },
        {
          label: 'Game Piece Manipulation',
          collapsed: true,
          items: [
            {
              label: 'Shooters',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'mechanism-examples/shooter' },
                { label: "1678's Rapid React Shooter", slug: 'mechanism-examples/shooter/1678_2022_shooter' },
              ],
            },
          ],
        },
        {
          label: 'Linear Extensions',
          collapsed: true,
          items: [
            {
              label: 'Continuous Elevators',
              slug: 'mechanism-examples/elevator/continuous',
              collapsed: true,
              items: [],
            },
            {
              label: 'Cascade Elevators',
              slug: 'mechanism-examples/elevator/cascade',
              collapsed: true,
              items: [],
            },
          ],
        },
        {
          label: 'Rotating Mechanisms',
          collapsed: true,
          items: [
            {
              label: 'Pivots',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'mechanism-examples/pivots' },
                { label: '6328 A-Frame Pivot', slug: 'mechanism-examples/pivots/6328_2023_pivot' },
                { label: '2910 Dead Axle Pivot', slug: 'mechanism-examples/pivots/2910_2023_pivot' },
              ],
            },
          ],
        },
      ],
    },
  ],

  // Best Practices section
  '/best-practices': [
    {
      label: 'Best Practices',
      items: [
        { label: 'Overview', slug: 'best-practices' },
        { label: 'Document Setup', slug: 'best-practices/document-setup' },
        { label: 'Sub-Document Setup', slug: 'best-practices/sub-document-setup' },
        { label: 'Layout Sketch Best Practices', slug: 'best-practices/master-sketch-setup' },
        { label: 'Part Studio Best Practices', slug: 'best-practices/feature-tree-setup' },
        { label: 'Assembly Best Practices', slug: 'best-practices/assembly-setup' },
      ],
    },
  ],

  // Contribution section
  '/contribution': [
    {
      label: 'Contribution',
      items: [
        { label: 'Methods of Contributing', slug: 'contribution/methods-of-contributing' },
        { label: 'Adding a Page', slug: 'contribution/adding-a-page' },
        { label: 'Contributing to Mech. Examples', slug: 'contribution/mechanism-contribution' },
        { label: 'Style Guide', slug: 'contribution/styleguide' },
        { label: 'Contributors', slug: 'contribution/contributors' },
      ],
    },
  ],

  // Resources section (content lives at /resources but navbar says "Other Resources")
  '/resources': [
    {
      label: 'Resources',
      items: [
        { label: 'Overview', slug: 'resources' },
        { label: 'Glossary', slug: 'resources/glossary' },
        {
          label: 'CAD Resources',
          collapsed: true,
          items: [
            { label: 'FRCDesignLib', slug: 'resources/frcdesignlib' },
            { label: 'KrayonCAD', slug: 'resources/krayoncad' },
            { label: 'Featurescript List', slug: 'resources/featurescripts' },
            { label: 'Featurescript Help', slug: 'resources/featurescript-help' },
          ],
        },
        {
          label: 'Design Challenges',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'resources/design-challenges' },
            { label: 'Week 1 | Swerve Drivebase', slug: 'resources/design-challenges/week1' },
            { label: 'Week 2 | Gearboxes', slug: 'resources/design-challenges/week2' },
            { label: 'Week 3 | Ball Shooter', slug: 'resources/design-challenges/week3' },
            { label: 'Week 4 | Intake', slug: 'resources/design-challenges/week4' },
            { label: 'Week 5 | Tilt Shift', slug: 'resources/design-challenges/week5' },
          ],
        },
      ],
    },
  ],
};

/**
 * Gets the sidebar configuration for a given URL path
 * Matches the most specific path prefix
 */
export function getSidebarForPath(pathname: string): SidebarSection[] {
  // Normalize pathname
  const normalizedPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  if (normalizedPath === '/mechanism-examples') {
    return [];
  }

  // Try to find exact match first
  if (sidebarSections[normalizedPath]) {
    return sidebarSections[normalizedPath];
  }

  // Find the longest matching prefix
  let bestMatch = '';
  for (const key of Object.keys(sidebarSections)) {
    if (key !== '/' && normalizedPath.startsWith(key) && key.length > bestMatch.length) {
      bestMatch = key;
    }
  }

  if (bestMatch) {
    return sidebarSections[bestMatch];
  }

  // Default to home (empty sidebar)
  return sidebarSections['/'] || [];
}

/**
 * Flattens sidebar items into a linear list of links for prev/next navigation
 */
function flattenSidebarItems(items: SidebarItem[]): { label: string; href: string }[] {
  const result: { label: string; href: string }[] = [];

  for (const item of items) {
    if (item.slug) {
      result.push({ label: item.label, href: '/' + item.slug + '/' });
    }
    if (item.items) {
      result.push(...flattenSidebarItems(item.items));
    }
  }

  return result;
}

/**
 * Gets prev/next navigation links for a given path
 */
export function getPrevNextLinks(pathname: string): { prev: { label: string; href: string } | null; next: { label: string; href: string } | null } {
  const normalizedPathForSection = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  if (normalizedPathForSection === '/mechanism-examples' || normalizedPathForSection.startsWith('/mechanism-examples/')) {
    return { prev: null, next: null };
  }

  const sections = getSidebarForPath(pathname);

  // Flatten all sections into a single list
  const allLinks: { label: string; href: string }[] = [];
  for (const section of sections) {
    allLinks.push(...flattenSidebarItems(section.items));
  }

  // Normalize the current path
  const normalizedPath = pathname.endsWith('/') ? pathname : pathname + '/';

  // Find current page index
  const currentIndex = allLinks.findIndex(link => link.href === normalizedPath);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: currentIndex > 0 ? allLinks[currentIndex - 1] : null,
    next: currentIndex < allLinks.length - 1 ? allLinks[currentIndex + 1] : null,
  };
}
