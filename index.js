import app from "./src/app.js";
import db from "./src/db.js";

app.listen(app.get("port"), () => {
  console.log("server up on port", app.get("port"));
});
