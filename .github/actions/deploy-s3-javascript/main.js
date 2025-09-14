import core from '@actions/core';
import exec from '@actions/exec';
import github from '@actions/github';

function run() {
    core.notice('Deploying to S3 using JavaScript action');

    try {
        // 1. Get inputs
        const bucket = core.getInput('bucket-name', { required: true });
        const distFolder = core.getInput('source-dir', { required: true });
        const bucketRegion = core.getInput('bucket-region', { required: true });

        // 2. Upload files
        exec.exec('aws s3 sync ' + distFolder + ' s3://' + bucket + ' --region ' + bucketRegion);
       

    } catch (error) {
        core.setFailed(`Deployment failed: ${error.message}`);
    } 

}

run();