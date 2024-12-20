export interface BaseLang {
  dialog?: {
    cancel?: string;
    confirm?: string;
    placeholder?: string;
  };
  picker?: {
    cancel?: string;
    confirm?: string;
  };
  calendar?: {
    Monday?: string;
    Tuesday?: string;
    Wednesday?: string;
    Thursday?: string;
    Friday?: string;
    Saturday?: string;
    Sunday?: string;
  };
  input?: {
    placeholder?: string;
  };
  textarea?: {
    placeholder?: string;
  };
  selector?: {
    select?: string;
  };
  citySelector?: {
    selectedCityGroupName?: string;
    currentCityGroupName?: string;
    hotCitiesGroupName?: string;
    located?: string;
    current?: string;
    hot?: string;
    gpsType?: Record<string, string>;
    currentType?: Record<string, string>;
    hotCityType?: Record<string, string>;
  };
}
