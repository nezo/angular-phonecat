;'use strict'

angular.module('phonecatServicesMocks', []).factory('Phone', function() {
    return {
      query : function() {
        return [
          {name: 'Nexus S'}, {name: 'Motorola DROID'}
        ];
      },
      get: function(params) {
        return {
          name: 'phone ' + params.phoneId,
          images: ['image/url1.png', 'image/url2.png']
        };
      },
    };
  });

