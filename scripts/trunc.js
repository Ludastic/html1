function truncateTextInElementsWithClass(className, maxlength) {
    const elements = document.querySelectorAll(`.${className}`);
  
    elements.forEach((element) => {
      const text = element.textContent;
  
      if (text.length > maxlength) {
        const truncatedText = text.slice(0, maxlength - 1) + "…";
        element.textContent = truncatedText;
      }
    });
  }
  truncateTextInElementsWithClass("truncateable", 30);  