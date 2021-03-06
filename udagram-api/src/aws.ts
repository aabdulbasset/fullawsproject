import AWS = require("aws-sdk");
import { config } from "./config/config";


export const s3 = new AWS.S3({
  signatureVersion: "v4",
  region: config.aws_region,
  params: { Bucket: config.aws_media_bucket },
});

// Generates an AWS signed URL for retrieving objects
export function getGetSignedUrl(key: string): string {


  return s3.getSignedUrl("getObject", {
    Bucket: config.aws_media_bucket,
    Key: key,

  });
}

// Generates an AWS signed URL for uploading objects
export function getPutSignedUrl(key: string): string {
  console.log(key)
  let result = s3.getSignedUrl("putObject", {
    Bucket: config.aws_media_bucket,
    Key: key,
  });
  console.log(result)
  return result
}
