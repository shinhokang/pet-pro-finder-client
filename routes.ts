export default {
  home: '/',
  join: '/join',
  registerTrainer: '/registerTraienr',
  login: '/login',
  term: '/term',
  help: '/help',
  about: '/about',
  community: '/community',
  
  trainers: '/trainers',
  trainerDetail: (id: number) => {
    return `/trainer?trainerId=${id}`;
  },
  asTrainerDetail: (id: number) => {
    return `/trainer/${id}/`;
  },

  userDetail: (username: string) => `/user?username=${username}`,
  asUserDetail: (username: string) => `/user/${username}`,
  asProductsFn: (page: number, tab: string) =>
    `/products${tab !== 'UPDATED' ? `/${tab.toLowerCase()}` : ''}${
      page === 0 ? '' : `?page=${page}`
    }`,
  asMakersFn: (page: number, tab: string) =>
    `/makers${tab !== 'FIRE' ? `/${tab.toLowerCase()}` : ''}${
      page === 0 ? '' : `?page=${page}`
    }`,
  asToDosFn: (page: number, tab: string) =>
    `/todos${tab !== 'COMPLETED' ? `/${tab.toLowerCase()}` : ''}${
      page === 0 ? '' : `?page=${page}`
    }`,
  productsFn: (page: number, tab: string) =>
    `/products?tab=${tab}&page=${page}`,
  makersFn: (page: number, tab: string) => `/makers?tab=${tab}&page=${page}`,
  makerToDo: (username: string) => `/maker?username=${username}&tab=todo`,
  asMakerToDo: (username: string) => `/maker/${username}/todo`,
  makerDone: (username: string) => `/maker?username=${username}&tab=done`,
  asMakerDone: (username: string) => `/maker/${username}/done`,
  toDosFn: (page: number, tab: string) => `/todos?tab=${tab}&page=${page}`,
  
};
