import React from "react";
import AddNewMovie from "../components/Modal/AddNewMovie";
import Genres from "../components/Genres/Genres";
import Movies from "../components/Movies/Movies";
import { Button, ButtonGroup } from "react-bootstrap";
import { useAuthContext } from "../context/authContext";

function Dashboard() {
  const [isAuthenticated, handleAuthChange] = useAuthContext();
  return (
    <div className="Dashboard">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <AddNewMovie />
            <Genres />
            <ButtonGroup className="d-flex mt-5">
              <Button
                onClick={() => {
                  handleAuthChange(false);
                }}
              >
                Log Out
              </Button>
            </ButtonGroup>
          </div>
          <div className="col-sm-12 col-md-9">
            <Movies />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
