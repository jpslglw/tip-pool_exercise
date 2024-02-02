describe("Helper's test", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = '1000';
      tipAmtInput.value = '100'; // initializing values
    });
  
    it('checks sumPaymentTotal function', function () {
      let payment = createCurPayment();
      allPayments['payment1'] = payment;

      expect(sumPaymentTotal('tipAmt')).toEqual(100); 
    });
  
    it('sum of all payments', function () {
      expect(sumPaymentTotal('billAmt')).toEqual(1000); // checking bill amount
    });
  
    it('sum of all tips', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(100); // checking tip amount
    });

    it('calculate tip percentage', function () {
        expect(calculateTipPercent(100, 50)).toEqual(50); // checking tipe percent
    });
  
    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
    });
});