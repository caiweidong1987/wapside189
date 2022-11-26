import {toPara} from './utils';
import * as server from './services';
import {to} from 'await-to-js';
import {message} from './message'
import {sleep} from "@hudiemon/utils";
import {food} from "./services";

export const taskQueue = async () => {
    const {data: taskList} = await server.getTask({para: toPara({phone: process.env.PHONE})})
    for (let i = 0; i < taskList.length; i++) {
        const {taskId, title, taskType} = taskList[i]
        if (taskType !== 18) continue
        const [error, {data}] = await to(server.polymerize({para: toPara({phone: process.env.PHONE, jobId: taskId})}))
        if (error) {
            message.error(`【任务】${title}：${error}`)
            continue
        }
        if (data.code === 0) {
            message.success(`【任务】${title}：${data.err}`)
            continue
        }
        message.warning(`【任务】${title}：${data.err}`)
        await sleep(1000, 2000)
    }

}