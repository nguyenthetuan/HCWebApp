// utils/buildCategoryLevels.ts

export interface CategoryNode {
  category: {
    categoryId: string;
    categoryName: string;
  };
  childCategoryTreeNodes?: CategoryNode[];
  leafCategoryTreeNode?: boolean;
}

export const buildCategoryLevels = (node: CategoryNode): CategoryNode[][] => {
  const levels: CategoryNode[][] = [];

  const traverse = (current: CategoryNode, level: number) => {
    if (!levels[level]) levels[level] = [];
    levels[level].push(current);

    if (current.childCategoryTreeNodes) {
      for (const child of current.childCategoryTreeNodes) {
        traverse(child, level + 1);
      }
    }
  };

  if (node.childCategoryTreeNodes) {
    for (const child of node.childCategoryTreeNodes) {
      traverse(child, 0);
    }
  }

  return levels;
};
