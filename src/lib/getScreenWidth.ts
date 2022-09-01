
export const getScreenWidth = () => {
  var screenWidth = screen.width;
  return screenWidth;
}

  // useEffect(() => {
  //   const pageWidth = window.innerWidth;

  //   window.addEventListener('resize', handleResize);
  //   return () => { // cleanup 
  //     window.removeEventListener('resize', handleResize);
  //   }
  // }, []);