import Cookie from 'js-cookie';

const logOut = () => {
  if (process.env.NODE_ENV === 'production') {
    Cookie.remove('X-JWT', {
      domain: 'kangshinho.net',
    });
  } else {
    Cookie.remove('X-JWT', {
      domain: 'localhost',
    });
    Cookie.remove('X-JWT', {
      domain: '127.0.0.1',
    });
  }
  window.location.href = '/';
};
export default logOut;
