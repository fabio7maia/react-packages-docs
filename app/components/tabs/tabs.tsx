import React from "react";
import { Progress } from "..";
import { Box } from "../box";

interface TabItem {
  text: string;
  children: React.ReactNode;
}

interface TabsProps {
  selectedIndex?: number;
  items: TabItem[];
  withProgress?: boolean;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  selectedIndex = 0,
  withProgress = false,
}) => {
  const getIndex = React.useCallback((index: number): number | undefined => {
    return selectedIndex >= 0 && selectedIndex < items.length
      ? selectedIndex
      : undefined;
  }, []);

  const [tabIndex, setTabIndex] = React.useState(getIndex(selectedIndex));

  React.useEffect(() => {
    setTabIndex(getIndex(selectedIndex));
  }, [selectedIndex]);

  return (
    <Box>
      <Box row className="tabs tabs-boxed">
        {items.map((x, index) => (
          <Box
            key={index}
            className={`tab tab-lg ${tabIndex === index && "tab-active"}`}
            onClick={() => setTabIndex(index)}
          >
            {x.text}
          </Box>
        ))}
      </Box>
      {/* {withProgress && (
        <Box className="py-2">
          <Progress value={77} />
        </Box>
      )} */}
      {tabIndex !== undefined && (
        <Box className="py-6">{items[tabIndex].children}</Box>
      )}
    </Box>
  );
};
