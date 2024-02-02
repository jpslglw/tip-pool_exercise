describe("Payment test", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = '1000';
      tipAmtInput.value = '100';
    });
  
    it('Payment info tests to check', function () {
        submitPaymentInfo();

        expect(allPayments['payment1'].billAmt).toEqual('1000');
        expect(allPayments['payment1'].tipAmt).toEqual('100'); // amounts defined above
        expect(allPayments['payment1'].tipPercent).toEqual(10); // ratio
    });
  
    it('Testing Current payment function to equal given object', function () {
        createCurPayment()

        expect(billAmt.value).toEqual('1000');
        expect(tipAmt.value).toEqual('100');
        expect(calculateTipPercent(billAmt.value, tipAmt.value)).toEqual(10); // checking the contents again with given values, but createCurPayment() function
    });
  
    it('Check payment table entries', function () {
        let payment = createCurPayment();
        allPayments['payment1'] = payment;
    
        appendPaymentTable(payment); // recreating a new table 
    
        let tdList = document.querySelectorAll('#paymentTable tbody tr td');
    
        expect(tdList.length).toEqual(3);
        expect(tdList[0].innerText).toEqual('$1000');
        expect(tdList[1].innerText).toEqual('$100');
        expect(tdList[2].innerText).toEqual('10%'); // checking table contents
    });

    it('Check Summary', function () {
        billAmtInput.value = '';
        tipAmtInput.value = ''; // creating empty values
    
        expect(createCurPayment()).toEqual(undefined); // shouldn't have a value
    });
  
    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentId = 0;
        allPayments = {};
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
    });
  });
  