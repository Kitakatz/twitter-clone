
interface NavigationItem {
  id: string;
  name: string; 
  path: string;
};

const navigationItems: NavigationItem[] = [
  {
    id: '01',
    name: 'Home',
    path: '/home'
  },
  {
    id: '02',
    name: 'Explore',
    path: '/explore'
  },
  {
    id: '03',
    name: 'Notifications',
    path: '/notifications'
  },
  {
    id: '04',
    name: 'Messages',
    path: '/messages'
  },
  {
    id: '05',
    name: 'Bookmarks',
    path: '/bookmarks'
  },
  {
    id: '06',
    name: 'Twitter Blue',
    path: '/twitter-blue'
  },
  {
    id: '07',
    name: 'Profile',
    path: '/profile'
  },
];

export default navigationItems;