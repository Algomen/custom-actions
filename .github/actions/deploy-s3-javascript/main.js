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
    //     const bucket = core.getInput('bucket', { required: true });
    //     const folder = core.getInput('folder', { required: false }) || '';
    //     const cache = core.getInput('caching', { required: false }) === 'true';

    //     core.info(`Deploying to bucket: ${bucket}, folder: ${folder}, caching: ${cache}`);

    //     // Simulate deployment command
    //     let deployCommand = `aws s3 sync ./dist s3://${bucket}/${folder} --delete`;
    //     if (!cache) {
    //         deployCommand += ' --no-cache';
    //     }

    //     await exec.exec(deployCommand);

    //     core.info('Deployment completed successfully');

    //     // Set output to indicate if cache was used
    //     core.setOutput('used-cache', cache ? 'true' : 'false');

    // } catch (error) {
    //     core.setFailed(`Deployment failed: ${error.message}`);
    // }   ´

}

run();