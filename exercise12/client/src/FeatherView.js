import Main from "./Main.js";

// Data

import { MAIN_DATA } from "./data.js";

function FeatherView() {
  return (
    <>
      <Main content={MAIN_DATA[1].content} />
    </>
  );
}

export default FeatherView;