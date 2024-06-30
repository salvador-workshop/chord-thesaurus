import { createRoot } from "react-dom/client";
import ChordThesaurus from "./components/ChordThesaurus";
import Guitarragrams from "./components/Guitarragrams";

const root = createRoot(document.getElementById("app"));
// root.render(<ChordThesaurus />);
root.render(<Guitarragrams />);
