import {
  TaskResult,
  getInput,
  setResult,
  setVariable
} from 'azure-pipelines-task-lib/task';
import { DestType, SourceType, getContent, setContent } from '@alell/azure-pipelines-task-commons';
import { isCommon as _isCommon } from '../../Common/v4/Common';

async function run() {
  try {

    const source = getInput('source', true);
    const sourceType: SourceType = getInput('sourceType', true) as any;
    const dest = getInput('dest', false);
    const destType: DestType = getInput('destType', true) as any;
    const direction: 'encode' | 'decode' = getInput('direction', true) as any;

    if(!source || !direction) return

    const sourceContent = await getContent(sourceType, source);
    if(direction === 'encode'){
      setContent(destType, dest, Buffer.from(sourceContent).toString('base64'));
    } else {
      setContent(destType, dest, Buffer.from(sourceContent, 'base64').toString('utf-8'));
    }

  }
  catch (err: any) {
    setResult(TaskResult.Failed, err.message);
  }
}

run();
