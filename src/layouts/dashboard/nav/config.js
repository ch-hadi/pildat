// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;
const userSubMenu = [
  {
    title: 'User Settings',
    path: '/dashboard/user/settings',
    icon: icon('ic_settings'),
  },
  {
    title: 'User Profile',
    path: '/dashboard/user/profile',
    icon: icon('ic_user'),
  },
  {
    title: 'User Card',
    path: '/dashboard/user/card',
    icon: icon('ic_card'),
  },
];

const usersSubMenu =[
  {
    title: 'Add User',
    path: '/dashboard/user/add-user',
    icon: icon('ic_user'),
  },
  {
    title: 'All Users',
    path: '/dashboard/user/users',
    icon: icon('ic_user'),
  }
  
]


const settingManagmentSubMenu = [
  {
    title: 'Admin Management',
    path: '/dashboard/admin/admin-management',
    icon: icon('ic_admin_management'),
  },
  {
    title: 'Manage Countries',
    path: '/dashboard/admin/manage-countries',
    icon: icon('ic_countries_management'),
  },
  {
    title: 'Manage Provinces',
    path: '/dashboard/admin/provinces',
    icon: icon('prov_management'),
  },
  {
    title: 'Manage Categories',
    path: '/dashboard/admin/categories',
    icon: icon('ic_user'),
  },
  {
    title: 'Manage Subcategories',
    path: '/dashboard/admin/subcategories',
    icon: icon('ic_card'),
  },
  {
    title: 'Manage Designations',
    path: '/dashboard/admin/designations',
    icon: icon('ic_card'),
  },
  {
    title: 'Manage Occupations',
    path: '/dashboard/admin/occupations',
    icon: icon('ic_card'),
  },
  {
    title: 'Manage Positions',
    path: '/dashboard/admin/positions',
    icon: icon('ic_card'),
  },
  {
    title: 'Manage Specialities',
    path: '/dashboard/admin/specialities',
    icon: icon('ic_card'),
  },
  {
    title: 'Manage Capacity Building',
    path: '/dashboard/admin/capacity-building',
    icon: icon('ic_card'),
  },
  {
    title: 'Manage Assembly Types',
    path: '/dashboard/admin/assembly-types',
    icon: icon('ic_card'),
  },
  {
    title: 'Manage Political Party',
    path: '/dashboard/admin/political-party',
    icon: icon('ic_card'),
  },
  {
    title: 'Manage Party Alliances',
    path: '/dashboard/admin/party-alliances',
    // icon: icon('ic_card'),
  },
  {
    title: 'Manage Employer',
    path: '/dashboard/admin/employer',
    // icon: icon('ic_card'),
  },
  {
    title: 'Manage Legislative Interests',
    path: '/dashboard/admin/legislative-interests',
    // icon: icon('ic_card'),
  },
  {
    title: 'Manage Casts',
    path: '/dashboard/admin/castes',
    icon: icon('ic_card'),
  },
];

// const creditCardChilds = [
//   {
//     title: 'Credit Card List',
//     path: '/dashboard/card-management/credit-card-list/',
//     icon: icon('ic_card'),
//   },
//   {
//     title: 'Pay List',
//     path: '/dashboard/card-management/pay-list',
//     icon: icon('ic_card'),
//   },
// ];

// const monthlyCardChilds = [
//   {
//     title: 'Monthly Card Setting',
//     path: '/dashboard/monthly-card-management/monthly-card-setting',
//     icon: icon('ic_card'),
//   },
//   {
//     title: 'Monthly Card Record',
//     path: '/dashboard/monthly-card-management/monthly-card-record',
//     icon: icon('ic_card'),
//   },
// ];

const venuChilds = [
  {
    title: 'Venue List',
    path: '/dashboard/venue/venue-list',
    icon: icon('ic_list'),
  },
  {
    title: 'Venue Comission',
    path: '/dashboard/venue/venue-commission',
    icon: icon('ic_commission'),
  },
];

const navConfig = [
  {
    title: 'data statistics',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  // {
  //   title: 'venue comission',
  //   path: '/dashboard/venue',
  //   icon: icon('ic_commission'),
  // },
  {
    title: 'Manage Contacts',
    path: '/dashboard/user',
    icon: icon('ic_user'),
    children: usersSubMenu,
  },
  {
    title: 'print labels',
    path: '/dashboard/print-labels',
    icon: icon('ic_venue_management'),
    children: venuChilds,
  },
  {
    title: 'Settings',
    path: '/dashboard/settings',
    icon: icon('ic_mobile_repair'),
    children: settingManagmentSubMenu,
  },
  // {
  //   title: 'order management',
  //   path: '/dashboard/order-management',
  //   icon: icon('ic_orders_management'),
  // },
  // {
  //   title: 'credit card management',
  //   path: '/dashboard/card-management',
  //   icon: icon('ic_card'),
  //   children: creditCardChilds,
  // },
  // {
  //   title: 'vip settings',
  //   path: '/dashboard/vip-settings',
  //   icon: icon('ic_settings'),
  // },
  // {
  //   title: 'monthly card management',
  //   path: '/dashboard/monthly-card-management',
  //   icon: icon('ic_monthly_card_management'),
  //   children: monthlyCardChilds,
  // },
  // {
  //   title: 'fault report',
  //   path: '/dashboard/fault-report',
  //   icon: icon('ic_report'),
  // },
  // {
  //   title: 'product',
  //   path: '/dashboard/products',
  //   icon: icon('ic_cart'),
  // },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
