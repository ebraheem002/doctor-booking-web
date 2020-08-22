import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignInSection from '../components/SignInPage/SignInSection';
import renderer from 'react-test-renderer';
import DoctorInfoProvider from '../DoctorContext';

test('sign in section is rendering ', () => {
  render(
    <DoctorInfoProvider>
      <SignInSection />
    </DoctorInfoProvider>
  );
});

test('sign in page renders correctly', () => {
  const tree = renderer
    .create(
      <DoctorInfoProvider>
        <SignInSection />
      </DoctorInfoProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('e-mail should be string', () => {
  const signIn = render(
    <DoctorInfoProvider>
      <SignInSection />
    </DoctorInfoProvider>
  );
  const input = signIn.getByPlaceholderText('E-mail');
  fireEvent.change(input, { target: { value: 'anything@anything.com' } });
  expect(input.value).toBe('anything@anything.com');
});
