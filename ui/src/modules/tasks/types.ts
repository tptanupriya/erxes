import {
    EditMutationResponse as EditMutationResponseC,
    RemoveMutationResponse as RemoveMutationResponseC,
    TaskDetailQueryResponse as TaskDetailQueryResponseC
} from 'erxes-ui/lib/tasks/types';

import { IActivityLogForMonth } from '../activityLogs/types';

export type EditMutationResponse = EditMutationResponseC;

export type RemoveMutationResponse = RemoveMutationResponseC;

export type TaskDetailQueryResponse = TaskDetailQueryResponseC;

export type ActivityLogQueryResponse = {
  activityLogs: IActivityLogForMonth[];
  loading: boolean;
};
