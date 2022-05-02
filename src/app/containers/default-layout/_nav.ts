import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Overview',
    url: '/dashboard',
    iconComponent: { name: 'cil-calendar' },
  },

  {
    name: 'Manage Event',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Event Details',
        url: '/base/accordion'
      },
      {
        name: 'Award Categories',
        url: '/base/breadcrumbs'
      }
    ]
  },
  {
    name: 'Manage Judging',
    url: '/buttons',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Judges',
        url: '/buttons/buttons'
      },
      {
        name: 'Assign Judges',
        url: '/buttons/button-groups'
      }
    ]
  },
  {
    name: 'Manage Submissions',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Submissions',
        url: '/forms/form-control'
      }
    ]
  },
  {
    name: 'Manage Photographers',
    url: '/notifications',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: ' Photographers',
        url: '/notifications/alerts'
      }
    ]
  },
];



