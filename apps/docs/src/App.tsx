import React from "react";
import { DocLayout } from "./components/layout/DocLayout";
import { renderDocSection } from "./registry/docRegistry";

export default function App() {
  return (
    <DocLayout>
      {(activeSection) => renderDocSection(activeSection)}
    </DocLayout>
  );
}
