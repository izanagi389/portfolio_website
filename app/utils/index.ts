// 共通のユーティリティ関数
export const formatDate = (date: string): string => {
  const dateObject = new Date(date);
  return `${dateObject.getFullYear()}年${dateObject.getMonth() + 1}月${dateObject.getDate()}日`;
};

export const splitTitle = (title: string): string => {
  return title.split("").map(char => 
    char === "-" ? "<span>&nbsp;</span>" : `<span>${char}</span>`
  ).join("");
};

export const createTitleTemplate = (siteTitle: string) => {
  return (productCategory?: string) => {
    return productCategory ? `${productCategory} | ${siteTitle}` : siteTitle;
  };
}; 