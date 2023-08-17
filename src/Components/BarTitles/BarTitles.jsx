import React, { Children } from "react";
import { Container } from "rsuite";

function BarTitles({ titleBar, children, ...props }) {
  return (
    <Container className="container-b d-flex flex-row align-items-center">
      <div className=" d-flex justify-content-center">
        <h4>{titleBar}</h4>
      </div>
      <div className="d-flex" style={{ marginLeft: "4%" }}>{children}</div>
    </Container>
  );
}

export default BarTitles;
