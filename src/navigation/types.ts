export enum RouteNames {
  Main = 'Main',
  Details = 'Details',
}

export type RootStackParamList = {
  [RouteNames.Main]: undefined;
  [RouteNames.Details]: {
    id: string;
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
