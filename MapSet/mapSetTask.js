// Data set we are going to work with in tasks
const creditCards = [
    {
        id: 1,
        expirationDate: '2024-04-19T04:00:00Z',
        service: 'Mastercard',
        creditLimit: 1000
    },
    {
        id: 2,
        expirationDate: '2024-06-21T04:00:00Z',
        service: 'Visa',
        creditLimit: 10000
    },
    {
        id: 3,
        expirationDate: '2024-05-17T04:00:00Z',
        service: 'Visa',
        creditLimit: 1000
    },
    {
        id: 4,
        expirationDate: '2024-06-21T04:00:00Z',
        service: 'Mastercard',
        creditLimit: 10000
    }
    // Please add more data here it will help you to test your function well:
    // 1. id should be unique
    // 2. expirationDate, service, creditLimit could be not unique
    // 3. expirationDate could be in the past (expired card) or in the future
    // 4. service could be Visa and Mastercard only
]

/*
    Tasks:
    1. Write a function which returns array of expiration dates (remove duplications, remove expired cards, sort them from which are going to expire soon to which will expire later)
    2. Write a function which return array of credit limits (remove duplications, sort them from biggest limit to lovest)
    3. Write a function which returns object of credit card which has the most recent expiration date (but card shouldn't be expired), the biggest credit limit and service of Mastercard (we can call it topPriorityCard)
    4. Write a function which returns object of credit card by it's ID
    5. Write a fucntion which accepts expirationDate, service and creditLimit as a parameter and looks for a card with such params and if no found throws useful error
*/


const currentDate = new Date();

// Task 1
function getExpiryDates(cards) {
    const validAndUniqueDates = cards.filter(card => {
        const expiryDate = new Date(card.expirationDate);
        return expiryDate > currentDate;
    }).map(card => card.expirationDate)
      .filter((date, index, self) => self.indexOf(date) === index)
      .sort((a, b) => new Date(a) - new Date(b));
    return validAndUniqueDates;
}

// Task 2
function getCreditLimits(cards) {
    const uniqueLimits = cards
      .map(card => card.creditLimit)
      .filter((limit, index, self) => self.indexOf(limit) === index)
      .sort((a, b) => b - a);
    return uniqueLimits;
}

// Task 3
function topPriorityCard(cards) {
    const validMasterCards = cards.filter(card => {
        const expiryDate = new Date(card.expirationDate);
        return expiryDate > currentDate && card.service === 'Mastercard';
    });
    
    if (validMasterCards.length === 0) {
      return null;
    }
    
    const maxLimitCard = validMasterCards.reduce((prev, current) => {
        return (prev.creditLimit > current.creditLimit) ? prev : current;
    });

    return maxLimitCard;
}

// Task 4
function getCardById(cards, id) {
    const card = cards.find(card => card.id === id);
    if (!card) {
        throw new Error(`No card found with id ${id}`);
    }
    return card;
}

// Task 5
function findCardByAttributes(cards, expirationDate, service, creditLimit) {
    const card = cards.find(card => card.expirationDate === expirationDate && card.service === service && card.creditLimit === creditLimit);
    if (!card) {
        throw new Error(`No card found with expiration date ${expirationDate}, service ${service} and credit limit ${creditLimit}`);
    }
    return card;
}

// Usage examples
console.log(getExpiryDates(creditCards));
console.log(getCreditLimits(creditCards));
console.log(topPriorityCard(creditCards));
try {
    console.log(getCardById(creditCards, 2));
} catch (error) {
    console.error(error.message);
}
try {
    console.log(findCardByAttributes(creditCards, '2024-06-21T04:00:00Z', 'Mastercard', 10000));
} catch (error) {
    console.error(error.message);
}
