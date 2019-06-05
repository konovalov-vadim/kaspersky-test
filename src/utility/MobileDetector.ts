const Android = () => navigator.userAgent.match(/Android/i);
const BlackBerry = () => navigator.userAgent.match(/BlackBerry/i);
const iOS = () => navigator.userAgent.match(/Opera Mini/i);
const Opera = () => navigator.userAgent.match(/Opera Mini/i);
const Windows = () => navigator.userAgent.match(/IEMobile/i);
const anyMobile = () => Android() || BlackBerry() || iOS() || Opera() || Windows();

export default {
  Android,
  BlackBerry,
  iOS,
  Opera,
  Windows,
  any: anyMobile,
  none: () => !anyMobile()
};
