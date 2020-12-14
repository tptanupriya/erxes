import { boardMutations } from "erxes-ui";

export const commonMutationVariables = boardMutations.commonMutationVariables;

export const commonMutationParams = boardMutations.commonMutationParams;

export const commonDragVariables = `
  $itemId: String!,
  $aboveItemId: String,
  $destinationStageId: String!,
  $sourceStageId: String,
  $proccessId: String
`;

export const commonDragParams = `
  itemId: $itemId,
  aboveItemId: $aboveItemId,
  destinationStageId: $destinationStageId,
  sourceStageId: $sourceStageId,
  proccessId: $proccessId
`;

export const commonFields = boardMutations.commonFields;

const stagesUpdateOrder = `
  mutation stagesUpdateOrder($orders: [OrderItem]) {
    stagesUpdateOrder(orders: $orders) {
      _id
    }
  }
`;

const pipelinesWatch = `
  mutation pipelinesWatch($_id: String!, $isAdd: Boolean, $type: String!) {
    pipelinesWatch(_id: $_id, isAdd: $isAdd, type: $type) {
      _id
      isWatched
    }
  }
`;

const pipelineLabelsAdd = `
  mutation pipelineLabelsAdd($name: String!, $colorCode: String!, $pipelineId: String!) {
    pipelineLabelsAdd(name: $name, colorCode: $colorCode, pipelineId: $pipelineId) {
      _id
    }
  }
`;

const pipelineLabelsEdit = `
  mutation pipelineLabelsEdit($_id: String!, $name: String!, $colorCode: String!, $pipelineId: String!) {
    pipelineLabelsEdit(_id: $_id, name: $name, colorCode: $colorCode, pipelineId: $pipelineId) {
      _id
    }
  }
`;

const pipelineLabelsRemove = `
  mutation pipelineLabelsRemove($_id: String!) {
    pipelineLabelsRemove(_id: $_id)
  }
`;

const pipelineLabelsLabel = `
  mutation pipelineLabelsLabel($pipelineId: String!, $targetId: String!, $labelIds: [String!]!) {
    pipelineLabelsLabel(pipelineId: $pipelineId, targetId: $targetId, labelIds: $labelIds)
  }
`;

const stagesEdit = `
  mutation stagesEdit($_id: String!, $type: String, $name: String, $status: String) {
    stagesEdit(_id: $_id, type: $type, name: $name, status: $status) {
      _id
    }
  }
`;

const stagesRemove = `
  mutation stagesRemove($_id: String!) {
    stagesRemove(_id: $_id)
  }
`;

export default {
  stagesUpdateOrder,
  pipelinesWatch,
  pipelineLabelsLabel,
  pipelineLabelsAdd,
  pipelineLabelsEdit,
  pipelineLabelsRemove,
  stagesEdit,
  stagesRemove
};
