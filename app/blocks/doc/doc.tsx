import React from "react";
import { ViewListIcon } from "@heroicons/react/outline";
import { Article, Box, Dropdown, Menu, MenuItem, VP } from "~/components";

export const Doc: React.FC = ({ children }) => {
  const articleRef = React.useRef<HTMLElement>();
  const anchorsRef = React.useRef<HTMLElement>();
  const [anchors, setAnchors] = React.useState<MenuItem[]>([]);
  const [anchorProps, setAnchorProps] = React.useState<any>();

  React.useEffect(() => {
    if (articleRef.current) {
      const headings = [...articleRef.current.querySelectorAll("h1, h2")];

      const anchorsUpdate = [];

      for (let i = 0; i < headings.length; i++) {
        const h = headings[i];
        const id = `heading${i}`;

        h.setAttribute("id", id);
        anchorsUpdate.push({
          href: `#${id}`,
          children: h.innerHTML,
        });
      }

      setAnchors(anchorsUpdate);

      if (anchorsRef.current) {
        setAnchorProps({
          top: anchorsRef.current.offsetTop,
          width: anchorsRef.current.offsetWidth,
          left: anchorsRef.current.offsetLeft,
        });
      }
    }
  }, []);

  return (
    <Box row>
      <Box className="md:w-9/12">
        <Article>
          <div ref={articleRef as any}>{children}</div>
        </Article>
      </Box>
      <VP viewport="sm">
        <Box className="fixed right-2">
          <Dropdown items={anchors}>
            <ViewListIcon className="h-8 w-8" />
          </Dropdown>
        </Box>
      </VP>
      <VP viewport={["md", "lg", "xl", "2xl"]}>
        <Box ref={anchorsRef} className="pl-2 md:w-3/12">
          {!anchorProps && <Menu items={anchors} />}
        </Box>
        {anchorProps && (
          <Box
            className="pl-2 w-40"
            style={{ ...anchorProps, position: "fixed" }}
          >
            <Menu items={anchors} />
          </Box>
        )}
      </VP>
    </Box>
  );
};
