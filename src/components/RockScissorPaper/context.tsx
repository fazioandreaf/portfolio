import {createContext, Dispatch, SetStateAction} from 'react';

import {IUserProps} from './RockScissorPaper';

interface IGameCtxProps {
	currentUser: IUserProps | undefined;
	setCurrentUser: Dispatch<SetStateAction<IUserProps | undefined>>;
	setError: Dispatch<SetStateAction<string>>;
	isPC: boolean;
}

const GameCtx = createContext<IGameCtxProps | null>(null);

export default GameCtx;
