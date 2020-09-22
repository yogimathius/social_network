import Progress from '@paljs/ui/ProgressBar';
import { Status } from '@paljs/ui/types';
import { Card, CardBody, CardHeader, CardFooter } from '@paljs/ui/Card';
import { Actions } from '@paljs/ui/Actions';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
// import SEO from '../../components/SEO';

const Container = styled.div`
  display: flex;
  align-items: center;
  .bar {
    flex: 1;
  }
`;

export default function ProgressPage() {
  const [value, setValue] = useState(25);
  const [status, setStatus] = useState<Status>('Danger');

  useEffect(() => {
    if (value <= 25) {
      setStatus('Danger');
    } else if (value <= 50) {
      setStatus('Warning');
    } else if (value <= 75) {
      setStatus('Info');
    } else {
      setStatus('Success');
    }
  }, [value]);

  const setProgressValue = (newValue: number) => {
    setValue(Math.min(Math.max(newValue, 0), 100));
  };

  const style = { marginBottom: '1rem' };
  return (
    <>
      {/* <SEO title="Progress" keywords={['OAH', 'application', 'react']} /> */}
      <Row>
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <header>Progress Status</header>
            <CardBody>
              <Progress style={style} value={20} status="Primary">
                Primary
              </Progress>
              <Card accent="Info">
                <CardHeader>Card with accent</CardHeader>
                <CardBody>Hello Card component this body of card</CardBody>
                <CardFooter>Footer</CardFooter>
              </Card>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
