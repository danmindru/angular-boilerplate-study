angular.module('abs.model.profile.customer').service('CustomerModel', customerModelService);

function customerModelService(){
  return {
    customerIndex: customerIndex,
    customerProfile: customerProfile
  };

  function customerIndex(){
    return {
      'josh-stevenson': {
        id: 'josh-stevenson',
        name: 'Stevenson',
        surname: 'Josh'
      },
      'jenny-smith': {
        id: 'jenny-smith',
        name: 'Smith',
        surname: 'Jenny'
      },
      'alex-beachman': {
        id: 'alex-beachman',
        name: 'Beachman',
        surname: 'Alex'
      }
    };
  }

  function customerProfile(customerId){
    var availableCustomers = {
      'josh-stevenson': {
        id: 'josh-stevenson',
        name: 'Stevenson',
        surname: 'Josh',
        address: {
          city: 'Aarhus C',
          street: 'Nordre Ringgade 1',
          postcode: 8000
        }
      },
      'jenny-smith': {
        id: 'jenny-smith',
        name: 'Smith',
        surname: 'Jenny',
        address: {
          city: 'Aarhus V',
          street: 'Haslehøjvej',
          postcode: 8210
        }
      },
      'alex-beachman': {
        id: 'alex-beachman',
        name: 'Beachman',
        surname: 'Alex',
        address: {
          city: 'Aarhus N',
          street: 'Møllevangs Alle 157',
          postcode: 8200
        }
      }
    };

    var currentCustomer = {},
        customerExists = false;

    for (var key in availableCustomers) {
      if (availableCustomers.hasOwnProperty(key)) {
        if(customerId === key){
          customerExists = true;
          currentCustomer = availableCustomers[key];
        }
      }
    }

    if(!customerExists) {
      currentCustomer.error = true;
      currentCustomer.message = 'Could not find the customer with id ' + customerId;
    }

    return currentCustomer;
  }
}