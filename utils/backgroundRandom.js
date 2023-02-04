import { BACKGROUND_COLOR } from "../data/backgroundColor"

export const backgroundRandom = () => {
	return BACKGROUND_COLOR[Math.floor(Math.random() * BACKGROUND_COLOR.length)]
}
