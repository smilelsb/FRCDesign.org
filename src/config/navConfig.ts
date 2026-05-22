export type NavLink = {
    href: string;
    label: string;
  };
  
  export type MobileNavLabels = {
    navigation: string;
    pageNavigation: string;
  };
  
  export function isChinesePath(pathname: string): boolean {
    return pathname === "/zh" || pathname === "/zh/" || pathname.startsWith("/zh/");
  }
  
  export const englishNavLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/feature-guide/", label: "Website Feature Guide" },
    { href: "/learning-course/", label: "Learning Course" },
    { href: "/educators-guide/introduction/", label: "Educator's Guide" },
    { href: "/design-handbook/", label: "Design Handbook" },
    { href: "/mechanism-examples/", label: "Mechanism Examples" },
    { href: "/best-practices/", label: "Best Practices" },
    { href: "/resources/", label: "Other Resources" },
    { href: "/contribution/methods-of-contributing/", label: "Contribution" },
  ];
  
  export const chineseNavLinks: NavLink[] = [
    { href: "/zh/", label: "首页" },
    { href: "/zh/feature-guide/", label: "网站功能指南" },
    { href: "/zh/learning-course/", label: "学习课程" },
    { href: "/zh/educators-guide/introduction/", label: "教师指南" },
    { href: "/zh/design-handbook/", label: "设计手册" },
    { href: "/zh/mechanism-examples/", label: "机构示例" },
    { href: "/zh/best-practices/", label: "最佳实践" },
    { href: "/zh/resources/", label: "其他资源" },
    { href: "/zh/contribution/methods-of-contributing/", label: "贡献指南" },
  ];
  
  export function getNavLinks(pathname: string): NavLink[] {
    return isChinesePath(pathname) ? chineseNavLinks : englishNavLinks;
  }
  
  export function getMobileNavLabels(pathname: string): MobileNavLabels {
    return isChinesePath(pathname)
      ? { navigation: "导航", pageNavigation: "页面导航" }
      : { navigation: "Navigation", pageNavigation: "Page Navigation" };
  }