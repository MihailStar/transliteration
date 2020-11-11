import { isDevelopment } from './gulp/configuration';
import archive from './gulp/tasks/archive';
import deploy from './gulp/tasks/deploy';
import development from './gulp/tasks/development';
import generateSprite from './gulp/tasks/sprite';
import production from './gulp/tasks/production';

export { archive, deploy, generateSprite };
export default (isDevelopment ? development : production);
