import React from "react";
import { Button, Container } from "rsuite";

function HeaderAdmin() {
  return (
    <Container
      className="container-h"
      style={{ maxWidth: "100%", height: "113px" }}
    >
        <div className="d-flex m-5 justify-content-center justify-content-between">

        <h4 className="text-white">Gestionar Hoteles</h4>

            <Button >
                Volver
            </Button>
        </div>
      
    </Container>
  );
}

export default HeaderAdmin;
