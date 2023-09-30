// import { useEffect } from "react";

// import {
//   orkesConductorClient,
//   WorkflowExecutor,
//   // ConductorClient,
//   // TaskType,
// } from "@io-orkes/conductor-javascript";


// const clientPromise = orkesConductorClient({
//   keyId: "XXaadb9192-f4cb-494d-a14f-1c0250ab9ef2X", // optional
//   keySecret: "WlIUEQiSDZe4TOFikcAY8ZbEoLG0ORELVyOInwqnkY0EnBiS", // optional
//   serverUrl: "https://play.orkes.io/api",
// });
// const client = await clientPromise;

// //Create new workflow executor
// const executor = new WorkflowExecutor(client);
// // Using Workflow Executor to start previously registered workflow
// // const executionId = await executor.startWorkflow({ name, version, input: {} });


// // Create a workflow
// const factoryWf = {
  
//     "createTime": 1696062977224,
//     "updateTime": 1696081265956,
//     "name": "simple_interest",
//     "description": "simple interest calculator",
//     "version": 1,
//     "tasks": [
//       {
//         "name": "yearly_si",
//         "taskReferenceName": "yearly_si_ref",
//         "inputParameters": {
//           "principle": "${workflow.input.amount}",
//           "expression": "(function(){ return ($.principle*$.rate*$.time)/100/12;})();",
//           "evaluatorType": "graaljs",
//           "rate": "${workflow.input.rate}",
//           "time": "${workflow.input.time}"
//         },
//         "type": "INLINE",
//         "decisionCases": {},
//         "defaultCase": [],
//         "forkTasks": [],
//         "startDelay": 0,
//         "joinOn": [],
//         "optional": false,
//         "defaultExclusiveJoinTask": [],
//         "asyncComplete": false,
//         "loopOver": [],
//         "cacheKey": {},
//         "cacheTTL": 0,
//         "onStateChange": {}
//       },
//       {
//         "name": "monthly_si",
//         "taskReferenceName": "monthly_si_ref",
//         "inputParameters": {
//           "expression": "(function(){ return (parseInt($.yI.result))*8;})();",
//           "evaluatorType": "graaljs",
//           "yI": "${yearly_si_ref.output}"
//         },
//         "type": "INLINE",
//         "decisionCases": {},
//         "defaultCase": [],
//         "forkTasks": [],
//         "startDelay": 0,
//         "joinOn": [],
//         "optional": false,
//         "defaultExclusiveJoinTask": [],
//         "asyncComplete": false,
//         "loopOver": [],
//         "cacheKey": {},
//         "cacheTTL": 0,
//         "onStateChange": {}
//       },
//       {
//         "name": "total_amount",
//         "taskReferenceName": "total_amount_red",
//         "inputParameters": {
//           "expression": "(function(){ return Number($.total_interest.result) + Number($.principle);})();",
//           "evaluatorType": "graaljs",
//           "total_interest": "${monthly_si_ref.output}",
//           "principle": "${workflow.input.amount}"
//         },
//         "type": "INLINE",
//         "decisionCases": {},
//         "defaultCase": [],
//         "forkTasks": [],
//         "startDelay": 0,
//         "joinOn": [],
//         "optional": false,
//         "defaultExclusiveJoinTask": [],
//         "asyncComplete": false,
//         "loopOver": [],
//         "cacheKey": {},
//         "cacheTTL": 0,
//         "onStateChange": {}
//       }
//     ],
//     "inputParameters": [
//       "amount",
//       "rate",
//       "time"
//     ],
//     "outputParameters": {},
//     "failureWorkflow": "",
//     "schemaVersion": 2,
//     "restartable": true,
//     "workflowStatusListenerEnabled": false,
//     "ownerEmail": "gitesh.sarvaiya28@gmail.com",
//     "timeoutPolicy": "ALERT_ONLY",
//     "timeoutSeconds": 0,
//     "variables": {},
//     "inputTemplate": {},
//     "onStateChange": {}
//   }
//   ;

// const workflow = executor.registerWorkflow(true, factoryWf);

// const executionId = await executor.startWorkflow({
//   name: factoryWf.name,
//   version: 1,
//   input: {
    
//       "amount": "10000",
//       "rate": "10",
//       "time": "10"
    
//   },
// });

// // Query Workflow status
// // const workflowStatus = await executor.getWorkflow(executionId, true);





// async function Test() {

//   const workflowStatus = await executor.getWorkflow(executionId, true);
//   console.log(workflowStatus)
// }

// export default Test;
