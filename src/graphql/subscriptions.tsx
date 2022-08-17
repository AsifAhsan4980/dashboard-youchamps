/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      customApiKey
      userName
      owner
      firstName
      lastName
      profilePhotoActive
      fullName
      email
      phone
      gender
      dobDay
      dobMonth
      dobYear
      countryID
      stateID
      Address
      homestateCountryID
      homestateID
      homestateCity
      homeAddress
      emailNotification
      pushNotification
      hasAcceptedCockie
      isAccountVerified
      isActive
      isTFAActive
      isVerified
      isAdmin
      signUpDate
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      customApiKey
      userName
      owner
      firstName
      lastName
      profilePhotoActive
      fullName
      email
      phone
      gender
      dobDay
      dobMonth
      dobYear
      countryID
      stateID
      Address
      homestateCountryID
      homestateID
      homestateCity
      homeAddress
      emailNotification
      pushNotification
      hasAcceptedCockie
      isAccountVerified
      isActive
      isTFAActive
      isVerified
      isAdmin
      signUpDate
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      customApiKey
      userName
      owner
      firstName
      lastName
      profilePhotoActive
      fullName
      email
      phone
      gender
      dobDay
      dobMonth
      dobYear
      countryID
      stateID
      Address
      homestateCountryID
      homestateID
      homestateCity
      homeAddress
      emailNotification
      pushNotification
      hasAcceptedCockie
      isAccountVerified
      isActive
      isTFAActive
      isVerified
      isAdmin
      signUpDate
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAccountVarification = /* GraphQL */ `
  subscription OnCreateAccountVarification {
    onCreateAccountVarification {
      id
      merchantID
      requestType
      paymentCard
      cardDetails
      requestStatus
      statusCode
      statusDetail
      requestDate
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAccountVarification = /* GraphQL */ `
  subscription OnUpdateAccountVarification {
    onUpdateAccountVarification {
      id
      merchantID
      requestType
      paymentCard
      cardDetails
      requestStatus
      statusCode
      statusDetail
      requestDate
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAccountVarification = /* GraphQL */ `
  subscription OnDeleteAccountVarification {
    onDeleteAccountVarification {
      id
      merchantID
      requestType
      paymentCard
      cardDetails
      requestStatus
      statusCode
      statusDetail
      requestDate
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAccountInformation = /* GraphQL */ `
  subscription OnCreateAccountInformation {
    onCreateAccountInformation {
      id
      merchantID
      requestType
      paymentCard
      billingAddress
      cardDetails
      requestStatus
      statusCode
      statusDetail
      requestDate
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAccountInformation = /* GraphQL */ `
  subscription OnUpdateAccountInformation {
    onUpdateAccountInformation {
      id
      merchantID
      requestType
      paymentCard
      billingAddress
      cardDetails
      requestStatus
      statusCode
      statusDetail
      requestDate
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAccountInformation = /* GraphQL */ `
  subscription OnDeleteAccountInformation {
    onDeleteAccountInformation {
      id
      merchantID
      requestType
      paymentCard
      billingAddress
      cardDetails
      requestStatus
      statusCode
      statusDetail
      requestDate
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePayment = /* GraphQL */ `
  subscription OnCreatePayment {
    onCreatePayment {
      id
      merchantID
      merchant {
        id
        customApiKey
        userName
        owner
        firstName
        lastName
        profilePhotoActive
        fullName
        email
        phone
        gender
        dobDay
        dobMonth
        dobYear
        countryID
        stateID
        Address
        homestateCountryID
        homestateID
        homestateCity
        homeAddress
        emailNotification
        pushNotification
        hasAcceptedCockie
        isAccountVerified
        isActive
        isTFAActive
        isVerified
        isAdmin
        signUpDate
        createdAt
        updatedAt
      }
      requestID
      requestType
      taTotal
      taCurrency
      CardNumber
      SecurityCode
      ExpiryDate
      currencyConversion
      clientRequestId
      apiTraceId
      ipgTransactionId
      transactionType
      transactionTime
      approveTotal
      approveCurrency
      transactionStatus
      schemeTransactionId
      responseCode
      responseMessage
      authorizationCode
      statusCode
      statusDetail
      requestDate
      startDate
      numberOfPayments
      maximumFailures
      invoiceNumber
      purchaseOrderNumber
      transactionOrigin
      dynamicMerchantName
      frequency
      paymentMethod
      clientLocale
      orderId
      storeId
      runCount
      state
      comments
      isDeleted
      createdAt
      tranTime
      updatedAt
    }
  }
`;
export const onUpdatePayment = /* GraphQL */ `
  subscription OnUpdatePayment {
    onUpdatePayment {
      id
      merchantID
      merchant {
        id
        customApiKey
        userName
        owner
        firstName
        lastName
        profilePhotoActive
        fullName
        email
        phone
        gender
        dobDay
        dobMonth
        dobYear
        countryID
        stateID
        Address
        homestateCountryID
        homestateID
        homestateCity
        homeAddress
        emailNotification
        pushNotification
        hasAcceptedCockie
        isAccountVerified
        isActive
        isTFAActive
        isVerified
        isAdmin
        signUpDate
        createdAt
        updatedAt
      }
      requestID
      requestType
      taTotal
      taCurrency
      CardNumber
      SecurityCode
      ExpiryDate
      currencyConversion
      clientRequestId
      apiTraceId
      ipgTransactionId
      transactionType
      transactionTime
      approveTotal
      approveCurrency
      transactionStatus
      schemeTransactionId
      responseCode
      responseMessage
      authorizationCode
      statusCode
      statusDetail
      requestDate
      startDate
      numberOfPayments
      maximumFailures
      invoiceNumber
      purchaseOrderNumber
      transactionOrigin
      dynamicMerchantName
      frequency
      paymentMethod
      clientLocale
      orderId
      storeId
      runCount
      state
      comments
      isDeleted
      createdAt
      tranTime
      updatedAt
    }
  }
`;
export const onDeletePayment = /* GraphQL */ `
  subscription OnDeletePayment {
    onDeletePayment {
      id
      merchantID
      merchant {
        id
        customApiKey
        userName
        owner
        firstName
        lastName
        profilePhotoActive
        fullName
        email
        phone
        gender
        dobDay
        dobMonth
        dobYear
        countryID
        stateID
        Address
        homestateCountryID
        homestateID
        homestateCity
        homeAddress
        emailNotification
        pushNotification
        hasAcceptedCockie
        isAccountVerified
        isActive
        isTFAActive
        isVerified
        isAdmin
        signUpDate
        createdAt
        updatedAt
      }
      requestID
      requestType
      taTotal
      taCurrency
      CardNumber
      SecurityCode
      ExpiryDate
      currencyConversion
      clientRequestId
      apiTraceId
      ipgTransactionId
      transactionType
      transactionTime
      approveTotal
      approveCurrency
      transactionStatus
      schemeTransactionId
      responseCode
      responseMessage
      authorizationCode
      statusCode
      statusDetail
      requestDate
      startDate
      numberOfPayments
      maximumFailures
      invoiceNumber
      purchaseOrderNumber
      transactionOrigin
      dynamicMerchantName
      frequency
      paymentMethod
      clientLocale
      orderId
      storeId
      runCount
      state
      comments
      isDeleted
      createdAt
      tranTime
      updatedAt
    }
  }
`;
