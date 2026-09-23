// // manually pin posts
// export const TAG_PIN = "Pin";

// export const sortByPin = <T extends { tags: string[]; updateTime: number }>(arr: T[]) => {
//   // 按照是否置顶排序，置顶的按照更新时间排序
//   return arr.sort((a, b) => {
//     const pinned = (v: typeof a) => (v.tags.includes(TAG_PIN) ? v.updateTime : -1);
//     const pinnedA = pinned(a);
//     const pinnedB = pinned(b);
//     return pinnedB - pinnedA;
//   });
// };

// manually pin posts
export const TAG_PIN = "Pin";

export const sortByPin = <T extends { tags: string[]; updateTime: number; order?: number }>(arr: T[]) => {
  // 排序规则：优先按 order 排序（越小越靠前），没有 order 的按置顶和更新时间排序
  return arr.sort((a, b) => {
    // 1. 先判断是否有 order 字段
    const orderA = a.order ?? Infinity;
    const orderB = b.order ?? Infinity;
    if (orderA !== orderB) return orderA - orderB;

    // 2. 如果没有 order，再按原来的置顶逻辑排序
    const pinned = (v: typeof a) => (v.tags.includes(TAG_PIN) ? v.updateTime : -1);
    const pinnedA = pinned(a);
    const pinnedB = pinned(b);
    return pinnedB - pinnedA;
  });
};
