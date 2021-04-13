export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  title?: string;
  type?: string;
}

// Menu Items

export const BUSROUTES: RouteInfo[] = [
  {
    path: "/bus/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "fas fa-home text-default",
  },
  {
    path: "/bus/search",
    title: "Search",
    type: "link",
    icontype: "fas fa-chart-area text-default",
  },
  {
    path: "/bus/workflow",
    title: "Workflow",
    type: "link",
    icontype: "fas fa-file-code text-default",
  },
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: "/user/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "fas fa-home text-default",
  },
  {
    path: "/user/task-management",
    title: "Task Management",
    type: "link",
    icontype: "fas fa-chart-area text-default",
  },
  {
    path: "/user/data-management",
    title: "Data Management",
    type: "link",
    icontype: "fas fa-file-code text-default",
  },
];

export const ROUTES: RouteInfo[] = [
  {
    path: "/admin/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "fas fa-home text-default",
  },
  {
    path: "/admin/develop",
    title: "Data Catalogue",
    type: "sub",
    icontype: "fas fa-file-code text-default",
    collapse: "develop",
    isCollapsed: true,
    children: [
      // { path: "specs", title: "Dictionary", type: "link" },
      { path: "specs", title: "Internal", type: "link" },
      { path: "flows", title: "External", type: "link" },
      // { path: 'traces', title: 'Offline Trace', type: 'link' }
    ],
  },
  {
    path: "/admin/products",
    title: "Data Flow",
    type: "link",
    icontype: "fas fa-upload text-default",
  },
  {
    path: "/admin/analyze",
    title: "Data Governance",
    type: "sub",
    icontype: "fas fa-chart-area text-default",
    collapse: "analyze",
    isCollapsed: true,
    children: [
      { path: "proxy", title: "Input / Upload", type: "link" },
      { path: "cache", title: "Archive", type: "link" },
      { path: "error", title: "Retention", type: "link" },
      // { path: "target", title: "Target Performance", type: "link" },
    ],
  },
  {
    path: "/admin/collaboration",
    title: "Collaboration",
    type: "link",
    icontype: "fas fa-road text-default",
  },
  {
    path: "/admin/report",
    title: "Reporting",
    type: "link",
    icontype: "fas fa-chart-bar text-default",
  },
  {
    path: "/admin/management",
    title: "Management",
    type: "sub",
    icontype: "fas fa-braille",
    collapse: "zxc",
    isCollapsed: true,
    children: [
      {
        path: "audit-trails",
        title: "Audit Trails",
        type: "link",
      },
      { path: "users", title: "Users", type: "link" },
      // { path: "roles", title: "Roles", type: "link" },
    ],
  },
  // {
  //   path: "/admin/data-domain",
  //   title: "Data Domain",
  //   type: "sub",
  //   icontype: "fas fa-braille",
  //   collapse: "zxc",
  //   isCollapsed: true,
  //   children: [
  //     {
  //       path: "data-domain-coverage",
  //       title: "Data Domain Coverage",
  //       type: "link",
  //     },
  //     { path: "customer", title: "Customer", type: "link" },
  //   ],
  // },
  // {
  //   path: "/admin/hierarchy-management",
  //   title: "Hierarchy Management",
  //   type: "link",
  //   icontype: "fas fa-building",
  // },
  // {
  //   path: "/admin/data-steward",
  //   title: "Data Steward",
  //   type: "sub",
  //   icontype: "fas fa-align-justify",
  //   collapse: "msc",
  //   isCollapsed: true,
  //   children: [
  //     { path: "task-management", title: "Task Management", type: "link" },
  //     { path: "reporting", title: "Reporting", type: "link" },
  //     { path: "audit-trails", title: "Audit Trails", type: "link" },
  //     { path: "data-survivorship", title: "Data Survivorship", type: "link" },
  //   ],
  // },
  // {
  //   path: "/admin/user-interface-search",
  //   title: "User Interface & Search",
  //   type: "sub",
  //   icontype: "fas fa-address-book",
  //   collapse: "msc",
  //   isCollapsed: true,
  //   children: [
  //     {
  //       path: "business-user-support",
  //       title: "Business User Support",
  //       type: "link",
  //     },
  //     { path: "search", title: "Search", type: "link" },
  //     { path: "ehr-viewer", title: "EHR Viewer", type: "link" },
  //   ],
  // },
  // {
  //   path: "/admin/workflow-collaboration-governance",
  //   title: "Workflow, Collaboration,Governance",
  //   type: "sub",
  //   icontype: "fas fa-archive",
  //   collapse: "msc",
  //   isCollapsed: true,
  //   children: [
  //     { path: "business-workflow", title: "Business Workflow", type: "link" },
  //     { path: "task-management", title: "Task Management", type: "link" },
  //     { path: "collaboration", title: "Collaboration", type: "link" },
  //   ],
  // },
  // {
  //   path: "/admin/analytics-and-ml",
  //   title: "Analytics and ML",
  //   type: "sub",
  //   icontype: "fas fa-braille",
  //   collapse: "msc",
  //   isCollapsed: true,
  //   children: [
  //     { path: "data-analytics", title: "Data Analytics", type: "link" },
  //     { path: "analytics-collaboration", title: "Collaboration", type: "link" },
  //   ],
  // },
  // {
  //   path: "/admin/compliance",
  //   title: "Compliance",
  //   type: "sub",
  //   icontype: "fas fa-braille",
  //   collapse: "msc",
  //   isCollapsed: true,
  //   children: [
  //     { path: "Compliance", title: "compliance", type: "link" },
  //     { path: "pdpa-support", title: "PDPA Support", type: "link" },
  //   ],
  // },
];
