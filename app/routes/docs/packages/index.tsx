import { Doc } from "~/blocks";
import { Box, Tabs } from "~/components";
import ReactAppFlow from "~/../data/docs/packages/react-flow-app/example.mdx";

export const Packages: React.FC = () => {
  return (
    <Box>
      <Tabs
        items={[
          {
            text: "react-flow-app",
            children: (
              <Doc>
                <ReactAppFlow />
              </Doc>
            ),
          },
          { text: "react-light-form", children: <h1>React Light Form</h1> },
        ]}
        withProgress
      />
    </Box>
  );
};

export default Packages;
