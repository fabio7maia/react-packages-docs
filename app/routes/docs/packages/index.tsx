import React from "react";
import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { Doc } from "~/blocks";
import { Box, Tabs } from "~/components";
import ReactAppFlow from "~/../data/docs/packages/react-flow-app/v1.mdx";

export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);
  return {
    packageName: url.searchParams.get("packageName"),
  };
};

export const Packages: React.FC = () => {
  const tabsItems = React.useMemo(
    () => [
      {
        text: "react-flow-app",
        children: (
          <Doc>
            <ReactAppFlow />
          </Doc>
        ),
      },
      { text: "react-light-form", children: <h1>React Light Form</h1> },
    ],
    []
  );
  const loaderData = useLoaderData();
  let tabIndex = loaderData?.packageName
    ? tabsItems.findIndex((x) => x.text === loaderData.packageName)
    : undefined;
  tabIndex = (tabIndex || 0) < 0 ? undefined : tabIndex;

  return (
    <Box>
      <Tabs items={tabsItems} withProgress selectedIndex={tabIndex} />
    </Box>
  );
};

export default Packages;
