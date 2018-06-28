import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Elements,StripeProvider} from 'react-stripe-elements';
import InjectedCheckoutForm from './CheckoutForm';


class App extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_t5G8Bzv1VkotnaWLl4E5HYro">
        <Elements>
          <InjectedCheckoutForm />
        </Elements>
      </StripeProvider>
    );
  }
}

export default App;
