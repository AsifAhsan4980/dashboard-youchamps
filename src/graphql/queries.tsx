/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const searchUsers = /* GraphQL */ `
  query SearchUsers(
    $filter: SearchableUserFilterInput
    $sort: [SearchableUserSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableUserAggregationInput]
  ) {
    searchUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getAccountVarification = /* GraphQL */ `
  query GetAccountVarification($id: ID!) {
    getAccountVarification(id: $id) {
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
export const listAccountVarifications = /* GraphQL */ `
  query ListAccountVarifications(
    $filter: ModelAccountVarificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccountVarifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const searchAccountVarifications = /* GraphQL */ `
  query SearchAccountVarifications(
    $filter: SearchableAccountVarificationFilterInput
    $sort: [SearchableAccountVarificationSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableAccountVarificationAggregationInput]
  ) {
    searchAccountVarifications(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getAccountInformation = /* GraphQL */ `
  query GetAccountInformation($id: ID!) {
    getAccountInformation(id: $id) {
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
export const listAccountInformations = /* GraphQL */ `
  query ListAccountInformations(
    $filter: ModelAccountInformationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccountInformations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const searchAccountInformations = /* GraphQL */ `
  query SearchAccountInformations(
    $filter: SearchableAccountInformationFilterInput
    $sort: [SearchableAccountInformationSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableAccountInformationAggregationInput]
  ) {
    searchAccountInformations(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getPayment = /* GraphQL */ `
  query GetPayment($id: ID!) {
    getPayment(id: $id) {
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
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const byMerchantIDPayment = /* GraphQL */ `
  query ByMerchantIDPayment(
    $merchantID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byMerchantIDPayment(
      merchantID: $merchantID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const searchPayments = /* GraphQL */ `
  query SearchPayments(
    $filter: SearchablePaymentFilterInput
    $sort: [SearchablePaymentSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchablePaymentAggregationInput]
  ) {
    searchPayments(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
