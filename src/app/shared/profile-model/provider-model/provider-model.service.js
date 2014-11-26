angular.module('abs.model.profile.provider').service('ProviderModel', providerModelService);

function providerModelService(){
  return {
    providerIndex: providerIndex,
    providerProfile: providerProfile,
    otherProviders: otherProviders
  };

  function providerIndex(){
    return {
      'quick-pot': {
        id: 'quick-pot',
        name: 'QuickPot',
        address: {
          city: 'Aarhus C',
          street: 'Trindsøvej 5',
          postcode: 8000
        }
      },
      'beni-auto': {
        id: 'beni-auto',
        name: 'Beni Auto',
        address: {
          city: 'Aarhus N',
          street: 'Brendstrupvej 46',
          postcode: 8200
        }
      },
      'hella-service': {
        id: 'hella-service',
        name: 'Hella Service Partners',
        address: {
          city: 'Odense SV',
          street: 'Hvidkærvej 23D',
          postcode: 5250
        }
      }
    };
  }

  function providerProfile(providerId){
    var availableProviders = {
      'quick-pot': {
        id: 'quick-pot',
        name: 'QuickPot',
        address: {
          city: 'Aarhus C',
          street: 'Trindsøvej 5',
          postcode: 8000
        },
        contact: {
          email: '8000@quickpot.dk',
          phone: '86 15 85 44'
        },
        services: {
          0: 'Checking the pollen filter',
          1: 'Visual inspection of springs',
          2: 'Checking wheel bearings',
          3: 'Checking power steering fluid',
          4: 'Check the tire pressure',
          5: 'Lubrication of door hinges.',
          6: 'Checking the wiper',
          7: 'Replacing lights'
        }
      },
      'beni-auto': {
        id: 'beni-auto',
        name: 'Beni Auto',
        address: {
          city: 'Aarhus N',
          street: 'Brendstrupvej 46',
          postcode: 8200
        },
        contact: {
          email: 'beni-auto@post.tele.dk',
          phone: '40 45 15 16'
        },
        services: {
          0: 'Checking wheel bearings',
          1: 'Checking power steering fluid',
          2: 'Check the tire pressure',
          3: 'Lubrication of door hinges.',
          4: 'Replacing lights'
        }
      },
      'hella-service': {
        id: 'hella-service',
        name: 'Hella Service Partners',
        address: {
          city: 'Odense SV',
          street: 'Hvidkærvej 23D',
          postcode: 5250
        },
        contact: {
          email: 'info@hellaservicepartner.dk ',
          phone: '65 65 50 30'
        },
        services: {}
      }
    };

    var currentProvider = {},
        providerExists = false;

    for (var key in availableProviders) {
      if (availableProviders.hasOwnProperty(key)) {
        if(providerId === key){
          providerExists = true;
          currentProvider = availableProviders[key];
        }
      }
    }

    if(!providerExists) {
      currentProvider.error = true;
      currentProvider.message = 'Could not find the provider with id ' + providerId;
    }

    return currentProvider;
  }

  function otherProviders(providerId){
    var providerIndex = {
      'quick-pot': {
        id: 'quick-pot',
        name: 'QuickPot',
        address: {
          city: 'Aarhus C',
          street: 'Trindsøvej 5',
          postcode: 8000
        }
      },
      'beni-auto': {
        id: 'beni-auto',
        name: 'Beni Auto',
        address: {
          city: 'Aarhus N',
          street: 'Brendstrupvej 46',
          postcode: 8200
        }
      },
      'hella-service': {
        id: 'hella-service',
        name: 'Hella Service Partners',
        address: {
          city: 'Odense SV',
          street: 'Hvidkærvej 23D',
          postcode: 5250
        }
      }
    };

    providerIndex[providerId] = null;

    return providerIndex;
  }
}