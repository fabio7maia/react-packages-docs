import { useLoaderData } from "remix";
import { Link } from "react-router-dom";

// Import all your posts from the app/routes/posts directory. Since these are
// regular route modules, they will all be available for individual viewing
// at /posts/a, for example.
import * as Example from "~/../docs/packages/react-flow-app/example.mdx";
import { Box, Code } from "~/components";

function postFromModule(mod) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
}

export function loader() {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.
  return [postFromModule(Example)];
}

export default function Index() {
  const posts = useLoaderData();

  console.log("posts", { posts });

  return (
    <Box>
      <Box>Example</Box>
      <Box>
        <Code>const a = "1";</Code>
      </Box>
    </Box>
  );
}
