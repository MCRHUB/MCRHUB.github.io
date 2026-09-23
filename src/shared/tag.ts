export const TAG_PIN = "Pin";
export const TAG_SORT_PREFIX = "Sort-";

export const sortByPin = <T extends { tags: string[]; updateTime: number }>(arr: T[]) => {
  return arr.sort((a, b) => {
    // 1. 优先按 Sort-XX 标签排序（XX 越小越靠前）
    const getSort = (v: typeof a) => {
      const sortTag = v.tags.find(t => t.startsWith(TAG_SORT_PREFIX));
      if (!sortTag) return Infinity;
      const num = parseInt(sortTag.replace(TAG_SORT_PREFIX, ""), 10);
      return isNaN(num) ? Infinity : num;
    };
    const sortA = getSort(a);
    const sortB = getSort(b);
    if (sortA !== sortB) return sortA - sortB;

    // 2. 其次按 Pin 标签排序
    const pinned = (v: typeof a) => (v.tags.includes(TAG_PIN) ? v.updateTime : -1);
    const pinnedA = pinned(a);
    const pinnedB = pinned(b);
    return pinnedB - pinnedA;
  });
};