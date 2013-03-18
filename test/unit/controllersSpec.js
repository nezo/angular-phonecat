'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });


  beforeEach(module('phonecatServicesMocks'));


  describe('PhoneListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller(PhoneListCtrl, {$scope: scope});
    }));


    it('should create "phones" model with 2 phones fetched from xhr', function() {
      expect(scope.phones).toEqualData(
          [{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });

    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('age');
    });
  });


  describe('PhoneDetailCtrl', function(){
    var scope, $httpBackend, ctrl,
        xyzPhoneData = function() {
          return {
            name: 'phone xyz',
                images: ['image/url1.png', 'image/url2.png']
          }
        };

    beforeEach(inject(function($rootScope, $routeParams, $controller) {
      $routeParams.phoneId = 'xyz';
      scope = $rootScope.$new();
      ctrl = $controller(PhoneDetailCtrl, {$scope: scope});
    }));

    it('should fetch phone detail', function() {
      expect(scope.phone).toEqualData(xyzPhoneData());
    });
  });
});
