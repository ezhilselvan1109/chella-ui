import { jsx as _jsx } from "react/jsx-runtime";
import { DocLayout } from "./components/layout/DocLayout";
import { renderDocSection } from "./registry/docRegistry";
export default function App() {
    return (_jsx(DocLayout, { children: (activeSection) => renderDocSection(activeSection) }));
}
