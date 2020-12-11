import gql from 'graphql-tag';
import * as compose from 'lodash.flowright';
import { Alert, confirm } from 'modules/common/utils';
import { generatePaginationParams } from 'modules/common/utils/router';
import React from 'react';
import { graphql } from 'react-apollo';
import Skills from '../components/Skills';
import mutations from '../graphql/mutations';
import queries from '../graphql/queries';
import {
  ISkillType,
  SkillsQueryResponse,
  SkillsRemoveMutationResponse,
  SkillsTotalCountQueryResponse,
  SkillTypesQueryResponse
} from '../types';

type Props = {
  history: any;
  queryParams: any;
  removeSkill: (params: { variables: { _id: string } }) => Promise<void>;
  skillsQuery: SkillsQueryResponse;
  skillsTotalCountQuery: SkillsTotalCountQueryResponse;
  skillTypesQuery: SkillTypesQueryResponse;
};

const List = ({
  skillsQuery,
  skillsTotalCountQuery,
  skillTypesQuery,
  removeSkill,
  history,
  queryParams
}: Props) => {
  const remove = (_id: string) => {
    confirm().then(() => {
      removeSkill({ variables: { _id } })
        .then(() => {
          Alert.success('You successfully removed a skill');
        })
        .catch(error => {
          Alert.error(error.message);
        });
    });
  };

  const isLoading =
    skillsTotalCountQuery.loading ||
    skillsQuery.loading ||
    skillTypesQuery.loading;

  const skillTypes = skillTypesQuery.skillTypes || [];
  const currentType =
    skillTypes.find(type => queryParams.typeId === type._id) ||
    ({} as ISkillType);

  const refetchQueries = memberIds => {
    return commonOptions(queryParams, memberIds);
  };

  const updatedProps = {
    history,
    queryParams,
    remove,
    totalCount: skillsTotalCountQuery.skillsTotalCount || 0,
    isLoading,
    skills: skillsQuery.skills || [],
    skillTypes,
    currentTypeName: currentType.name,
    refetchQueries
  };

  return <Skills {...updatedProps} />;
};

const commonOptions = (queryParams, memberIds?: string[]) => {
  const variables = {
    typeId: queryParams.typeId,
    ...generatePaginationParams(queryParams)
  };

  return [
    { query: gql(queries.skills), variables },
    { query: gql(queries.skillsTotalCount), variables },

    // Update user skills
    { query: gql(queries.skills), variables: { memberIds } }
  ];
};

export default compose(
  graphql<Props, SkillsQueryResponse>(gql(queries.skills), {
    name: 'skillsQuery',
    options: ({ queryParams }) => ({
      notifyOnNetworkStatusChange: true,
      variables: {
        typeId: queryParams.typeId,
        ...generatePaginationParams(queryParams)
      }
    })
  }),
  graphql<Props, SkillsTotalCountQueryResponse>(gql(queries.skillsTotalCount), {
    name: 'skillsTotalCountQuery',
    options: ({ queryParams }) => ({
      notifyOnNetworkStatusChange: true,
      variables: {
        typeId: queryParams.typeId
      }
    })
  }),
  graphql<Props, SkillTypesQueryResponse>(gql(queries.skillTypes), {
    name: 'skillTypesQuery'
  }),
  graphql<Props, SkillsRemoveMutationResponse>(gql(mutations.skillRemove), {
    name: 'removeSkill',
    options: ({ queryParams }) => ({
      refetchQueries: commonOptions(queryParams)
    })
  })
)(List);