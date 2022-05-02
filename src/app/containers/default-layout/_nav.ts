import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Overview',
    url: '/dashboard',
    iconComponent: { name: 'cil-calendar' },
  },

  {
    name: 'Manage Event',
    url: '/areas',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Event Details',
        url: '/areas/manage-event'
      },
      {
        name: 'Award Categories',
        url: '/areas/award-categories'
      }
    ]
  },
  {
    name: 'Manage Judging',
    url: '/areas',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Judges',
        url: '/areas/manage-judges'
      },
      {
        name: 'Assign Judges',
        url: '/areas/assign-judges'
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



