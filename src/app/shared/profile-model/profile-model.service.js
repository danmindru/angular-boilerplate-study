angular.module('abs.service.profile').service('ProfileModel', profileModelService);

function profileModelService(){
  return {
    providerIndex: providerIndex,
    providerProfile: providerProfile
  };

  function providerIndex(){
    return {
      0: {
        id: 'quick-pot',
        name: 'QuickPot',
        address: {
          city: 'Aarhus C',
          street: 'Trindsøvej 5',
          postcode: 8000
        }
      },
      1: {
        id: 'beni-auto',
        name: 'Beni Auto',
        address: {
          city: 'Aarhus N',
          street: 'Brendstrupvej 46',
          postcode: 8200
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
}