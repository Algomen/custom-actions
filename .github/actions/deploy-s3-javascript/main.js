import core from '@actions/core';
import exec from '@actions/exec';
import github from '@actions/github';

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