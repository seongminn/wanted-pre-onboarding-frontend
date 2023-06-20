import Error from './Error';
import Success from './Success';

const iconName = { success: Success, error: Error };

export type IconNames = keyof typeof iconName;

export default iconName;
