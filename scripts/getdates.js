const date = new Date();
const year = date.getFullYear();

const firstParagraphInFooter = document.querySelector("footer p:first-child");
firstParagraphInFooter.innerHTML = `&copy; ${year}` + firstParagraphInFooter.innerHTML;
