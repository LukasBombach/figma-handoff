import { getFigmaFile } from "../api/useFigmaFile";

function HomePage({ file }) {
  return (
    <div>
      {!file && <em>loading…</em>}
      {file && <pre>{JSON.stringify(file, null, 2)}</pre>}
    </div>
  );
}

HomePage.getInitialProps = async () => {
  const file = await getFigmaFile(process.env.FIGMA_DESIGN_SYSTEM_ID, true);
  return { file };
};

export default HomePage;
