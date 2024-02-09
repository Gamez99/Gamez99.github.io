const userAgent = navigator.userAgent;

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
const currentFileName = window.location.pathname.split("/").pop();

if (isMobile) {
  console.log(currentFileName);
  window.location.href = `/mobile?ctx=${currentFileName}`;
} else {
  // Do Nothing
}
