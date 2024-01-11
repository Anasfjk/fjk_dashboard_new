import { INavbarData } from './helper';

export const navbarData: INavbarData[] = [
  {
    routerLink: 'dashboard',
    icon: 'dashboard',
    label: 'Dashboard',
  },
  {
    routerLink: 'master',
    icon: 'person',
    label: 'Master',
    expanded: false,
    items: [
      {
        routerLink: 'product',
        label: 'Product',
        items: [
          {
            routerLink: 'master/units',
            label: 'Units',
          },
          {
            routerLink: 'master/feature',
            label: 'Feature',
          },
          {
            routerLink: 'master/catagory',
            label: 'Category',
          },
          {
            routerLink: 'master/sub_category',
            label: 'Sub category',
          },
        ],
      },
    ],
  },
  {
    routerLink: 'transection',
    icon: 'account_balance_wallet',
    label: 'Transection',
  },
  {
    routerLink: 'production',
    icon: 'apartment',
    label: 'Production',
  },
  {
    routerLink: 'report',
    icon: 'description',
    label: 'Report',
  },
  {
    routerLink: 'hr',
    icon: 'group_add',
    label: 'HR',
  },
];
