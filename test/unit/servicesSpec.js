'use strict';

/* jasmine specs for services go here */

describe('service', function() {
    var $httpBackend, Phone;

    beforeEach(module('phonecatServices'));

    beforeEach(function(){
      this.addMatchers({
        toEqualData: function(expected) {
          return angular.equals(this.actual, expected);
        }
      });
    });

    describe('PhoneListCtrl', function(){

      var Phone,
	samplePhoneList = function() {
        return [
          {name: 'Nexus S'}, {name: 'Motorola DROID'}
        ];
      };

      beforeEach(inject(function(_$httpBackend_, _Phone_) {
        $httpBackend = _$httpBackend_;
        Phone = _Phone_;

        $httpBackend.expectGET('phones/phones.json').
          respond(samplePhoneList());
      }));

      it('should create "phones" model with 2 phones fetched from xhr', function() {
        var results = Phone.query();

        $httpBackend.flush();
        expect(results).toEqualData(samplePhoneList());
      });
    });

    describe('PhoneDetailCtrl', function(){
      var Phone,
	xyzPhoneData = function() {
          return {
            name: 'phone xyz',
            images: ['image/url1.png', 'image/url2.png']
          };
        };

      beforeEach(inject(function(_$httpBackend_, _Phone_) {
        $httpBackend = _$httpBackend_;
        Phone = _Phone_;

        $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData());
      }));

      it('should fetch phone detail', function(){
        var results = Phone.get({phoneId: 'xyz'});
        $httpBackend.flush();

        expect(results).toEqualData(xyzPhoneData());
      });
    });
  });

