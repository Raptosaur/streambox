import { Pipeline } from "gstreamer-superficial";
import { StreamboxPipeline } from "./types";

export const createSrtPipeline = (
  iPipeline: StreamboxPipeline,
  srtDestination: string
): Pipeline => {
  const pipeline = new Pipeline(iPipeline.steps.join(" ! "));
  const sink = pipeline.findChild("sink");
  Object.assign(sink, {
    uri: srtDestination,
  });
  return pipeline;
};
