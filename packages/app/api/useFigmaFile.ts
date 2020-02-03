import { useState, useEffect } from "react";

export type FIGMA_FILE = JSON;

async function fetchFigmaFile(id: string): Promise<FIGMA_FILE> {
  const url = `https://api.figma.com/v1/files/${id}`;
  const headers = new Headers({ "X-Figma-Token": process.env.FIGMA_TOKEN });
  const response = await fetch(url, { headers });
  const figmaFile = await response.json();
  return figmaFile;
}

async function importFigmaFixture(id: string): Promise<FIGMA_FILE> {
  return import(`../fixtures/useFigmaFile/${id}.json`);
}

export function getFigmaFile(
  id: string,
  useFixture: boolean,
): Promise<FIGMA_FILE> {
  return useFixture ? importFigmaFixture(id) : fetchFigmaFile(id);
}

export default function useFigmaFile(
  id: string,
  useFixture: boolean,
): [FIGMA_FILE] {
  const [figmaFile, setFigmaFile] = useState<FIGMA_FILE>();
  useEffect(() => {
    getFigmaFile(id, useFixture).then(file => setFigmaFile(file));
  }, []);
  return [figmaFile];
}
