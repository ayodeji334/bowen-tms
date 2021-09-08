import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/pages/Login.vue'
 
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      guest: true
    }
  },
//   {
//     path: '/dashboard',
//     component: Dashboard,
//     children: [
//       {
//         path: "",
//         name: "dashboard",
//         component: DashboardOverview,
//       },
//       {
//         path: "product-categories",
//         name: "categories",
//         component: ProductCategories,
//       },
//       {
//         path: "loans",
//         component: Loans,
//         children: [
//           {
//             path: "",
//             name: 'loans',
//             component: LoansList
//           },
//           {
//             path: "loan-detail/:loan_ref",
//             name: 'loan detail',
//             component: LoanDetail
//           }
//         ]
//       },
//       {
//         path: "transactions",
//         component: Transactions,
//          children: [
//           {
//             path: "",
//             name: 'transactions',
//             component: TransactionList
//           },
//           {
//             path: "transaction-detail/:transaction_ref",
//             name: 'transaction detail',
//             component: TransactionDetail
//           }
//         ]
//       },
//       {
//         path: "orders",
//         component: Orders,
//         children: [
//           {
//             path: "",
//             name: "orders",
//             component: OrderList
//           },
//           {
//             path: "order/:order_ref",
//             name: 'order detail',
//             component: OrderDetail
//           },
//         ]
//       },
//       {
//         path: "users",
//         component: Users,
//         children: [
//           {
//             path: "",
//             name: 'users',
//             component: UserList
//           },
//           {
//             path: "user/:public_id",
//             name: 'user detail',
//             component: UserDetail,
//           },
//         ]
//       },
//       {
//         path: "products",
//         component: Products,
//         children: [
//           {
//             path: "",
//             name: 'products',
//             component: ProductsList
//           },
//           {
//             path: 'product/:product_slug',
//             name: "product detail",
//             component: ProductDetail
//           }
//         ]
//       },
//       {
//         path: "manage-admin",
//         name: "manage-admin",
//         component: ManageAdmin,
//       }
//     ],
//     meta: {
//       requireAuth: true
//     },
//   },
//   {
//     path: '/profile',
//     component: Profile,
//     meta: {
//       requireAuth: true
//     },
//   },
//   {
//     path: "*",
//     component: NotFound,
//     name: 'not-found'
//   }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router