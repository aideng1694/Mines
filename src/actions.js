export const actionTypes = {};
export const actions = {};

const CreateAction = type => (args) => ({...args, type});

const DefineAction = (type) => {
    actionTypes[type] = type;
    actions[type] = CreateAction(type);
};

[
    "HideStage",
    "Play",
    "PopModal",
    "PushModal",
    "Quit",
    "SetActivity",
    "ShowReleaseNotes",
    "ShowStage",
].forEach(actionType => DefineAction(actionType));