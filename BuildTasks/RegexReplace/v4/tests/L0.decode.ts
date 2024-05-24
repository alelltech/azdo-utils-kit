import { join as joinPath} from 'node:path';
import { TaskMockRunner } from 'azure-pipelines-task-lib/mock-run';
import { setIn } from '../../../Common/v4/ParamsUtil';
import { EXT } from '../../../Common/v4/RuntimeUtil';
import { _loadData } from 'azure-pipelines-task-lib/internal'

setIn({
  source: 'bXkgc2luZ2xlIGNvbnRlbnQ=',
  sourceType: 'text',
  dest: "TESTE64",
  destType: 'var',
  direction: 'decode'
})

_loadData();

let taskPath = joinPath(__dirname, '..', `Base64.${EXT}`);
let runner: TaskMockRunner = new TaskMockRunner(taskPath);

runner.run();