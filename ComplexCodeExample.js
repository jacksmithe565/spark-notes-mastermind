/**
 * Filename: ComplexCodeExample.js
 * 
 * Description: This code showcases a complex banking system with multiple entity types and functionalities.
 * 
 * Author: [Your Name]
 * Date: [Date]
 */

// ------------------------------------
// Entities and Constants
// ------------------------------------

class Bank {
  constructor(name, address, phone) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.customers = [];
    this.accounts = [];
  }
  
  addCustomer(customer) {
    this.customers.push(customer);
  }
  
  addAccount(account) {
    this.accounts.push(account);
  }
}

class Customer {
  constructor(name, address, phoneNumber) {
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }
}

class Account {
  constructor(accountNumber, customer, balance = 0) {
    this.accountNumber = accountNumber;
    this.customer = customer;
    this.balance = balance;
  }
  
  deposit(amount) {
    this.balance += amount;
  }
  
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      throw new Error('Insufficient funds');
    }
  }
  
  getBalance() {
    return this.balance;
  }
}

// ------------------------------------
// Usage Example
// ------------------------------------

// Create Bank instance
const myBank = new Bank('My Bank', '123 Main St', '555-1234');

// Create Customers
const john = new Customer('John Doe', '456 Elm St', '555-5678');
const jane = new Customer('Jane Smith', '789 Oak Ave', '555-9012');
const mark = new Customer('Mark Johnson', '901 Pine Ln', '555-3456');

// Add Customers to Bank
myBank.addCustomer(john);
myBank.addCustomer(jane);
myBank.addCustomer(mark);

// Create Accounts
const johnAccount = new Account('123456', john);
const janeAccount = new Account('789012', jane, 1000);
const markAccount = new Account('345678', mark, 500);

// Add Accounts to Bank
myBank.addAccount(johnAccount);
myBank.addAccount(janeAccount);
myBank.addAccount(markAccount);

// Perform Transactions
johnAccount.deposit(500);
johnAccount.withdraw(200);
janeAccount.withdraw(750);

// Display Results
console.log(`Bank: ${myBank.name}`);
console.log(`Customers: ${myBank.customers.length}`);
console.log(`Accounts: ${myBank.accounts.length}`);
console.log(`Jane's Account Balance: ${janeAccount.getBalance()}`);
console.log(`Mark's Account Balance: ${markAccount.getBalance()}`);
