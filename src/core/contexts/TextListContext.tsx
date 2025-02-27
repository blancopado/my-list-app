import { type ReactNode, createContext, useContext, useMemo } from "react";
import TextListController from "../../features/list/controllers/TextListController";
import TextList from "../../features/list/domain/TextList";

interface TextListContextType {
	textListController: TextListController;
}

const TextListContext = createContext<TextListContextType | undefined>(
	undefined,
);

interface TextListProviderProps {
	children: ReactNode;
}

const TextListProvider = ({ children }: TextListProviderProps) => {
	const textListModel = useMemo(() => new TextList(), []);

	const textListController = useMemo(
		() => new TextListController(textListModel),
		[textListModel],
	);

	const value = useMemo(
		() => ({
			textListController,
		}),
		[textListController],
	);

	return (
		<TextListContext.Provider value={value}>
			{children}
		</TextListContext.Provider>
	);
};

const useTextListContext = () => {
	const context = useContext(TextListContext);
	if (!context) {
		throw new Error(
			"useTextListContext must be used within an TextListProvider",
		);
	}
	return context;
};

export { TextListProvider, useTextListContext };
