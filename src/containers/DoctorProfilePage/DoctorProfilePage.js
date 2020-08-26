import React, { Fragment, useContext } from 'react';
import ProfileHeader from '../../components/DoctorProfilePage/ProfileHeader/ProfileHeader';
import TimeTable from '../../components/DoctorProfilePage/TimeTable/TimeTable';
import Informations from '../../components/DoctorProfilePage/informations/Informations';
import {
  InfoProvider,
  InfoContext,
} from '../../components/DoctorProfilePage/DoctorInfoContext';
import './style.css';
import { Container, Row, Button } from 'react-bootstrap';
import ClinicMap from '../../components/DoctorProfilePage/ClinicMap/ClinicMap';

function DoctorProfilePage() {
  return (
    <InfoProvider>
      <Fragment>
        <ProfileHeader />
        <Container className="theBody">
          <Row className="bodyRow">
            <TimeTable />
            <Informations />
          </Row>
          <ClinicMap />
        </Container>
      </Fragment>
    </InfoProvider>
  );
}

export default DoctorProfilePage;
