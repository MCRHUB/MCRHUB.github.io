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
export const TAG_PIN = "Pin";

export const sortByPin = <T extends { tags: string[]; updateTime: number; order?: number }>(arr: T[]) => {
  return arr.sort((a, b) => {
    // 1. 优先按 order 排序（数字越小越靠前）
    const orderA = a.order ?? Infinity;
    const orderB = b.order ?? Infinity;
    if (orderA !== orderB) return orderA - orderB;

    // 2. order 相同或都没有时，再按 Pin 标签排
    const pinned = (v: typeof a) => (v.tags.includes(TAG_PIN) ? v.updateTime : -1);
    const pinnedA = pinned(a);
    const pinnedB = pinned(b);
    if (pinnedA !== pinnedB) return pinnedB - pinnedA;

    // 3. 最后按更新时间倒序
    return b.updateTime - a.updateTime;
  });
};
