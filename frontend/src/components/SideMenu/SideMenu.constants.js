export const SIDEMENU_ITEMS = [
  {
    key: 'all',
    label: 'All',
  },
  {
    key: 'nuts',
    label: 'Nuts',
    type: 'group',
    children: [
      {
        key: 'cashew',
        label: 'Cashew',
      },
      {
        key: 'almond',
        label: 'Almond'
      },
      {
        key: 'pistachios',
        label: 'Pistachios'
      },
      {
        key: 'walnut',
        label: 'Walnut'
      },
    ]
  },
  {
    key: 'dates',
    label: 'Dates',
  },
  {
    key: 'seeds',
    label: 'Seeds',
  },
  {
    key: 'dried fruit',
    label: 'Dried Fruits',
  }
]

export const SIDEMENU_OPTIONS = [
  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'Nuts',
    options: [
      {
        label: 'Cashew',
        value: 'cashew'
      },
      {
        label: 'Almond',
        value: 'almond'
      },
      {
        value: 'pistachios',
        label: 'Pistachios'
      },
      {
        value: 'walnut',
        label: 'Walnut'
      },
    ]
  },
  {
    label: 'Dates',
    value: 'dates'
  },
  {
    label: 'Seeds',
    value: 'seeds'
  },
  {
    label: 'Dried Fruits',
    value: 'dried fruits'
  }
]