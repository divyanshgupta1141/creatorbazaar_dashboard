import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const PayoutRequest = ({ availableBalance, bankAccounts, upiIds }) => {
  const [payoutAmount, setPayoutAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('bank');
  const [selectedAccount, setSelectedAccount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const minPayout = 100;
  const maxPayout = availableBalance;

  const handlePayoutRequest = async () => {
    if (!payoutAmount || parseFloat(payoutAmount) < minPayout) {
      alert(`Minimum payout amount is ₹${minPayout}`);
      return;
    }

    if (parseFloat(payoutAmount) > maxPayout) {
      alert(`Maximum payout amount is ₹${maxPayout.toLocaleString('en-IN')}`);
      return;
    }

    if (!selectedAccount) {
      alert('Please select a payout method');
      return;
    }

    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      alert(`Payout request of ₹${parseFloat(payoutAmount).toLocaleString('en-IN')} has been submitted successfully!`);
      setPayoutAmount('');
      setSelectedAccount('');
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="bg-surface rounded-xl card-shadow p-6 mb-6">
      <div className="flex items-center space-x-3 mb-6">
        <Icon name="Send" size={24} className="text-primary" />
        <h3 className="text-lg font-semibold text-text-primary">Request Payout</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Amount Section */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Payout Amount
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary">₹</span>
            <Input
              type="number"
              placeholder="Enter amount"
              value={payoutAmount}
              onChange={(e) => setPayoutAmount(e.target.value)}
              className="pl-8"
              min={minPayout}
              max={maxPayout}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-text-secondary">
            <span>Min: ₹{minPayout}</span>
            <span>Available: ₹{maxPayout.toLocaleString('en-IN')}</span>
          </div>

          {/* Quick Amount Buttons */}
          <div className="flex flex-wrap gap-2 mt-3">
            {[1000, 5000, 10000, maxPayout].map((amount) => (
              <button
                key={amount}
                onClick={() => setPayoutAmount(amount.toString())}
                className="px-3 py-1 text-sm bg-muted hover:bg-primary/10 text-text-secondary hover:text-primary rounded-lg transition-micro"
                disabled={amount > maxPayout}
              >
                ₹{amount.toLocaleString('en-IN')}
              </button>
            ))}
          </div>
        </div>

        {/* Payment Method Section */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Payout Method
          </label>
          
          {/* Method Tabs */}
          <div className="flex space-x-1 mb-4 bg-muted rounded-lg p-1">
            <button
              onClick={() => setSelectedMethod('bank')}
              className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-micro ${
                selectedMethod === 'bank' ?'bg-surface text-primary shadow-sm' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              Bank Transfer
            </button>
            <button
              onClick={() => setSelectedMethod('upi')}
              className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-micro ${
                selectedMethod === 'upi' ?'bg-surface text-primary shadow-sm' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              UPI
            </button>
          </div>

          {/* Bank Accounts */}
          {selectedMethod === 'bank' && (
            <div className="space-y-2">
              {bankAccounts.map((account) => (
                <label key={account.id} className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-micro">
                  <input
                    type="radio"
                    name="bankAccount"
                    value={account.id}
                    checked={selectedAccount === account.id}
                    onChange={(e) => setSelectedAccount(e.target.value)}
                    className="text-primary"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-text-primary">{account.bankName}</p>
                    <p className="text-xs text-text-secondary">****{account.accountNumber.slice(-4)}</p>
                  </div>
                  <Icon name="Building2" size={16} className="text-text-secondary" />
                </label>
              ))}
            </div>
          )}

          {/* UPI IDs */}
          {selectedMethod === 'upi' && (
            <div className="space-y-2">
              {upiIds.map((upi) => (
                <label key={upi.id} className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-micro">
                  <input
                    type="radio"
                    name="upiId"
                    value={upi.id}
                    checked={selectedAccount === upi.id}
                    onChange={(e) => setSelectedAccount(e.target.value)}
                    className="text-primary"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-text-primary">{upi.upiId}</p>
                    <p className="text-xs text-text-secondary">{upi.provider}</p>
                  </div>
                  <Icon name="Smartphone" size={16} className="text-text-secondary" />
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Processing Fee Info */}
      <div className="mt-6 p-4 bg-muted/30 rounded-lg">
        <div className="flex items-start space-x-2">
          <Icon name="Info" size={16} className="text-text-secondary mt-0.5" />
          <div className="text-sm text-text-secondary">
            <p>Processing fees: Bank Transfer (₹5), UPI (₹2)</p>
            <p>Processing time: Bank Transfer (1-2 business days), UPI (Instant)</p>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <Button
          variant="primary"
          onClick={handlePayoutRequest}
          loading={isProcessing}
          disabled={!payoutAmount || !selectedAccount || isProcessing}
          fullWidth
          iconName="Send"
          iconPosition="left"
        >
          {isProcessing ? 'Processing...' : 'Request Payout'}
        </Button>
      </div>
    </div>
  );
};

export default PayoutRequest;