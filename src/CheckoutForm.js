// CheckoutForm.js
import React from 'react';
import {injectStripe} from 'react-stripe-elements';

// import AddressSection from './AddressSection';
import CardSection from './CardSection';

class CheckoutForm extends React.Component {
  handleSubmit = async(ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();
    alert('fuck')

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    // this.props.stripe.createToken({name: 'Xiang Li'}).then(({token}) => {
    //   console.log('Received Stripe token:', token);
    // });


    // However, this line of code will do the same thing:
    //
    let token = await this.props.stripe.createToken({type: 'card', name: 'Xiang Li'});
    alert(JSON.stringify(token))
    // You can also use createSource to create Sources. See our Sources
    // documentation for more: https://stripe.com/docs/stripe-js/reference#stripe-create-source
    //
    // this.props.stripe.createSource({type: 'card', name: 'Jenny Rosen'});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CardSection />
        <button>Confirm order</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);