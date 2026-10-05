import {spawn} from 'node:child_process';
const child=spawn(process.execPath,['node_modules/next/dist/bin/next','dev','--webpack','--hostname','127.0.0.1','--port',process.env.PORT||'4173'],{stdio:'inherit',env:{...process.env,WATCHPACK_POLLING:'1000'}});
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>child.kill(signal));
child.on('exit',code=>process.exit(code??0));
