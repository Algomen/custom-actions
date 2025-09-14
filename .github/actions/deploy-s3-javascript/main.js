import core from '@actions/core';
import exec from '@actions/exec';
import github from '@actions/github';

// 1. Add inputs for bucket name and folder
// 2. Add output to indicate if cache was used
// 3. Use the inputs to deploy to the specified S3 bucket and folder
// 4. Use the output to indicate if cache was used in the cached-deps action

async

function run() {
    core.notice('Deploying to S3 using JavaScript action');

    // try {
    //     const bucket = core.getInput('bucket-name', { required: true });
    //     const distFolder = core.getInput('source-dir', { required: true });
    //     const bucketRegion = core.getInput('bucket-region', { required: true });

       

    // } catch (error) {
    //     core.setFailed(`Deployment failed: ${error.message}`);
    // } 

}

run();