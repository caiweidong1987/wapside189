import {toPara} from './utils';
import {to} from 'await-to-js';
import {message} from './message';
import {sleep} from "@hudiemon/utils";
import {getTask,polymerize} from './services';

export const taskQueue = async () => {
    const {data: taskList} = await getTask({para: toPara()})
    for (let i = 0; i < taskList.length; i++) {
        const {taskId, title, taskType} = taskList[i]
        if (taskType !== 18) continue
        const [error, data]: any = await to(polymerize({para: toPara({jobId: taskId})}))
        if (error) {
            message.error(`【任务】${title}：${error}`)
            continue
        }
        if (data?.data.code === 0) {
            message.success(`【任务】${title}：${data?.data.err}`)
            continue
        }
        message.warning(`【任务】${title}：${data?.data.err}`)
        await sleep(1000, 2000)
    }

}