import Auth from "@src/views/Auth/store";
import postOffices from "@src/views/PostOffice/store";

import layout from "./layout";
import navbar from "./navbar";

const rootReducer = {
  navbar,
  layout,
  Auth,
  postOffices
};

export default rootReducer;
