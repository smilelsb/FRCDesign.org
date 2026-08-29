/**
 * Glossary of terms and abbreviations
 *
 * Add terms here to automatically highlight them across the site
 * with a dotted underline and hover tooltip.
 *
 * Format:
 * {
 *   term: "TERM",           // The word/abbreviation to match (case-insensitive)
 *   definition: "..."       // The explanation shown on hover
 * }
 */

export interface GlossaryTerm {
  term: string;
  definition: string;
  definitionZh: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  // Vendors
  {
    term: "WCP",
    definition: "West Coast Products",
    definitionZh: "West Coast Products（FRC 零部件供应商）"
  },
  {
    term: "REV",
    definition: "REV Robotics",
    definitionZh: "REV Robotics（FRC 机器人零部件供应商）"
  },
  {
    term: "TTB",
    definition: "The Thrifty Bot",
    definitionZh: "The Thrifty Bot（FRC 零部件供应商）"
  },
  {
    term: "Redux",
    definition: "Redux Robotics",
    definitionZh: "Redux Robotics（FRC 机器人零部件供应商）"
  },
  {
    term: "MCM",
    definition: "McMaster Carr",
    definitionZh: "McMaster-Carr（工业零部件供应商）"
  },

  // Intake styles
  {
    term: "OTB",
    definition: "\"Over the Bumper\" - A style of intake where you lift the piece over the bumper",
    definitionZh: "“Over the Bumper”（越过保险杠），一种将物件从保险杠上方拾取的拾取机构形式"
  },
  {
    term: "UTB",
    definition: "\"Under the Bumper\" - A style of intake where you move the piece under the bumper",
    definitionZh: "“Under the Bumper”（从保险杠下方通过），一种将物件从保险杠下方拾取的拾取机构形式"
  },

  // Parts & Components
  {
    term: "COTS",
    definition: "Commercial Off the Shelf - Parts you can buy from a vendor",
    definitionZh: "“Commercial Off the Shelf”（现成商业零件），指可从供应商处直接购买的零件"
  },
  {
    term: "V4B",
    definition: "\"Virtual 4 Bar\" - Where a second degree of freedom is directly geared off a previous degree of freedom instead of being moved independently or by a linkage",
    definitionZh: "“Virtual 4 Bar”（虚拟四连杆），第二个自由度由前一个自由度通过齿轮直接驱动，而非独立运动或由连杆驱动"
  },
  {
    term: "C-C",
    definition: "\"Center to Center\" distance",
    definitionZh: "“Center to Center”（中心到中心）的距离，即中心距"
  },
  {
    term: "turnbuckle",
    definition: "A threaded part that goes in between chain links to tension the chain",
    definitionZh: "安装在链条链节之间、用于张紧链条的带螺纹零件，即松紧螺杆"
  },
  {
    term: "4Bar",
    definition: "A type of linkage characterized by its 4 pivot points",
    definitionZh: "以四个枢轴点为特征的一类连杆机构，即四连杆机构"
  },
  {
    term: "Tube-Nut",
    definition: "Also known as a \"Star Nut\" - Provides an easy way to put a thread in end of a hollow tube allowing you to bolt the tube to another part",
    definitionZh: "也称“Star Nut”（星形螺母），用于在空心管端部形成内螺纹，以便用螺栓连接其他零件"
  },
  {
    term: "Gusset",
    definition: "Reinforcement plate, usually made of aluminum, used to strengthen connections between two tubes",
    definitionZh: "通常由铝制成、用于加强两根管材连接的加强板，也称角撑板"
  },

  // Physics & Engineering concepts
  {
    term: "COG",
    definition: "Center of Gravity, also referred to as COM (Center of Mass)",
    definitionZh: "Center of Gravity（重心），也常称为 COM（Center of Mass，质心）"
  },
  {
    term: "Cantilever",
    definition: "Horizontal element that's supported by one side only",
    definitionZh: "仅在一侧受支撑的水平构件，即悬臂"
  },
  {
    term: "Shear",
    definition: "When forces are applied parallel to the plane of a material, causing breaking of fasteners due to excessive force and stress",
    definitionZh: "力平行于材料平面作用时产生的剪切效应；力与应力过大时可能使紧固件失效"
  },
  {
    term: "Torque",
    definition: "Force that produces rotational movement",
    definitionZh: "使物体产生旋转运动的力矩，即扭矩"
  },
  {
    term: "DP",
    definition: "Diametral pitch - The number of teeth per inch of the pitch circle",
    definitionZh: "Diametral Pitch（径节），分度圆每英寸对应的轮齿数量"
  },
  {
    term: "Backlash",
    definition: "'Slop' in a power transmission system; can wiggle back and forth without engaging the whole system",
    definitionZh: "传动系统中的回程间隙；机构可在未带动整个系统时来回晃动"
  },

  // Axle types
  {
    term: "Deadaxle",
    definition: "A type of axle setup where the axle is fixed in place and/or is not transferring the torque of the system through it",
    definitionZh: "轴固定不动，和/或不通过该轴传递系统扭矩的轴系布置，即死轴"
  },
  {
    term: "Liveaxle",
    definition: "A type of axle setup where the main torque transfer is through the axle",
    definitionZh: "主要扭矩通过轴本身传递的轴系布置，即活轴"
  },
  {
    term: "Zombie-Axle",
    definition: "Typically used on pivots - A zombie axle spins with the mechanism, but is transferring little to no torque through it. Commonly used to put an encoder on the pivot point",
    definitionZh: "多用于枢轴机构；轴随机构转动但几乎不传递扭矩，常用于在枢轴点安装编码器，即惰轴"
  },

  // Electronics
  {
    term: "PDH",
    definition: "Power Distribution Hub",
    definitionZh: "Power Distribution Hub（配电中心），机器人的电源分配设备"
  },
  {
    term: "SparkMAX",
    definition: "Motor controller for REV motors",
    definitionZh: "用于 REV 电机的电机控制器"
  },
  {
    term: "PWM",
    definition: "Pulse Width Modulation cable",
    definitionZh: "Pulse Width Modulation（脉宽调制）信号线，即 PWM 线"
  },
  {
    term: "RIO",
    definition: "roboRIO - The brain of the robot",
    definitionZh: "roboRIO，机器人的主控制器"
  },
  {
    term: "Blinkin",
    definition: "LED controller for REV",
    definitionZh: "REV 的 LED 控制器"
  },
  {
    term: "Radio",
    definition: "Device that helps the robot communicate with the driver station",
    definitionZh: "帮助机器人与 Driver Station（操控站）通信的设备，即通信模块"
  },

  // Manufacturing & Materials
  {
    term: "3DP",
    definition: "Abbreviation for 3D printed or 3D printing",
    definitionZh: "3D printed 或 3D printing（3D 打印）的缩写"
  },
  {
    term: "Poly",
    definition: "Abbreviation for polycarbonate",
    definitionZh: "polycarbonate（聚碳酸酯）的缩写"
  },
  {
    term: "PC",
    definition: "Abbreviation for polycarbonate",
    definitionZh: "polycarbonate（聚碳酸酯）的缩写"
  },
  {
    term: "Stripping",
    definition: "Process of removing threads or bolt heads, often due to excessive force or wear",
    definitionZh: "螺纹或螺栓头部因受力过大或磨损而损坏、被磨平的过程，即滑牙"
  },
  {
    term: "Tapping",
    definition: "The process of creating threads in a hole using a tap tool",
    definitionZh: "使用丝锥在孔内加工内螺纹的过程，即攻丝"
  },
  {
    term: "Billet",
    definition: "Component machined down from a solid block of material",
    definitionZh: "由整块实心材料加工而成的零部件，即坯料加工件"
  },
  {
  term: "TPI",
  definition: "Threads per inch is the number of thread peaks in one inch of a fastener, used to describe imperial thread pitch (e.g. #10-32 has 32 TPI)",
  definitionZh: "Threads per Inch（每英寸螺纹牙数），用于描述英制螺纹螺距，例如 #10-32 为 32 TPI"
  },

  // Robot structure
  {
    term: "Brainpan",
    definition: "Flipped electronics bellypan",
    definitionZh: "将电器元件翻转安装的电气底板，即倒置电气底板"
  },
  {
    term: "Bellypan",
    definition: "Plate for mounting electronics on the underside of your drivebase",
    definitionZh: "安装在底盘底部、用于固定电气设备的板件，即底盘电气底板"
  },
  {
    term: "Hardstop",
    definition: "A physical limit designed to prevent a mechanism or component from moving beyond a certain point",
    definitionZh: "防止机构或零件运动超出指定位置的物理限位，即硬限位"
  },
  {
    term: "Softstop",
    definition: "A software-based limit or control mechanism that restricts the movement of a mechanism or component to prevent it from exceeding certain parameters",
    definitionZh: "通过软件约束机构或零件运动范围、防止其超出设定参数的控制方式，即软限位"
  },

  // Design concepts
  {
    term: "Packaging",
    definition: "The way in which you fit parts of your robot together in a space",
    definitionZh: "机器人内部所有零部件在有限空间中的整合装配布局方式，即空间布局"
  },
  {
    term: "Parametric",
    definition: "Designed in a way that uses relationships between steps to maintain design intent",
    definitionZh: "利用建模步骤之间的关联关系来保留设计意图的设计方式，即参数化设计"
  },
];

/**
 * Get a glossary term by its name (case-insensitive)
 */
export function getGlossaryTerm(term: string): GlossaryTerm | undefined {
  return glossaryTerms.find(g => g.term.toLowerCase() === term.toLowerCase());
}

/**
 * Get all terms as a map for quick lookup
 */
export function getGlossaryMap(): Map<string, string> {
  const map = new Map<string, string>();
  glossaryTerms.forEach(({ term, definition }) => {
    map.set(term.toLowerCase(), definition);
  });
  return map;
}
