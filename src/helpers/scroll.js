const scrollToImages = () => {
    setTimeout(() => {
      const mainH2Element = document.querySelector(".main__h2");
      mainH2Element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };
  
  export default scrollToImages;