

import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import Profil from "../pages/Profil";
import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Anasayfa",
        component: Dashboard
      },
      {
        path: "user",
        name: "Profil",
        component: Profil
      },
      {
        path: "table",
        name: "Liste",
        component: TableList
      },
      {
        path: "typography",
        name: "Yazı Tipi",
        component: Typography
      },
      {
        path: "icons",
        name: "Iconlar",
        component: Icons
      },
      {
        path: "maps",
        name: "Harita",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "notifications",
        name: "Bildirimler",
        component: Notifications
      }
    ]
  }
];

export default routes;
