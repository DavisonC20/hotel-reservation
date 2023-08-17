import React from "react";
import { Button, Container } from "rsuite";
import ExitIcon from "@rsuite/icons/Exit";
import PageNextIcon from '@rsuite/icons/PageNext';
import { useAuth } from "../../Context/AuthProvider";
import { Link } from "react-router-dom";

function HeaderAdmin() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <Container
      className="container-h"
      style={{ maxWidth: "auto", height: "113px" }}
    >
      <div className="d-flex m-5 justify-content-center justify-content-between">
        <h4 className="text-white">Gestionar Hoteles</h4>
        {isLoggedIn ? (
          <Button
            className="btn-login "
            startIcon={<ExitIcon />}
            onClick={() => logout()}
          >
            Cerrar Sesión
          </Button>
        ) : (
          <Link to={'/'}>
          <Button
            className="btn-login "
            startIcon={<PageNextIcon />}
            >
            Volver
          </Button>
            </Link>
        )}
      </div>
    </Container>
  );
}

export default HeaderAdmin;
