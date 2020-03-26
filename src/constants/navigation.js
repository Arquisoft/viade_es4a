/**
 * Object mapping of known possible inboxes for the user
 */
export const NavigationItems = [
  {
    id: 'welcome',
    icon: '/img/icon/apps.svg',
    label: 'navBar.welcome',
    to: '/welcome'
  },
  {
    id: 'profile',
    //icon: '/img/people.svg',
    icon: '/img/icon/perfil.png',
    label: 'navBar.profile',
    to: '/profile'
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
    icon:'/img/icon/addRoute.png',
    label:'navBar.addRoute',
    to: '/addRoute'
  },
  
  {
    id:'uploadRoute',
    icon:'/img/icon/uploadRoute.png',
    label:'navBar.uploadRoute',
    to: '/uploadRoute'
  },
  {
    id:'viewRoute',
    icon:'/img/icon/viewRoute.png',
    label:'navBar.viewRoute',
    to: '/viewRoute'
  },
  {
    id:'friends',
    icon:'/img/icon/amigos.png',
    label:'navBar.friends',
    to: '/friends'
  }
,
  {
    id:'mapa',
    icon:'/img/icon/mapa.png',
    label:'navBar.mapa',
    to: '/mapa'
  }

];

export const ProfileOptions = [
  {
    label: 'navBar.profile',
    onClick: 'profileRedirect',
    icon: 'cog'
  },
  {
    label: 'navBar.formModelConvert',
    onClick: 'formModelConvertRedirect'
  },
  {
    label: 'navBar.formModelRender',
    onClick: 'formModelRenderRedirect'
  },
  {
    label: 'navBar.logOut',
    onClick: 'logOut',
    icon: 'lock'
  }
];
