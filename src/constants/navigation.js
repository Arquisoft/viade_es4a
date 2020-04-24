/**
 * Object mapping of known possible inboxes for the user
 */
export const NavigationItems = [
  //{
  //  id: 'welcome',
  //  icon: 'img/icon/apps.svg',
  //  label: 'navBar.welcome',
  //  to: '/viade_es4a/welcome'
  //},
  {
    id: 'profile',
    //icon: '/img/people.svg',
    icon: 'img/icon/perfil.png',
    label: 'navBar.profile',
    to: '/viade_es4a/profile'
  },
  /*
  {
    id: 'tictactoe',
    icon: '/img/icon/tictactoe.svg',
    label: 'navBar.tictactoe',
    to: '/tictactoe'
  },
  
  {
    id: 'text-editor',
    icon: '/img/icon/files.svg',
    label: 'navBar.text-editor',
    to: '/text-editor'
  },
  */

  {
    id:'addRoute',
    icon:'img/icon/addRoute.png',
    label:'navBar.addRoute',
    to: '/viade_es4a/addRoute'
  },

  {
    id:'uploadRoute',
    icon:'img/icon/uploadRoute.png',
    label:'navBar.uploadRoute',
    to: '/viade_es4a/uploadRoute'
  },
  {
    id:'viewRoute',
    icon:'img/icon/viewRoute.png',
    label:'navBar.viewRoute',
    to: '/viade_es4a/viewRoute'
  },
  {
    id:'friends',
    icon:'img/icon/amigos.png',
    label:'navBar.friends',
    to: '/viade_es4a/friends'
  },
  {
    id:'routList',
    icon:'img/icon/listRoute.png',
    label:'navBar.routList',
    to:'/viade_es4a/routList'
  }
,
  {
    id:'mapa',
    icon:'img/icon/mapa.png',
    label:'navBar.mapa',
    to: '/viade_es4a/mapa'
  }

];

export const ProfileOptions = [
  {
    label: 'navBar.profile',
    onClick: 'profileRedirect',
    icon: 'cog'
  },
  {
    label: 'navBar.logOut',
    onClick: 'logOut',
    icon: 'lock'
  }
];
