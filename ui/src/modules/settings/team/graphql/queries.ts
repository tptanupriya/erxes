import { usersQueries } from 'erxes-ui'

const detailFields = usersQueries.detailFields;

const userDetail = `
  query userDetail($_id: String) {
    userDetail(_id: $_id) {
      _id
      username
      email
      status
      groupIds

      details {
        ${detailFields}
      }
      links
      emailSignatures
      getNotificationByEmail
    }
  }
`;

const userConversations = `
  query userConversations($_id: String!, $perPage: Int) {
    userConversations(_id: $_id, perPage: $perPage) {
    list {
      _id
      createdAt
      customer {
        _id
        firstName
        lastName
        primaryEmail
        primaryPhone
        }
      }
      totalCount
    }
  }
`;

const users = usersQueries.users;

const allUsers = `
  query allUsers($isActive: Boolean) {
    allUsers(isActive: $isActive) {
      _id
      email
      username
      isActive
      details {
        avatar
        fullName
      }
    }
  }
`;

const listParamsDef = `
  $searchValue: String,
  $isActive: Boolean,
  $ids: [String],
  $brandIds: [String]
`;

const listParamsValue = `
  searchValue: $searchValue,
  isActive: $isActive,
  ids: $ids,
  brandIds: $brandIds
`;

const usersTotalCount = `
  query usersTotalCount(${listParamsDef}) {
    usersTotalCount(${listParamsValue})
  }
`;

export default {
  userDetail,
  userConversations,
  users,
  usersTotalCount,
  allUsers
};
