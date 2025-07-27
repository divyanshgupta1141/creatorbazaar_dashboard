import React, { useState, useEffect } from 'react';
import BalanceCard from '../payouts-dashboard/components/BalanceCard';
import TransactionHistory from '../payouts-dashboard/components/TransactionHistory';
import PayoutRequest from '../payouts-dashboard/components/PayoutRequest';
import EarningsChart from '../payouts-dashboard/components/EarningsChart';
import TaxInformation from '../payouts-dashboard/components/TaxInformation';
import IntegrationStatus from '../payouts-dashboard/components/IntegrationStatus';

const PayoutsDashboard = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  // Mock data for balance
  const balanceData = {
    available: 45750,
    pending: 12300,
    total: 187500
  };

  // Mock data for transactions
  const transactionData = [
    {
      id: "TXN001",
      date: "2024-01-15",
      amount: 5500,
      method: "UPI",
      status: "completed",
      reference: "UPI/456789123"
    },
    {
      id: "TXN002",
      date: "2024-01-12",
      amount: 12000,
      method: "Bank Transfer",
      status: "completed",
      reference: "NEFT/789123456"
    },
    {
      id: "TXN003",
      date: "2024-01-10",
      amount: 3200,
      method: "Digital Wallet",
      status: "pending",
      reference: "WALLET/321654987"
    },
    {
      id: "TXN004",
      date: "2024-01-08",
      amount: 8750,
      method: "UPI",
      status: "completed",
      reference: "UPI/654321789"
    },
    {
      id: "TXN005",
      date: "2024-01-05",
      amount: 15600,
      method: "Bank Transfer",
      status: "failed",
      reference: "NEFT/987654321"
    },
    {
      id: "TXN006",
      date: "2024-01-03",
      amount: 4300,
      method: "UPI",
      status: "completed",
      reference: "UPI/147258369"
    },
    {
      id: "TXN007",
      date: "2024-01-01",
      amount: 9800,
      method: "Bank Transfer",
      status: "completed",
      reference: "NEFT/369258147"
    }
  ];

  // Mock data for bank accounts
  const bankAccounts = [
    {
      id: "bank1",
      bankName: "State Bank of India",
      accountNumber: "1234567890123456",
      ifsc: "SBIN0001234"
    },
    {
      id: "bank2",
      bankName: "HDFC Bank",
      accountNumber: "9876543210987654",
      ifsc: "HDFC0001234"
    }
  ];

  // Mock data for UPI IDs
  const upiIds = [
    {
      id: "upi1",
      upiId: "creator@paytm",
      provider: "Paytm"
    },
    {
      id: "upi2",
      upiId: "creator@phonepe",
      provider: "PhonePe"
    }
  ];

  // Mock data for earnings chart
  const chartData = [
    { date: "2024-01-01", earnings: 2500 },
    { date: "2024-01-02", earnings: 3200 },
    { date: "2024-01-03", earnings: 4100 },
    { date: "2024-01-04", earnings: 3800 },
    { date: "2024-01-05", earnings: 5200 },
    { date: "2024-01-06", earnings: 4600 },
    { date: "2024-01-07", earnings: 5800 },
    { date: "2024-01-08", earnings: 6200 },
    { date: "2024-01-09", earnings: 4900 },
    { date: "2024-01-10", earnings: 7100 },
    { date: "2024-01-11", earnings: 6800 },
    { date: "2024-01-12", earnings: 8200 },
    { date: "2024-01-13", earnings: 7500 },
    { date: "2024-01-14", earnings: 9100 },
    { date: "2024-01-15", earnings: 8800 }
  ];

  // Mock data for tax information
  const taxData = {
    "2024": {
      totalIncome: 187500,
      gstCollected: 33750,
      tdsDeducted: 9375,
      grossRevenue: 220000,
      platformFees: 11000,
      paymentCharges: 4400,
      netTaxableIncome: 204600,
      gstRegistered: true,
      gstNumber: "27ABCDE1234F1Z5"
    },
    "2023": {
      totalIncome: 145000,
      gstCollected: 26100,
      tdsDeducted: 7250,
      grossRevenue: 170000,
      platformFees: 8500,
      paymentCharges: 3400,
      netTaxableIncome: 158100,
      gstRegistered: true,
      gstNumber: "27ABCDE1234F1Z5"
    }
  };

  // Mock data for integrations
  const integrationData = [
    {
      id: "razorpay",
      name: "Razorpay",
      description: "Primary payment gateway for Indian market",
      icon: "CreditCard",
      status: "connected",
      lastSync: "2 mins ago",
      details: {
        successRate: 98.5,
        avgProcessing: "2-3 sec",
        totalVolume: 187500,
        fees: 2.0
      }
    },
    {
      id: "payu",
      name: "PayU",
      description: "Alternative payment gateway",
      icon: "Wallet",
      status: "connected",
      lastSync: "5 mins ago",
      details: {
        successRate: 97.2,
        avgProcessing: "3-5 sec",
        totalVolume: 95000,
        fees: 2.3
      }
    },
    {
      id: "phonepe",
      name: "PhonePe Business",
      description: "UPI and digital wallet payments",
      icon: "Smartphone",
      status: "pending",
      lastSync: null
    },
    {
      id: "paytm",
      name: "Paytm Business",
      description: "Comprehensive payment solution",
      icon: "Building2",
      status: "disconnected",
      error: "API credentials expired. Please reconnect."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">
          Payouts Dashboard
        </h1>
        <p className="text-gray-400">
          Manage your earnings, track payouts, and handle tax compliance
        </p>
      </div>

      {/* Balance Overview */}
      <BalanceCard balance={balanceData} />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        {/* Left Column - 2/3 width */}
        <div className="xl:col-span-2 space-y-6">
          <EarningsChart chartData={chartData} />
          <TransactionHistory transactions={transactionData} />
        </div>

        {/* Right Column - 1/3 width */}
        <div className="space-y-6">
          <PayoutRequest 
            availableBalance={balanceData.available}
            bankAccounts={bankAccounts}
            upiIds={upiIds}
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TaxInformation taxData={taxData} />
        <IntegrationStatus integrations={integrationData} />
      </div>
    </div>
  );
};

export default PayoutsDashboard;