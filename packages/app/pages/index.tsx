import { NextPage } from "next";
import { FileApiResponse } from "../types/figma";
import { getFigmaFile } from "../api/useFigmaFile";
import FigmaRenderer from "../components/FigmaRenderer";

const HomePage: NextPage<{ file: FileApiResponse }> = ({ file }) => {
  if (process.browser) console.log(file);

  return (
    <main>
      <h1>{file.name}</h1>
      <FigmaRenderer document={file.document} />
    </main>
  );
};

HomePage.getInitialProps = async () => {
  const file = await getFigmaFile(process.env.FIGMA_DESIGN_SYSTEM_ID, true);
  return { file };
};

export default HomePage;
