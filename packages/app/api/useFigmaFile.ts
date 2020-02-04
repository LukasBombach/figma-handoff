import { useState, useEffect } from "react";
import { FileApiResponse } from "../types/figma";

async function fetchFigmaFile(id: string): Promise<FileApiResponse> {
  const url = `https://api.figma.com/v1/files/${id}`;
  const headers = new Headers({ "X-Figma-Token": process.env.FIGMA_TOKEN });
  const response = await fetch(url, { headers });
  const figmaFile = await response.json();
  return figmaFile;
}

async function importFigmaFixture(id: string): Promise<FileApiResponse> {
  return import(`../fixtures/useFigmaFile/${id}.json`);
}

export function getFigmaFile(
  id: string,
  useFixture: boolean,
): Promise<FileApiResponse> {
  return useFixture ? importFigmaFixture(id) : fetchFigmaFile(id);
}

export default function useFigmaFile(
  id: string,
  useFixture: boolean,
): [FileApiResponse] {
  const [figmaFile, setFigmaFile] = useState<FileApiResponse>();
  useEffect(() => {
    getFigmaFile(id, useFixture).then(file => setFigmaFile(file));
  }, []);
  return [figmaFile];
}
