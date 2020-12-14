import {
    EngageMessageDetailQueryResponse as EngageMessageDetailQueryResponseC,
    IDeliveryReport as IDeliveryReportC, IEngageEmail as IEngageEmailC,
    IEngageMessage as IEngageMessageC, IEngageMessageDoc as IEngageMessageDocC,
    IEngageMessenger as IEngageMessengerC, IEngageScheduleDate as IEngageScheduleDateC,
    IEngageSms as IEngageSmsC, IEngageSmsStats as IEngageSmsStatsC, IEngageStats as IEngageStatsC
} from 'erxes-ui/lib/engage/types';
import { QueryResponse } from 'modules/common/types';
import { IEmailTemplate } from 'modules/settings/emailTemplates/types';

import { IUser } from '../auth/types';
import { ISegmentCondition, ISegmentDoc } from '../segments/types';

export type IEngageScheduleDate = IEngageScheduleDateC

export interface IEngageMessenger extends IEngageMessengerC { }

export interface IEngageEmail extends IEngageEmailC { }

export interface IEngageSms extends IEngageSmsC { }

export interface IEngageStats extends IEngageStatsC { }

export interface IEngageSmsStats extends IEngageSmsStatsC { }

export interface IDeliveryReport extends IDeliveryReportC { }

export interface IEngageMessageDoc extends IEngageMessageDocC { }

export interface IEngageMessage extends IEngageMessageC { }

// mutation types

export type MutationVariables = {
  _id: string;
};

export type RemoveMutationResponse = {
  removeMutation: (params: { variables: MutationVariables }) => Promise<void>;
};

export type SetPauseMutationResponse = {
  setPauseMutation: (params: { variables: MutationVariables }) => Promise<void>;
};

export type SetLiveMutationResponse = {
  setLiveMutation: (params: { variables: MutationVariables }) => Promise<void>;
};

export type SetLiveManualMutationResponse = {
  setLiveManualMutation: (params: {
    variables: MutationVariables;
  }) => Promise<void>;
};

export type WithFormMutationVariables = {
  name: string;
  description: string;
  subOf: string;
  color: string;
  connector: string;
  conditions: ISegmentCondition[];
};

export type WithFormAddMutationResponse = {
  addMutation: (params: {
    variables: WithFormMutationVariables;
  }) => Promise<any>;
};

export type WithFormEditMutationResponse = {
  editMutation: (params: {
    variables: WithFormMutationVariables;
  }) => Promise<any>;
};

// query types
export type EngageMessageDetailQueryResponse = EngageMessageDetailQueryResponseC;

export type EngageVerifiedEmailsQueryResponse = {
  engageVerifiedEmails: string[];
  error: Error;
} & QueryResponse;

export type ListQueryVariables = {
  page?: number;
  perPage?: number;
  kind?: string;
  status?: string;
  tag?: string;
  ids?: string[];
};

export type EngageMessagesQueryResponse = {
  engageMessages: IEngageMessage[];
} & QueryResponse;

export type EngageMessagesTotalCountQueryResponse = {
  engageMessagesTotalCount: number;
} & QueryResponse;

export type EngageMessageCounts = {
  all: number;
  auto: number;
  manual: number;
  visitoryAuto: number;
};

export type TagCountQueryResponse = {
  [key: string]: number;
};

export type CountQueryResponse = {
  engageMessageCounts: EngageMessageCounts;
};

export type AddMutationResponse = {
  messagesAddMutation: (params: {
    variables: IEngageMessageDoc;
  }) => Promise<any>;
};

export type TagAdd = (params: {
  doc: { name: string; description: string };
}) => void;
export type SegmentAdd = (params: { doc: ISegmentDoc }) => void;

export type TargetCount = {
  [key: string]: number;
};

export type IEmailFormProps = {
  onChange: (
    name: 'email' | 'content' | 'fromUserId' | 'scheduleDate',
    value?: IEngageEmail | IEngageScheduleDate | string
  ) => void;
  message?: string;
  users: IUser[];
  templates: IEmailTemplate[];
  kind: string;
  email: IEngageEmail;
  fromUserId: string;
  content: string;
  scheduleDate: IEngageScheduleDate;
};

export type EngageConfigQueryResponse = {
  engagesConfigDetail: Array<{ code: string; value: string }>;
} & QueryResponse;

export interface IIntegrationWithPhone {
  _id: string;
  name: string;
  phoneNumber: string;
  isActive: boolean;
}
