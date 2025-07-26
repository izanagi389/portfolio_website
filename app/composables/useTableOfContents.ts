interface TopicItem {
  id: string;
  text: string;
  tag: string;
  children: TopicItem[];
}

export const useTableOfContents = () => {
  const generateTableOfContents = (contentElement: HTMLElement): TopicItem[] => {
    const headings = contentElement.querySelectorAll("h1, h2, h3, h4, h5");
    const topic: TopicItem[] = [];
    let h3Index = 0;
    let h4Index = 0;

    headings.forEach((heading) => {
      const item: TopicItem = {
        id: heading.id,
        text: heading.textContent || '',
        tag: heading.localName,
        children: []
      };

      switch (heading.localName) {
        case "h2":
          topic.push(item);
          h3Index = 0;
          h4Index = 0;
          break;
        case "h3":
          if (topic.length > 0) {
            const lastTopic = topic[topic.length - 1];
            if (lastTopic) {
              lastTopic.children.push(item);
              h3Index++;
              h4Index = 0;
            }
          }
          break;
        case "h4":
          if (topic.length > 0 && h3Index > 0) {
            const lastTopic = topic[topic.length - 1];
            const lastH3 = lastTopic?.children[h3Index - 1];
            if (lastH3) {
              lastH3.children.push(item);
              h4Index++;
            }
          }
          break;
        case "h5":
          if (topic.length > 0 && h3Index > 0 && h4Index > 0) {
            const lastTopic = topic[topic.length - 1];
            const lastH3 = lastTopic?.children[h3Index - 1];
            const lastH4 = lastH3?.children[h4Index - 1];
            if (lastH4) {
              lastH4.children.push(item);
            }
          }
          break;
      }
    });

    return topic;
  };

  return {
    generateTableOfContents
  };
}; 