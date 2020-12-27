import React from 'react';
import { Prompt } from 'react-router-dom';
import {
  Button,
  Card,
  Form,
  Grid,
  Select,
  Header as SemanticHeader,
} from 'semantic-ui-react';
import Header from '../../../components/Header';
import countries from '../../../utils/countries';
import './index.css';

const CreateContact = ({
  onChange,
  onSubmit,
  formInvalid,
  loading,
  formIsHalfFilled,
}) => {
  return (
    <div>
      <Prompt
        when={formIsHalfFilled}
        message={JSON.stringify({
          header: 'Confirm',
          content: 'You have unsaved changes, Are you sure you want to leave?',
        })}
      />
      <Header />
      <Grid centered>
        <Grid.Column className='form-column'>
          <SemanticHeader>Create Contact</SemanticHeader>
          <Card fluid>
            <Card.Content>
              <Form unstackable>
                <div className='contact-picture'>
                  <span>Choose Picture</span>
                </div>
                <Form.Group widths={2}>
                  <Form.Input
                    label='First Name'
                    name='firstName'
                    onChange={onChange}
                    placeholder='First Name'
                  />
                  <Form.Input
                    label='Last Name'
                    name='lastName'
                    onChange={onChange}
                    placeholder='Last Name'
                  />
                </Form.Group>
                <Form.Group widths={2}>
                  <Form.Input
                    label='Country'
                    name='countryCode'
                    control={Select}
                    options={countries}
                    onChange={onChange}
                    placeholder='Country'
                  />
                  <Form.Input
                    label='PhoneNumber'
                    name='phoneNumber'
                    onChange={onChange}
                    placeholder='Phone Number'
                  />
                </Form.Group>
                <Form.Checkbox
                  label='Add to favorites'
                  name='isFavorite'
                  onChange={(e, data) => {
                    onChange(e, { name: 'isFavorite', value: data.checked });
                  }}
                />
                <Button
                  disabled={formInvalid || loading}
                  onClick={onSubmit}
                  primary
                  type='submit'
                  loading={loading}
                >
                  Submit
                </Button>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default CreateContact;
