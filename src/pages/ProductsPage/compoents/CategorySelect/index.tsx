import React, { useState, useEffect } from "react";
import MySelectDropdow from "@/components/common/MySelectDropdow";
import { CategoryNode } from "@/untils/buildCategoryLevels";
import styles from "./styles.module.scss";
interface Props {
  rootCategoryNode: CategoryNode;
  onSelectCategory: (finalCategory: CategoryNode) => void;
  selectedLeafCategoryId?: string; // <-- thêm prop này
}

// Hàm đệ quy để tìm path từ root đến categoryId
const findCategoryPath = (
  node: CategoryNode,
  targetId: string,
  path: CategoryNode[] = []
): CategoryNode[] | null => {
  const newPath = [...path, node];
  if (node.category.categoryId === targetId) {
    return newPath;
  }

  if (node.childCategoryTreeNodes) {
    for (const child of node.childCategoryTreeNodes) {
      const result = findCategoryPath(child, targetId, newPath);
      if (result) return result;
    }
  }

  return null;
};

const CategorySelect: React.FC<Props> = ({
  rootCategoryNode,
  onSelectCategory,
  selectedLeafCategoryId,
}) => {
  const [selectedPath, setSelectedPath] = useState<CategoryNode[]>([]);
  const [currentOptions, setCurrentOptions] = useState<CategoryNode[][]>([]);

  // Render lại khi truyền vào categoryId đã chọn sẵn
  useEffect(() => {
    if (selectedLeafCategoryId && rootCategoryNode) {
      const path = findCategoryPath(rootCategoryNode, selectedLeafCategoryId);
      if (path) {
        const levels: CategoryNode[][] = [];
        for (let i = 0; i < path.length - 1; i++) {
          const node = path[i];
          if (node.childCategoryTreeNodes) {
            levels.push(node.childCategoryTreeNodes);
          }
        }
        setSelectedPath(path.slice(1)); // bỏ root
        setCurrentOptions(levels);
      }
    } else if (rootCategoryNode) {
      // reset nếu không có selected
      setSelectedPath([]);
      setCurrentOptions([[...(rootCategoryNode.childCategoryTreeNodes || [])]]);
    }
  }, [rootCategoryNode, selectedLeafCategoryId]);

  const handleSelect = (levelIndex: number, selectedId: string) => {
    const newPath = selectedPath.slice(0, levelIndex);
    const optionsAtLevel = currentOptions[levelIndex];

    const selectedNode = optionsAtLevel.find(
      (node) => node.category.categoryId === selectedId
    );

    if (selectedNode) {
      newPath[levelIndex] = selectedNode;
      setSelectedPath(newPath);

      if (selectedNode.childCategoryTreeNodes) {
        const nextOptions = [...currentOptions.slice(0, levelIndex + 1)];
        nextOptions[levelIndex + 1] = selectedNode.childCategoryTreeNodes;
        setCurrentOptions(nextOptions);
      } else {
        setCurrentOptions(currentOptions.slice(0, levelIndex + 1));
        onSelectCategory(selectedNode); // Đây là node cuối cùng
      }
    }
  };

  return (
    <div>
      {currentOptions.map((options, index) => (
        <MySelectDropdow
          key={index}
          id={`category-level-${index}`}
          name={`category-level-${index}`}
          label={`Danh mục cấp ${index + 1}`}
          value={selectedPath[index]?.category.categoryId || ""}
          onChange={(e) => handleSelect(index, e.target.value)}
          options={options.map((node) => ({
            label: node.category.categoryName,
            value: node.category.categoryId,
          }))}
          className={styles.container}
          size="small"
        />
      ))}
    </div>
  );
};

export default CategorySelect;
