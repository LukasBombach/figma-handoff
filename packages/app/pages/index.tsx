import { getFigmaFile } from "../api/useFigmaFile";
import FigmaRenderer from "../components/FigmaRenderer";

function HomePage({ file }) {
  if (process.browser) {
    console.log(file);
  }

  return (
    <main>
      <h1>{file.name}</h1>
      <FigmaRenderer />
    </main>
  );
}

HomePage.getInitialProps = async () => {
  const file = await getFigmaFile(process.env.FIGMA_DESIGN_SYSTEM_ID, true);
  return { file };
};

export default HomePage;
