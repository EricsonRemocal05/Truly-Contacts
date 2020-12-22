import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header as SemanticHeader,
  Segment,
} from 'semantic-ui-react';
import Header from '../../components/Header';

const RegisterUI = ({ form: { onChange, form, registerFormValid } }) => {
  return (
    <div>
      <Header />
      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
          <SemanticHeader>Signup Here</SemanticHeader>
          <Segment>
            <Form>
              <Form.Field>
                <Form.Input
                  value={form.username || ''}
                  onChange={onChange}
                  name='username'
                  placeholder='Username'
                  label='Username'
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={form.firstName || ''}
                  onChange={onChange}
                  name='firstName'
                  placeholder='First Name'
                  label='First Name'
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={form.lastName || ''}
                  onChange={onChange}
                  name='lastName'
                  placeholder='Last Name'
                  label='Last Name'
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={form.email || ''}
                  onChange={onChange}
                  name='email'
                  type='email'
                  placeholder='Email'
                  label='Email'
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={form.password || ''}
                  onChange={onChange}
                  name='password'
                  type='password'
                  placeholder='Password'
                  label='Password'
                />
              </Form.Field>
              <Button disabled={registerFormValid} fluid primary type='submit'>
                Submit
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default RegisterUI;
