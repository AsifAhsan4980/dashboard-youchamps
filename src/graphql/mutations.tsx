/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deletePayment = /* GraphQL */ `
  mutation DeletePayment(
    $input: DeletePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    deletePayment(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createAccountVarification = /* GraphQL */ `
  mutation CreateAccountVarification(
    $input: CreateAccountVarificationInput!
    $condition: ModelAccountVarificationConditionInput
  ) {
    createAccountVarification(input: $input, condition: $condition) {
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
export const updateAccountVarification = /* GraphQL */ `
  mutation UpdateAccountVarification(
    $input: UpdateAccountVarificationInput!
    $condition: ModelAccountVarificationConditionInput
  ) {
    updateAccountVarification(input: $input, condition: $condition) {
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
export const deleteAccountVarification = /* GraphQL */ `
  mutation DeleteAccountVarification(
    $input: DeleteAccountVarificationInput!
    $condition: ModelAccountVarificationConditionInput
  ) {
    deleteAccountVarification(input: $input, condition: $condition) {
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
export const createAccountInformation = /* GraphQL */ `
  mutation CreateAccountInformation(
    $input: CreateAccountInformationInput!
    $condition: ModelAccountInformationConditionInput
  ) {
    createAccountInformation(input: $input, condition: $condition) {
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
export const updateAccountInformation = /* GraphQL */ `
  mutation UpdateAccountInformation(
    $input: UpdateAccountInformationInput!
    $condition: ModelAccountInformationConditionInput
  ) {
    updateAccountInformation(input: $input, condition: $condition) {
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
export const deleteAccountInformation = /* GraphQL */ `
  mutation DeleteAccountInformation(
    $input: DeleteAccountInformationInput!
    $condition: ModelAccountInformationConditionInput
  ) {
    deleteAccountInformation(input: $input, condition: $condition) {
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
export const createPayment = /* GraphQL */ `
  mutation CreatePayment(
    $input: CreatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    createPayment(input: $input, condition: $condition) {
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
export const updatePayment = /* GraphQL */ `
  mutation UpdatePayment(
    $input: UpdatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    updatePayment(input: $input, condition: $condition) {
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
